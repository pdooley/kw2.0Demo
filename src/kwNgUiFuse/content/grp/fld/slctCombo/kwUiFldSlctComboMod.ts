/**********************************************************************
 *
 * kwNgUiFuse/formDlg/content/grp/fld/slctCombo/kwUiFldSlctComboMod.ts
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

import {kwUiCoreMod}            from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiFldSlctCombo}            from './kwUiFldSlctCombo';


@NgModule(
{
    declarations:
    [
        kwUiFldSlctCombo,
    ],
    imports:
    [
        FuseSharedModule,
        kwUiCoreMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFldSlctCombo
    ]
})
export class kwUiFldSlctComboMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
