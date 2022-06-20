/**********************************************************************
 *
 * kwNgUiFuse/cellDlg/kwUiCellDlgMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule}                   from '@angular/core';

import {FuseSharedModule}           from '@fuse/shared.module';

import {kwUiActionsMod}             from '@kwNgUiFuse/actions/kwUiActionsMod';
import {kwUiContentMod}             from '@kwNgUiFuse/content/kwUiContentMod';
import {kwUiToolbarMod}             from '@kwNgUiFuse/toolbar/kwUiToolbarMod';

import {kwUiCellDlg}                from './kwUiCellDlg';


@NgModule(
{
    declarations:
    [
        kwUiCellDlg
    ],
    imports:
    [
        FuseSharedModule,

        kwUiActionsMod,
        kwUiContentMod,
        kwUiToolbarMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCellDlg
    ],
    entryComponents:
    [
        kwUiCellDlg
    ]
})
export class kwUiCellDlgMod
{
    constructor()
    {
        //console.log('kwUiCellMod::constructor() called.');
    }
}
