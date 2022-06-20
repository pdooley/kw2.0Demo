import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

import { MatSnackBar }          from '@angular/material';

import { FuseConfigService }    from '@fuse/services/config.service';
import { fuseAnimations }       from '@fuse/animations';

import { kw }                   from "@kw/kw";
import { kwCred }               from "@kwClass/cred/kwCred";
import { kwErrStVal }             from '@kwNgState/err/kwErrSt';
import { kwFbErr }              from '@kwFb/class/err/kwFbErr';
import { kwFbSrvcAuth }             from '@kwFb/srvc/auth/kwFbSrvcAuth';
import { kwLog }                from "@kw/kwLog";

@Component({
    selector     : 'register',
    templateUrl  : './register.component.html',
    styleUrls    : ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class RegisterComponent implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;

    registerForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;
    private _unsubscribeErr: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private srvcErr: kwErrStVal,
        private srvcFB: kwFbSrvcAuth,
        private snackBar: MatSnackBar
    )
    {
        //console.log("RegisterComponent::ngOnInit() called.");

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
     * ngOnInit
     */
    ngOnInit(): void
    {
        //console.log("RegisterComponent::ngOnInit() called.");

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this._unsubscribeErr = new Subject();

        this.registerForm = this._formBuilder.group({
            name           : ['John Smith', Validators.required],
            email          : ['jsmith@itkunst.com', [Validators.required, Validators.email]],
            password       : ['password', Validators.required],
            passwordConfirm: ['password', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });

        this.srvcErr.val
            .pipe(takeUntil(this._unsubscribeErr))
            .subscribe( err => {
                this.processErr(err);
            })
    }

    /**
     * ngOnDestroy
     */
    ngOnDestroy(): void
    {
        //console.log("RegisterComponent::ngOnDestroy() called.");

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        // Unsubscribe from all subscriptions
        this._unsubscribeErr.next();
        this._unsubscribeErr.complete();
    }

    onRegister()
    {
        const log: kwLog = new kwLog(this.sClass, "onRegister");
        //console.log(log.called());

        if (kw.isNull(this.registerForm))
        {
            //console.info(log.invalid("registerForm"));
            return;
        }
        //console.info(log.isObj("registerForm"), this.registerForm);

        let value = {
            'name' : this.registerForm.controls['name'].value,
            'email': this.registerForm.controls['email'].value,
            'password': this.registerForm.controls['password'].value
        };
        //console.info(log.isObj("value"), value);

        this.srvcFB.register(value);
    }

    /**
     * clear
     *
     */
    clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        this.registerForm.controls['name'].setValue( "");
        this.registerForm.controls['email'].setValue( "");
        this.clearPwd();
    }


    /**
     * clear
     *
     */
    clearPwd(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clearPwd");
        //console.log(log.called());

        this.registerForm.controls['password'].setValue( "");
        this.registerForm.controls['passwordConfirm'].setValue( "");
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

    private processErr(err: kwFbErr): void
    {
        const log: kwLog = new kwLog(this.sClass, "processErr");
        //console.log(log.called());

        if (kw.isNull(err))
        {
            console.error(log.invalid("err"));
            return;
        }
        console.error(log.isObj("err"), err);

        const sMsg = err.sMsg;
        if (!kw.isString(sMsg))
        {
            console.error(log.invalid("sMsg"));
            return;
        }
        console.error(log.isObj("sMsg"), sMsg);

        this.displayErr(sMsg)

        const sCode: string = err.sCode;
        if (!kw.isString(sCode))
        {
            console.error(log.invalid("sCode"));
            return;
        }
        console.error(log.isObj("sCode"), sCode);

        switch (sCode)
        {
            case "auth/weak-password":
                this.clearPwd();
                break;

        }
    }

}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    //console.log("RegisterComponent::confirmPasswordValidator() called.");

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {'passwordsNotMatching': true};
};
