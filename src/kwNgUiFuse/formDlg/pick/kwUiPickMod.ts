/**********************************************************************
 *
 * kwNgUiFuse/formDlg/pick/kwUiPickMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule}               from '@angular/core';

import {FuseSharedModule}       from '@fuse/shared.module';

import {kwUiCoreMod}            from '@kwNgUiFuseCore/kwUiCoreMod';

import {kwUiPick}               from './kwUiPick';


@NgModule(
{
    declarations:
    [
        kwUiPick,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiCoreMod
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiPick
    ]
})
export class kwUiPickMod
{
    constructor()
    {
        //console.log('kwUiPickMod::constructor() called.');
    }
}
