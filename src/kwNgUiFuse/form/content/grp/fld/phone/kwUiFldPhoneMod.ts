/**********************************************************************
 *
 * kwNgUiFuse/form/fld/phone/kwUiFldPhoneMod.ts
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

import {kwUiFldPhone}             from './kwUiFldPhone';


@NgModule(
{
    declarations:
    [
        kwUiFldPhone,
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
        kwUiFldPhone
    ]
})
export class kwUiFldPhoneMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::constructor() called.');
    }
}
