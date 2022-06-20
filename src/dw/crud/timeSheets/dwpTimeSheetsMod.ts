//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from "@angular/router";
import {Routes }               from "@angular/router";

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {dwpTimeSheets }        from './dwpTimeSheets';


const routes: Routes = [
    {
        path     : '**',
        component: dwpTimeSheets,
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
        dwpTimeSheets,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpTimeSheetsMod
{

    constructor()
    {
        //console.log('dwpCompanysMod::constructor() called.');
    }
}
