/**********************************************************************
 *
 * dw/crud/schedFulls/dwpSchedFullsMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 Teppen Inc.
 *
 **********************************************************************/
//@formatter:off
import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {RouterModule}       from "@angular/router";
import {Routes}             from "@angular/router";

import {kwNgUiFuseMod}      from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}          from '@dwCore/dwCoreMod';

import {dwpSchedFulls}      from './dwpSchedFulls';



const routes: Routes = [
    {
        path     : '**',
        component: dwpSchedFulls,
    }
];

@NgModule(
{
    imports:
    [
        RouterModule.forChild(routes),

        CommonModule,

        kwNgUiFuseMod,
        dwCoreMod,

    ],
    declarations:
    [
        dwpSchedFulls,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpSchedFullsMod
{
    constructor()
    {
        //console.log('dwpSchedFullsMod::constructor() called.');
    }
}
