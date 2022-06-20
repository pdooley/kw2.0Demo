/**********************************************************************
 *
 * kwBsState/kwNgUi/kwUiAuthMod.ts
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
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiAuthForgot} from './forgot/kwUiAuthForgot';
import {kwUiAuthLock} from './lock/kwUiAuthLock';
import {kwUiAuthLogin} from './login/kwUiAuthLogin';
import {kwUiAuthRegister} from './register/kwUiAuthRegister';
import {kwUiAuthReset} from './reset/kwUiAuthReset';
import {kwUiAuthVerify} from './verify/kwUiAuthVerify';

import {kwUiAuth} from './kwUiAuth';

@NgModule(
    {
        imports:
            [
                kwUiCoreMod,
            ],
        declarations:
            [
                kwUiAuth,

                kwUiAuthForgot,
                kwUiAuthLock,
                kwUiAuthLogin,
                kwUiAuthRegister,
                kwUiAuthReset,
                kwUiAuthVerify,
            ],
        providers:
            [

            ],
        exports:
            [
                kwUiAuth,

                kwUiAuthForgot,
                kwUiAuthLock,
                kwUiAuthLogin,
                kwUiAuthRegister,
                kwUiAuthReset,
                kwUiAuthVerify,
            ],
        entryComponents:
            [],
    })
//@formatter:on
export class kwUiAuthMod {
    constructor() {
        //console.log('kwUiAuthMod::constructor() called.');
    }
}
