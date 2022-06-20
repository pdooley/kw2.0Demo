/**********************************************************************
 *
 * kwNgUiFuse/cmp/sideBar/kwUiSideBarMod.ts
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

import {FuseSidebarModule}      from '@fuse/components';
import {kwUiCoreMod}          from '../../core/kwUiCoreMod';
import {kwUiSideBarContentMod}  from './content/kwUiSideBarContentMod';
import {kwUiSideBarHdrMod}    from './hdr/kwUiSideBarHdrMod';

import {kwUiSideBar}          from './kwUiSideBar';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,
        FuseSidebarModule,
        kwUiSideBarContentMod,
        kwUiSideBarHdrMod
    ],
    declarations:
    [
        kwUiSideBar,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiSideBar
    ],
})
//@formatter:on
export class kwUiSideBarMod
{
    constructor()
    {
        //console.log('kwUiSideBarMod::constructor() called.');
    }
}
