/**********************************************************************
 *
 * kwNgUiFuse/form/fld/email/kwUiFldEmailMod.ts
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

import {kwUiFldEmail}             from './kwUiFldEmail';

@NgModule(
{
    declarations:
    [
        kwUiFldEmail,
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
        kwUiFldEmail
    ]
})
export class kwUiFldEmailMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
