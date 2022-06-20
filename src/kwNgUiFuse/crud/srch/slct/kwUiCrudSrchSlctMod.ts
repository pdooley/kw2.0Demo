/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/kwUiCrudSrchSlctMod.ts
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

import {kwUiCrudSrchSlct}         from './kwUiCrudSrchSlct';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiCrudSrchSlct,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudSrchSlct
    ],
})
//@formatter:on
export class kwUiCrudSrchSlctMod
{
    constructor()
    {
        //console.log('kwUiCrudSrchSlctMod::constructor() called.');
    }
}
