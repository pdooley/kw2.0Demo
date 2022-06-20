//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from "@angular/router";
import {Routes }               from "@angular/router";

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';
import {dwpShiftTypes }        from './dwpShiftTypes';


const routes: Routes = [
    {
        path     : '**',
        component: dwpShiftTypes,
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
        dwpShiftTypes,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpShiftTypesMod
{
    constructor()
    {
        //console.log('dwpShiftTypesMod::constructor() called.');
    }
}
