/**********************************************************************
 *
 * kwFb/state/kwFbStateMod.tsts
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
import {NgModule}               from '@angular/core';

import {kwFbSigninMod}        from "./signin/kwFbSigninMod";
import {kwFbUserMod}            from "./user/kwFbUserMod";

import {kwFbState}            from './kwFbState';

@NgModule(
{
    imports:
    [
        kwFbSigninMod,
        kwFbUserMod
    ],
    declarations:
    [
        kwFbState,
    ],
    exports:
    [
        kwFbState,
        kwFbSigninMod,
        kwFbUserMod
    ],
    providers:
    [

    ]
})
//@formatter:on
export class kwFbStateMod {

    constructor()
    {
        //console.log('kwFbStateMod::constructor() called.');
    }
}
