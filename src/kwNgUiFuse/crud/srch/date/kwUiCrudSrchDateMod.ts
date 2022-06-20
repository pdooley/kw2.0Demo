/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/date/kwUiCrudSrchDateMod.ts
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

import {kwUiCoreMod}          from '../../../core/kwUiCoreMod';

import {kwUiCrudSrchDate}         from './kwUiCrudSrchDate';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiCrudSrchDate,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudSrchDate
    ],
})
//@formatter:on
export class kwUiCrudSrchDateMod
{
    constructor()
    {
        //console.log('kwUiCrudSrchDateMod::condateuctor() called.');
    }
}
