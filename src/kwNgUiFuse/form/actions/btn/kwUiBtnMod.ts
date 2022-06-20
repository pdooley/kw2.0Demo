/**********************************************************************
 *
 * kwNgUiFuse/form/btn/kwUiBtnMod.ts
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

import {kwUiBtn}                  from './kwUiBtn';


@NgModule(
{
    declarations:
    [
        kwUiBtn,
    ],
    imports:
    [
        FuseSharedModule,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiBtn
    ]
})
export class kwUiBtnMod
{
    constructor()
    {
        //console.log('kwUiBtnMod::constructor() called.');
    }
}
