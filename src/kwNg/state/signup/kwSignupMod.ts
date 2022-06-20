/**********************************************************************
 *
 * kwNg/state/signup/kwSignupMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwSignup}               from './kwSignup';
import {kwSignupCtrlApi,
        kwSignupCtrlLoad,
        kwSignupCtrlMdl}        from './kwSignupCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwSignup,
        kwSignupCtrlApi,
        kwSignupCtrlLoad,
        kwSignupCtrlMdl,
    ],
    exports:
    [
        kwSignup,
        kwSignupCtrlApi,
        kwSignupCtrlLoad,
        kwSignupCtrlMdl,
    ]
})
//@formatter:on
export class kwSignupMod
{

    constructor()
    {
        //console.log('kwSignupMod::constructor() called.');
    }
}
