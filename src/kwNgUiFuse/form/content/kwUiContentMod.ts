/**********************************************************************
 *
 * kwNgUiFuse/content/kwUiContentMod.ts
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

import {kwUiGrpMod}                 from './grp/kwUiGrpMod';

import {kwUiContent }              from './kwUiContent';


@NgModule(
{
    declarations:
    [
        kwUiContent,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiGrpMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiContent
    ]
})
export class kwUiContentMod
{
    constructor()
    {
        //console.log('kwUiContentMod::constructor() called.');
    }
}
