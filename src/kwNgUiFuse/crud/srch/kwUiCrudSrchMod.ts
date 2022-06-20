/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/kwUiCrudSrchMod.ts
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

import {kwUiCrudSrchDateMod}  from './date/kwUiCrudSrchDateMod';
import {kwUiCrudSrchSlctMod}  from './slct/kwUiCrudSrchSlctMod';
import {kwUiCrudSrchStrMod}   from './str/kwUiCrudSrchStrMod';

import {kwUiCrudSrch}         from './kwUiCrudSrch';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

        kwUiCrudSrchDateMod,
        kwUiCrudSrchSlctMod,
        kwUiCrudSrchStrMod
    ],
    declarations:
    [
        kwUiCrudSrch,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudSrch
    ],
})
//@formatter:on
export class kwUiCrudSrchMod
{
    constructor()
    {
        //console.log('kwUiCrudSrchMod::constructor() called.');
    }
}
