//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from "@angular/router";
import {Routes }               from "@angular/router";

import {AgGridModule}         from 'ag-grid-angular';

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {dwpSchedules }        from './dwpSchedules';


const routes: Routes = [
    {
        path     : '**',
        component: dwpSchedules,
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
        dwpSchedules,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpSchedulesMod
{

    constructor()
    {
        //console.log('dwpCompanysMod::constructor() called.');
    }
}
