/**********************************************************************
 *
 * kwBs/state/currs/kwBsCurrsMod.ts
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

import {kwBsCurrs}              from './kwBsCurrs';
import {kwBsCurrsCtrlApi,
        kwBsCurrsCtrlLoad,
        kwBsCurrsCtrlMap,
        kwBsCurrsCtrlMsg}       from './kwBsCurrsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsCurrs,
        kwBsCurrsCtrlApi,
        kwBsCurrsCtrlLoad,
        kwBsCurrsCtrlMap,
        kwBsCurrsCtrlMsg,
    ],
    exports:
    [
        kwBsCurrs,
        kwBsCurrsCtrlApi,
        kwBsCurrsCtrlLoad,
        kwBsCurrsCtrlMap,
        kwBsCurrsCtrlMsg,
    ]
})
//@formatter:on
export class kwBsCurrsMod
{
    constructor()
    {
        //console.log('kwBsCurrsMod::constructor() called.');
    }
}
