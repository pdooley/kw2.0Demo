/**********************************************************************
 *
 * kwNgUiFuse/crud/add/kwUiCrudAddMod.ts
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

import {kwUiCrudCtrMod}       from '../ctr/kwUiCrudCtrMod';
import {kwUiSideBarMod}       from '../../cmp/sideBar/kwUiSideBarMod';


import {kwUiCrudAdd}      from './kwUiCrudAdd';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
        kwUiCrudCtrMod,
        kwUiSideBarMod

    ],
    declarations:
    [
        kwUiCrudAdd,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudAdd
    ]
})
//@formatter:on
export class kwUiCrudAddMod
{
    constructor()
    {
        //console.log('kwUiCrudAddMod::constructor() called.');
    }
}
