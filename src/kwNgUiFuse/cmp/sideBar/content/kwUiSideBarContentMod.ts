/**********************************************************************
 *
 * kwNgUiFuse/cmp/sideBar/content/kwUiSideBarContentMod.ts
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

import {kwUiCoreMod}          from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiSideBarContent}       from './kwUiSideBarContent';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
    ],
    declarations:
    [
        kwUiSideBarContent,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiSideBarContent
    ],
})
//@formatter:on
export class kwUiSideBarContentMod
{
    constructor()
    {
        //console.log('kwUiSideBarContentMod::constructor() called.');
    }
}
