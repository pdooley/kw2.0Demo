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

import {dwpMgmtPayroll }            from './dwpMgmtPayroll';



const routes: Routes = [
    {
        path     : '**',
        component: dwpMgmtPayroll,
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
        dwpMgmtPayroll,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpMgmtPayrollMod
{
    constructor()
    {
        console.log('dwpMgmtPayrollMod::constructor() called.');
    }
}
