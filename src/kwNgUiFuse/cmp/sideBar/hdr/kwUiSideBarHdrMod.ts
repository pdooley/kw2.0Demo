/**********************************************************************
 *
 * kwNgUiFuse/cmp/sideBar/hdr/kwUiSideBarHdrMod.ts
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

import {kwUiSideBarHdr}       from './kwUiSideBarHdr';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
    ],
    declarations:
    [
        kwUiSideBarHdr,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiSideBarHdr
    ],
})
//@formatter:on
export class kwUiSideBarHdrMod
{
    constructor()
    {
        //console.log('kwUiSideBarHdrMod::constructor() called.');
    }
}
