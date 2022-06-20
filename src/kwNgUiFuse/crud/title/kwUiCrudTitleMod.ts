/**********************************************************************
 *
 * kwNgUiFuse/crud/title/kwUiCrudTitleMod.ts
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

import {kwUiCrudTitle}         from './kwUiCrudTitle';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiCrudTitle,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudTitle
    ],
})
//@formatter:on
export class kwUiCrudTitleMod
{
    constructor()
    {
        //console.log('kwUiCrudTitleMod::constructor() called.');
    }
}
