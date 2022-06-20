/**********************************************************************
 *
 * kwFb/state/signin/kwFbSigninMod.ts
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
import {NgModule}                 from '@angular/core';

import {kwFbSignin}               from './kwFbSignin';
import {kwFbSigninCtrlVal}        from './kwFbSigninCtrlVal';


@NgModule(
{
    declarations:
    [
        kwFbSignin,
        kwFbSigninCtrlVal
    ],
    exports:
    [
        kwFbSignin,
        kwFbSigninCtrlVal,
    ]
})
//@formatter:on
export class kwFbSigninMod
{

    constructor()
    {
        //console.log('kwFbSigninMod::constructor() called.');
    }
}
