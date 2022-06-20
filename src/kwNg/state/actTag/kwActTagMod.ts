/**********************************************************************
 *
 * kwNg/state/actTag/kwActTagMod.ts
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
import {NgModule}                   from '@angular/core';

import {kwActTag}                   from './kwActTag';
import {kwActTagCtrlApi,
        kwActTagCtrlLoad,
        kwActTagCtrlMdl}            from './kwActTagCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwActTag,
        kwActTagCtrlApi,
        kwActTagCtrlLoad,
        kwActTagCtrlMdl,
    ],
    exports:
    [
        kwActTag,
        kwActTagCtrlApi,
        kwActTagCtrlLoad,
        kwActTagCtrlMdl,
    ]
})
//@formatter:on
export class kwActTagMod
{
    constructor()
    {
        //console.log('kwActTagMod::constructor() called.');
    }
}
