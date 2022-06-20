import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MatSnackBar }          from '@angular/material';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { kw }                   from "@kw/kw";
import { kwErrStVal }             from "@kwNgState/err/kwErrSt";
import { kwFbErr }              from '@kwFb/class/err/kwFbErr';
import { kwFbSrvcAuth }             from '@kwFb/srvc/auth/kwFbSrvcAuth';
import { kwLog }                from "@kw/kwLog";

@Component({
    selector     : 'reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls    : ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ResetPasswordComponent implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;


    resetPasswordForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;
    private _unsubscribeErr: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private srvcErr: kwErrStVal,
        private srvcFB: kwFbSrvcAuth,
        private snackBar: MatSnackBar    )
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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this._unsubscribeErr = new Subject();

        this.resetPasswordForm = this._formBuilder.group({
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
            });

        this.srvcErr.val
            .pipe(takeUntil(this._unsubscribeErr))
            .subscribe( err => {
                this.inspectErr(err);
            })


    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();

        // Unsubscribe from all subscriptions
        this._unsubscribeErr.next();
        this._unsubscribeErr.complete();
    }

    /**
     * onLogin
     */
    onReset(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onReset");
        //console.log(log.called());

        if (kw.isNull(this.resetPasswordForm))
        {
            console.error(log.invalid("resetPasswordForm"));
            return;
        }
        //console.info(log.isObj("resetPasswordForm"), this.resetPasswordForm);

        const sUsername = this.resetPasswordForm.controls['email'].value;
        if (!kw.isString(sUsername))
        {
            console.error(log.invalid("sUsername"));
            return;
        }
        //console.info(log.is("sUsername", sUsername));

        const sPassword = this.resetPasswordForm.controls['password'].value;
        if (!kw.isString(sPassword))
        {
            console.error(log.invalid("sPassword"));
            return;
        }
        //console.info(log.is("sPassword", sPassword));

        const data = {
            "email": sUsername,
            "password": sPassword
        };
        //console.info(log.isObj("data"), data);

        this.srvcFB.login(data)
    }

    private clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        this.resetPasswordForm.controls['email'].setValue( "");
        this.resetPasswordForm.controls['password'].setValue( "");
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

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

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
