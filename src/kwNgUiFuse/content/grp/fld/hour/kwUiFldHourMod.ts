/**********************************************************************
 *
 * kwNgUiFuse/form/fld/hour/kwUiFldHourMod.ts
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

import {kwUiFldHour }                from './kwUiFldHour';


@NgModule(
{
    declarations:
    [
        kwUiFldHour,
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
        kwUiFldHour
    ]
})
export class kwUiFldHourMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
