/**********************************************************************
 *
 * kwNgUiFuse/crud/pick/kwUiCrudPickMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {NgModule}             from '@angular/core';
import {CommonModule}         from '@angular/common';

import {kwUiCoreMod}          from '../../core/kwUiCoreMod';

import {kwUiCrudPick}         from './kwUiCrudPick';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
    ],
    declarations:
    [
        kwUiCrudPick,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudPick
    ],
})
//@formatter:on
export class kwUiCrudPickMod
{
    constructor()
    {
        //console.log('kwUiCrudPickMod::constructor() called.');
    }
}
