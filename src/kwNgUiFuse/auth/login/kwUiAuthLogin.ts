/**********************************************************************
 *
 * kwNgUiFuse/auth/login/kwUiAuthLogin.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component}          from '@angular/core';
import {fadeInAnim}         from "@kwNgUiFuseCmp/fadeIn/kwUiFadeIn";
import {OnInit}             from '@angular/core';
import {FormBuilder}        from '@angular/forms';
import {FormGroup}          from '@angular/forms';
import {Validators}         from '@angular/forms';


//@formatter:on

@Component({
    selector: 'kw-ui-auth-login',
    templateUrl: './kwUiAuthLogin.html',
    styleUrls: ['./kwUiAuthLogin.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthLogin implements OnInit {
    loginForm: FormGroup;
    loginFormErrors: any;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.loginFormErrors = {
            email: {},
            password: {}
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        this.loginForm.valueChanges.subscribe(() => {
            this.onLoginFormValuesChanged();
        });
    }

    onLoginFormValuesChanged() {
        for (let field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }

            // Clear previous errors
            this.loginFormErrors[field] = {}

            // Get the control
            const control = this.loginForm.get(field);

            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    }
}
