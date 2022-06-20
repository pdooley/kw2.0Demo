/**********************************************************************
 *
 * kwBs/trace/kwTraceMod.ts
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

import {kwTrace}                from './kwTrace';
import {kwTraceCtrlTrace}       from './kwTraceCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwTrace,
        kwTraceCtrlTrace,
    ],
    exports:
    [
        kwTrace,
        kwTraceCtrlTrace,
    ]
})
//@formatter:on
export class kwTraceMod
{
    constructor()
    {
        //console.log('kwTraceMod::constructor() called.');
    }
}
