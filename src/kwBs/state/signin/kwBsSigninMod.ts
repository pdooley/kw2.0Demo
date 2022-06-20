/**********************************************************************
 *
 * kwBs/state/signin/kwBsSigninMod.ts
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
import {NgModule}                       from '@angular/core';

import {kwBsSignin}                     from './kwBsSignin';
import {kwBsSigninCtrlApi,
        kwBsSigninCtrlLoad,
        kwBsSigninCtrlMdl,}             from './kwBsSigninCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsSignin,
        kwBsSigninCtrlApi,
        kwBsSigninCtrlLoad,
        kwBsSigninCtrlMdl,
    ],
    exports:
    [
        kwBsSignin,
        kwBsSigninCtrlApi,
        kwBsSigninCtrlLoad,
        kwBsSigninCtrlMdl,
    ]
})
//@formatter:on
export class kwBsSigninMod
{
    constructor()
    {
        //console.log('kwBsSigninMod::constructor() called.');
    }
}
