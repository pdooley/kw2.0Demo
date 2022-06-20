/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/str/kwUiCrudSrchStrMod.ts
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

import {kwUiCrudSrchStr}         from './kwUiCrudSrchStr';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiCrudSrchStr,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudSrchStr
    ],
})
//@formatter:on
export class kwUiCrudSrchStrMod
{
    constructor()
    {
        //console.log('kwUiCrudSrchStrMod::constructor() called.');
    }
}
