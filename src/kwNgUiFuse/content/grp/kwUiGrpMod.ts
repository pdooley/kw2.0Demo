/**********************************************************************
 *
 * kwNgUiFuse/content/grp/kwUiGrpMod.ts
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

import {kwUiFldMod}                 from './fld/kwUiFldMod';

import {kwUiGrp }                  from './kwUiGrp';


@NgModule(
{
    declarations:
    [
        kwUiGrp,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiFldMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiGrp
    ]
})
export class kwUiGrpMod
{
    constructor()
    {
        //console.log('kwUiFormMod::constructor() called.');
    }
}
