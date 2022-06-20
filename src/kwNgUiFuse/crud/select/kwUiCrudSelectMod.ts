/**********************************************************************
 *
 * kwNgUiFuse/crud/select/kwUiCrudSelectMod.ts
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
import {NgModule}                   from '@angular/core';
import {CommonModule}               from '@angular/common';

import {FuseConfirmDialogModule}    from '@fuse/components/confirm-dialog/confirm-dialog.module';
import {kwUiCoreMod}                from '../../core/kwUiCoreMod';

import {kwUiCrudSelect}             from './kwUiCrudSelect';


@NgModule(
{
    imports:
    [
        CommonModule,

        FuseConfirmDialogModule,

        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiCrudSelect,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiCrudSelect
    ],
})
//@formatter:on
export class kwUiCrudSelectMod
{
    constructor()
    {
        //console.log('kwUiCrudSelectMod::constructor() called.');
    }
}
