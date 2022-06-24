import {Component }            from '@angular/core';
import {FormBuilder }          from '@angular/forms';
import {FormGroup }            from '@angular/forms';
import {OnInit}                from '@angular/core';
import {Subject }              from "rxjs";
import {takeUntil }            from "rxjs/operators";
import {Validators }           from '@angular/forms';
import {ViewEncapsulation }    from '@angular/core';

import {MatSnackBar }          from '@angular/material';

import {FuseConfigService }    from '@fuse/services/config.service';
import {fuseAnimations }       from '@fuse/animations';

import {kw }                   from "@kw/kw";
import {kwBsAppStObj }         from "@kwBsState/app/kwBsAppSt";
import {kwBsCredStObj }        from "@kwBsState/cred/kwBsCredSt";
import {kwCred }               from "@kwClass/cred/kwCred";
import {kwErrStVal }           from "@kwNgState/err/kwErrSt";
import {kwFbErr }              from '@kwFb/class/err/kwFbErr';
import {kwFbSrvcAuth }         from '@kwFb/srvc/auth/kwFbSrvcAuth';
import {kwLog }                from "@kw/kwLog";



@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    protected sClass: string = this.constructor.name;

    private unSubAuto: Subject<any>;
    private unSubCred: Subject<any>;
    private unSubErr: Subject<any>;

    loginForm: FormGroup;


    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private srvcApp: kwBsAppStObj,
        private srvcCred: kwBsCredStObj,
        private srvcErr: kwErrStVal,
        private srvcFB: kwFbSrvcAuth,
        private snackBar: MatSnackBar   )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.unSubAuto = new Subject();
        this.unSubCred = new Subject();
        this.unSubErr = new Subject();

        this.srvcApp.val
            .pipe(takeUntil(this.unSubAuto))
            .subscribe((val) => {
                this.inspect();
            });

        this.srvcCred.val
            .pipe(takeUntil(this.unSubCred))
            .subscribe((val) => {
                this.inspect();
            });

        this.srvcErr.val
            .pipe(takeUntil(this.unSubErr))
            .subscribe((val) => {
                this.inspectErr(val);
            });

        this.inspect();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe
        this.unSubAuto.next();
        this.unSubAuto.complete();

        this.unSubCred.next();
        this.unSubCred.complete();

        this.unSubErr.next();
        this.unSubErr.complete();
    }

    /**
     * onLogin
     */
    onLogin(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onLogin");
        console.log(log.called());

        if (kw.isNull(this.loginForm))
        {
            console.error(log.invalid("loginForm"));
            return;
        }
        //console.info(log.isObj("loginForm"), this.loginForm);

        const sUsername = this.loginForm.controls['email'].value;
        if (!kw.isString(sUsername))
        {
            console.error("kwLogin::onLogin() sUsername is invalid.")
            return;
        }
        //console.info("kwLogin::onLogin() sUsername is [", sUsername, "]");

        const sPassword = this.loginForm.controls['password'].value;
        if (!kw.isString(sPassword))
        {
            console.error("kwLogin::onLogin() sPassword is invalid.")
            return;
        }
        //console.info("kwLogin::onLogin() sPassword is [", sPassword, "]");

        const data = {
            "email": sUsername,
            "password": sPassword
        };

        this.srvcFB.login(data)
    }

    /**
     * clear
     *
     */
    private clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        this.loginForm.controls['email'].setValue( "");
        this.loginForm.controls['password'].setValue( "");
    }

    private displayErr(sMsg: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "displayErr");
        //console.log(log.called());

        if (!kw.isString(sMsg))
        {
            console.error(log.invalid("sMsg"));
            return;
        }
        console.error(log.isObj("sMsg"), sMsg);

        this.snackBar.open(sMsg, "ok", {
            duration: 2000,
        });
    }

    inspect()
    {
        const log: kwLog = new kwLog(this.sClass, "inspect");
        //console.log(log.called());

        const cred: kwCred = this.srvcCred.get();
        if (!kw.isValid(cred))
        {
            //console.info(log.empty("cred"));
            return;
        }
        //console.info(log.isObj("cred"), cred);
        //console.info(log.info("[cred] is set."));

        const bAuto: boolean = this.srvcApp.bAutoLogin;
        if (!kw.isBoolean(bAuto))
        {
            //console.info(log.empty("bAuto"));
            return;
        }
        //console.info(log.is("bAuto", bAuto));
        //console.info(log.info("[bAuto] is set."));

        const sPassword = cred.getPassword();
        if (!kw.isString(sPassword))
        {
            console.error(log.invalid("sPassword"));
            return;
        }
        //console.info(log.is("sPassword", sPassword));

        const sUsername = cred.getUserName();
        if (!kw.isString(sUsername))
        {
            console.error(log.invalid("sUsername"));
            return;
        }
        //console.info(log.is("sUsername", sUsername));

        this.loginForm = this._formBuilder.group({
            email   : [sUsername, [Validators.required, Validators.email]],
            password: [sPassword, Validators.required]
        });

        if (bAuto)
        {
            //console.info(log.info("logging in automatically."));
            this.onLogin();
        }

    }

    private inspectErr(err: kwFbErr)
    {
        const log: kwLog = new kwLog(this.sClass, "inspectErr");
        //console.log(log.called());

        if (kw.isNull(err))
        {
            //console.info(log.empty("err"));
            return;
        }
        //console.info(log.isObj("err"), err);

        const sMsg = err.sMsg;
        if (!kw.isString(sMsg))
        {
            console.error(log.invalid("sMsg"));
            return;
        }
        //console.info(log.isObj("sMsg"), sMsg);

        this.displayErr(sMsg)
    }
}
