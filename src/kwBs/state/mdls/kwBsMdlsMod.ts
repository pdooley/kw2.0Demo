/**********************************************************************
 *
 * kwBs/state/mdls/kwBsMdlsMod.ts
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

import {kwBsMdls}               from './kwBsMdls';
import {kwBsMdlsCtrlObj}        from './kwBsMdlsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsMdls,
        kwBsMdlsCtrlObj,
    ],
    exports:
    [
        kwBsMdls,
        kwBsMdlsCtrlObj,
    ]
})
//@formatter:on
export class kwBsMdlsMod
{
    constructor()
    {
        //console.log('kwBsMdlsMod::constructor() called.');
    }
}
