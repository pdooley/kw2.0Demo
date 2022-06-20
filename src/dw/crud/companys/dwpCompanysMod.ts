//@formatter:off
import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {RouterModule}           from "@angular/router";
import {Routes}                 from "@angular/router";

import {kwNgUiFuseMod}          from "@kwNgUiFuse/kwNgUiFuseMod";

import {dwCoreMod}              from '@dwCore/dwCoreMod';

import {dwpCompanys}            from './dwpCompanys';


const routes: Routes = [
    {
        path     : '**',
        component: dwpCompanys,
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
        dwpCompanys
    ],
    providers:
    [

    ],
    exports:
    [
    ],
})
//@formatter:on
export class dwpCompanysMod
{
    constructor()
    {
        //console.log('dwpCompanysMod::constructor() called.');
    }
}
