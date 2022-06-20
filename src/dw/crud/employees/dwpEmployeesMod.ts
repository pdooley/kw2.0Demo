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
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {AgGridModule}         from 'ag-grid-angular';

import {kwNgUiFuseMod}          from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {dwpEmployees }          from './dwpEmployees';

const routes: Routes = [
    {
        path     : '**',
        component: dwpEmployees,
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
        dwpEmployees,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpEmployeesMod
{

    constructor()
    {
        //console.log('dwpEmployeesMod::constructor() called.');
    }
}
