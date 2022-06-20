/**********************************************************************
 *
 * kwNgUiFuse/crud/content/kwUiCrudContentMod.ts
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


import {kwUiCrudContent}      from './kwUiCrudContent';


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
        kwUiCrudContent,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudContent
    ]
})
//@formatter:on
export class kwUiCrudContentMod
{
    constructor()
    {
        //console.log('kwUiCrudContentMod::constructor() called.');
    }
}
