/**********************************************************************
 *
 * kwNgUiFuse/form/fld/str/kwUiFldStrMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule }                 from '@angular/core';

import {FuseSharedModule }         from '@fuse/shared.module';

import {kwUiCoreMod }              from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiFldStr }              from './kwUiFldStr';


@NgModule(
{
    declarations:
    [
        kwUiFldStr,
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
        kwUiFldStr
    ]
})
export class kwUiFldStrMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
