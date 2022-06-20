/**********************************************************************
 *
 * dw/crud/emplTimes/dwpEmplTimesMod.ts
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

import {kwNgUiFuseMod}        from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}            from '@dwCore/dwCoreMod';

import {dwpEmplTimes}         from './dwpEmplTimes';



const routes: Routes = [
    {
        path     : '**',
        component: dwpEmplTimes,
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
        dwpEmplTimes,
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpEmplTimesMod
{
    constructor()
    {
        //console.log('dwpEmplTimesMod::constructor() called.');
    }
}
