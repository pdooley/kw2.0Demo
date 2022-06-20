//@formatter:off
import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {RouterModule}           from "@angular/router";
import {Routes}                 from "@angular/router";

import {kwNgUiFuseMod}          from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}              from '@dwCore/dwCoreMod';

import {dwpMusics}            from './dwpMusics';


const routes: Routes = [
    {
        path     : '**',
        component: dwpMusics,
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
        dwpMusics
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpMusicsMod
{
    constructor()
    {
        //console.log('dwpMusicsMod::constructor() called.');
    }
}
