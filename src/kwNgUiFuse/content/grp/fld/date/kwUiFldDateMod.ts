/**********************************************************************
 *
 * kwNgUiFuse/form/fld/date/kwUiFldDateMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule}                 from '@angular/core';

import {FuseSharedModule}         from '@fuse/shared.module';

import {kwUiCoreMod}              from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiFldDate}              from './kwUiFldDate';


@NgModule(
{
    declarations:
    [
        kwUiFldDate,
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
        kwUiFldDate
    ]
})
export class kwUiFldDateMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
