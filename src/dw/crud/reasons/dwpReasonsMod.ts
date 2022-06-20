//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';
import {RouterModule}         from "@angular/router";
import {Routes }               from "@angular/router";

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {dwpReasons }        from './dwpReasons';


const routes: Routes = [
    {
        path     : '**',
        component: dwpReasons,
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
        dwpReasons,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpReasonsMod
{

    constructor()
    {
        //console.log('dwpReasonssMod::constructor() called.');
    }
}
