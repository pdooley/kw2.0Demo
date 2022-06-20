/**********************************************************************
 *
 * kwFb/kwFb.module.ts
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

import {NgModule}                from '@angular/core';

import {kwFbCoreMod}          from "./core/kwFbCoreMod";
import {kwFbStateMod}         from "./state/kwFbStateMod";

import {kwFb}                 from "./kwFb";

@NgModule(
{
    imports:
    [
        kwFbCoreMod,
        kwFbStateMod
    ],
    declarations:
    [
        kwFb

    ],
    providers:
    [
    ],
    exports:
    [
        kwFb,

        kwFbCoreMod,
        kwFbStateMod
    ]
})
//@formatter:on
export class kwFbMod
{
    constructor()
    {
        //console.log("kwFbMod::constructor() called.");
    }


}
