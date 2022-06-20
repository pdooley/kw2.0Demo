/**********************************************************************
 *
 * kwNgUiFuse/crud/kwUiCrudMod.ts
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
import {NgModule }             from '@angular/core';
import {CommonModule }         from '@angular/common';

import {kwUiCoreMod }          from '../core/kwUiCoreMod';

import {kwUiCellDlgMod }       from "@kwNgUiFuse/cellDlg/kwUiCellDlgMod";
import {kwUiCrudAddMod }       from "./add/kwUiCrudAddMod";
import {kwUiCrudHdrMod }       from "./hdr/kwUiCrudHdrMod";
import {kwUiCrudContentMod }   from "./content/kwUiCrudContentMod";
import {kwUiCrudSelectMod }    from "./select/kwUiCrudSelectMod";
import {kwUiDlgMod }           from "@kwNgUiFuse/dlg/kwUiDlgMod";

import {kwUiCrud }             from './kwUiCrud';


@NgModule(
{
    imports:
    [
        CommonModule,
        kwUiCoreMod,

        kwUiCellDlgMod,
        kwUiCrudAddMod,
        kwUiCrudHdrMod,
        kwUiCrudContentMod,
        kwUiCrudSelectMod,
        kwUiDlgMod,
    ],
    declarations:
    [
        kwUiCrud,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrud
    ],
})
//@formatter:on
export class kwUiCrudMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
