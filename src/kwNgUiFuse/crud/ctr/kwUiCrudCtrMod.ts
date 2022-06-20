/**********************************************************************
 *
 * kwNgUiFuse/crud/ctr/kwUiCrudCtrMod.ts
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

import {kwNgUiAgGridMod}      from '@kwNgUiAgGrid/kwNgUiAgGridMod';
import {kwUiListMod}          from '../../list/kwUiListMod';

import {kwUiCrudCtr}          from './kwUiCrudCtr';

@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

        kwNgUiAgGridMod,
        kwUiListMod,
    ],
    declarations:
    [
        kwUiCrudCtr,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudCtr
    ],
})
//@formatter:on
export class kwUiCrudCtrMod
{
    constructor()
    {
        //console.log('kwUiCrudCtrMod::constructor() called.');
    }
}
