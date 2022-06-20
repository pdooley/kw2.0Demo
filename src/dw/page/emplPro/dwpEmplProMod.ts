/**********************************************************************
 *
 * dw/crud/employees/dwpEmployeesMod.ts
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
import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {RouterModule}           from "@angular/router";
import {Routes}                 from "@angular/router";

import {kwNgUiFuseMod}          from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}              from '@dwCore/dwCoreMod';

import {dwpEmplPro }            from './dwpEmplPro';



const routes: Routes = [
    {
        path     : '**',
        component: dwpEmplPro,
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
        dwpEmplPro,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpEmplProMod
{
    constructor()
    {
        console.log('dwpEmplProMod::constructor() called.');
    }
}
