/**********************************************************************
 *
 * dw/crud/timeFulls/dwpTimeFullsMod.ts
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

import {dwpTimeFulls}      from './dwpTimeFulls';



const routes: Routes = [
    {
        path     : '**',
        component: dwpTimeFulls,
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
        dwpTimeFulls,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpTimeFullsMod
{
    constructor()
    {
        //console.log('dwpTimeFullsMod::constructor() called.');
    }
}
