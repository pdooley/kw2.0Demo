/**********************************************************************
 *
 * kwBs/kwBsMod.ts
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

import {NgModule}             from '@angular/core';

import {APP_INITIALIZER}      from '@angular/core';

import {kwBsStateMod}         from './state/kwBsStateMod'
import {kwBsStateModG}        from './state/kwBsStateModG'
import {kwBsStatusMod}        from './status/kwBsStatusMod'
import {kwTraceMod}           from './trace/kwTraceMod'

import {initConfig}           from "./kwBsInit";
import {kwBs}                  from "./kwBs";
import {kwBsInit}              from "./kwBsInit";


@NgModule(
{
    imports:
    [
        kwBsStateMod,
        kwBsStateModG,
        kwBsStatusMod,
        kwTraceMod,
    ],
    declarations:
    [
        kwBs
    ],
    providers:
    [
        kwBsInit,
        {
            provide: APP_INITIALIZER,
            useFactory: initConfig,
            multi: true,
            deps:[kwBsInit]
        },
    ],
    exports:
    [
        kwBs,

        kwBsStateMod,
        kwBsStateModG,
        kwBsStatusMod,
        kwTraceMod,
    ]
})
//@formatter:on
export class kwBsMod
{
    constructor()
    {
       //console.log("kwBsMod::constructor() called.");
    }

}
