/**********************************************************************
 *
 * kwNg/state/actTags/kwActTagsMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwActTags}                 from './kwActTags';
import {kwActTagsCtrlApi,
        kwActTagsCtrlLoad}         from './kwActTagsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwActTags,
        kwActTagsCtrlApi,
        kwActTagsCtrlLoad,
    ],
    exports:
    [
        kwActTags,
        kwActTagsCtrlApi,
        kwActTagsCtrlLoad,
    ]
})
//@formatter:on
export class kwActTagsMod
{

    constructor()
    {
        //console.log('kwActTagsMod::constructor() called.');
    }
}
