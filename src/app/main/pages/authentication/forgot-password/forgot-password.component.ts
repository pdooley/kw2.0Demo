import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Subject, Subscription} from "rxjs";


import { MatSnackBar}           from "@angular/material";

import { FuseConfigService }    from '@fuse/services/config.service';
import { fuseAnimations }       from '@fuse/animations';
import { takeUntil }            from "rxjs/operators";

import { kw }                   from "@kw/kw";
import { kwBsAutoLoginStSmpl }  from "@kwBsState/autoLogin/kwBsAutoLoginSt";
import { kwBsCredStObj }        from "@kwBsState/cred/kwBsCredSt";
import { kwErrStVal }           from "@kwNgState/err/kwErrSt";
import { kwCred }               from "@kwClass/cred/kwCred";
import { kwFbErr }              from '@kwFb/class/err/kwFbErr';
import { kwFbSrvcAuth }         from '@kwFb/srvc/auth/kwFbSrvcAuth';
import { kwLog }                from "@kw/kwLog";

@Component({
    selector     : 'forgot-password',
    templateUrl  : './forgot-password.component.html',
    styleUrls    : ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ForgotPasswordComponent implements OnInit
{
    protected sClass: string = this.constructor.name;

    forgotPasswordForm: FormGroup;

    private _unsubscribeAuto: Subject<any>;
    private _unsubscribeCred: Subject<any>;
    private _unsubscribeErr: Subject<any>;


    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private srvcAuto:   kwBsAutoLoginStSmpl,
        private srvcCred:   kwBsCredStObj,
        private srvcErr:    kwErrStVal,
        private srvcFB:     kwFbSrvcAuth,
        private snackBar:   MatSnackBar    )
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

        this._unsubscribeAuto = new Subject();
        this._unsubscribeCred = new Subject();
        this._unsubscribeErr = new Subject();

        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.srvcAuto.val
            .pipe(takeUntil(this._unsubscribeAuto))
            .subscribe((val) => {
                this.inspect();
            });

        this.srvcCred.val
            .pipe(takeUntil(this._unsubscribeCred))
            .subscribe((val) => {
                this.inspect();
            });

        this.srvcErr.val
            .pipe(takeUntil(this._unsubscribeErr))
            .subscribe((val) => {
                this.inspectErr(val);
            });

     }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAuto.next();
        this._unsubscribeAuto.complete();

        this._unsubscribeCred.next();
        this._unsubscribeCred.complete();

        this._unsubscribeErr.next();
        this._unsubscribeErr.complete();
    }

    /**
     * onForgot
     */
    onForgot(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onForgot");
        //console.log(log.called());

        if (kw.isNull(this.forgotPasswordForm))
        {
            console.error(log.invalid("forgotPasswordForm"));
            return;
        }
        //console.info(log.is("forgotPasswordForm", this.forgotPasswordForm));

        const sUsername = this.forgotPasswordForm.controls['email'].value;
        if (!kw.isString(sUsername))
        {
            console.error("kwLogin::onLogin() sUsername is invalid.")
            return;
        }
        //console.info(log.is("sUsername", sUsername));


        const data = {
            "email": sUsername
        };
        //console.info(log.isObj("data"), data);

        this.srvcFB.forgot(data)
    }

    /**
     * clear
     *
     */
    private clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        this.forgotPasswordForm.controls['email'].setValue( "");
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
            duration: 3000,
        });
    }

    inspect()
    {
        const log: kwLog = new kwLog(this.sClass, "inspect");
        //console.log(log.called());

        const cred: kwCred = this.srvcCred.val;
        if (!kwCred.is(cred))
        {
            //console.info(log.empty("cred"));
            return;
        }
        //console.info(log.isObj("cred"), cred);
        //console.info(log.info("[cred] is set."));

        const bAuto: boolean = this.srvcAuto.val;
        if (!kw.isBoolean(bAuto))
        {
            //console.info(log.empty("bAuto"));
            return;
        }
        //console.info(log.is("bAuto", bAuto));
        //console.info(log.info("[bAuto] is set."));

        const sUsername = cred.getUserName();
        if (!kw.isString(sUsername))
        {
            console.error(log.invalid("sUsername"));
            return;
        }
        //console.info(log.is("sUsername", sUsername));

        this.forgotPasswordForm = this._formBuilder.group({
            email   : [sUsername, [Validators.required, Validators.email]],
        });

        if (bAuto)
        {
            //console.info(log.info("logging in automatically."));
            this.onForgot();
        }

    }

    private inspectErr(err: kwFbErr)
    {
        const log: kwLog = new kwLog(this.sClass, "inspectErr");
        //console.log(log.called());

        if (kw.isNull(err))
        {
            console.error(log.invalid("err"));
            return;
        }
        //console.info(log.isObj("err"), err);

        const sMsg = err.sMsg;
        if (!kw.isString(sMsg))
        {
            console.error(log.invalid("sMsg"));
            return;
        }
        console.error(log.isObj("sMsg"), sMsg);

        this.displayErr(sMsg)
    }

}
