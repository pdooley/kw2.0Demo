/**********************************************************************
 *
 * kwNgUi/kwNgUiMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off

import {NgModule}               from '@angular/core';
import {RouterModule}           from '@angular/router';

import {kwNgUiStateMod}         from './state/kwNgUiStateMod'
import {kwNgUiStatusMod}        from './status/kwNgUiStatusMod'

import {kwNgUi}                 from "./kwNgUi";


const routes =
[
   {
        path        : 'kw',
        loadChildren: './page/kwNgUiPageMod#kwNgUiPageMod'
   }
];


@NgModule(
{
    imports:
    [
        RouterModule.forChild(routes),
        kwNgUiStateMod,
        kwNgUiStatusMod
    ],
    declarations:
    [
        kwNgUi
    ],
    providers:
    [
    ],
    exports:
    [
        kwNgUi,

        kwNgUiStateMod,
        kwNgUiStatusMod
    ]
})
//@formatter:on
export class kwNgUiMod
{
    constructor()
    {
        //console.log("kwNgMod::constructor() called.");
    }
}
