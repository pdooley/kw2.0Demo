/**********************************************************************
 *
 * kwNgUiFuse/formDlg/content/grp/fld/slct/kwUiFldSlctMod.ts
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

import {kwUiFldSlct}            from './kwUiFldSlct';


@NgModule(
{
    declarations:
    [
        kwUiFldSlct,
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
        kwUiFldSlct
    ]
})
export class kwUiFldSlctMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
