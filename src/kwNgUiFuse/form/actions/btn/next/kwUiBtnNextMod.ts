/**********************************************************************
 *
 * kwNgUiFuse/form/btn/next/kwUiBtnNextMod.ts
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

import {kwUiBtnNext}              from './kwUiBtnNext';


@NgModule(
{
    declarations:
    [
        kwUiBtnNext,
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
        kwUiBtnNext
    ]
})
export class kwUiBtnNextMod
{
    constructor()
    {
        //console.log('kwUiBtnNextMod::constructor() called.');
    }
}
