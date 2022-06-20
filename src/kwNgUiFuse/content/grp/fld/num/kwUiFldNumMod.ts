/**********************************************************************
 *
 * kwNgUiFuse/form/fld/num/kwUiFldNumMod.ts
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

import {kwUiFldNum }                from './kwUiFldNum';


@NgModule(
{
    declarations:
    [
        kwUiFldNum,
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
        kwUiFldNum
    ]
})
export class kwUiFldNumMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
