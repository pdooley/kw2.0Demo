/**********************************************************************
 *
 * kwBsState/kwBsState.module.ts
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

import {kwSrvcMod}            from './srvc/kwSrvcMod'
import {kwStateMod}           from './state/kwStateMod'
import {kwStateModG}          from './state/kwStateModG'
import {kwStatusMod}       from './status/kwStatusMod'

import {kwNg}                  from "./kwNg";
import {kwHttpMsg}            from "./http/kwHttpMsg";


@NgModule(
{
    imports:
    [
        kwSrvcMod,
        kwStateMod,
        kwStateModG,
        kwStatusMod
    ],
    declarations:
    [
        kwNg

    ],
    providers:
    [
        kwHttpMsg,
    ],
    exports:
    [
        kwNg,

        kwSrvcMod,
        kwStateMod,
        kwStateModG,
        kwStatusMod
    ]
})
//@formatter:on
export class kwNgMod
{
    constructor()
    {
        //console.log("kwNgMod::constructor() called.");
    }

}
