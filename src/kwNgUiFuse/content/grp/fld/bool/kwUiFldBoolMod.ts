/**********************************************************************
 *
 * kwNgUiFuse/form/fld/bool/kwUiFldBoolMod.ts
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

import {kwUiCoreMod}                from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiFldBool}                from './kwUiFldBool';


@NgModule(
{
    declarations:
    [
        kwUiFldBool,
    ],
    imports:
    [
        kwUiCoreMod,
        FuseSharedModule,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFldBool
    ]
})
export class kwUiFldBoolMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::conbooluctor() called.');
    }
}
