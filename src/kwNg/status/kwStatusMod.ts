/**********************************************************************
 *
 * kwNg/sstat/kwStatusMod.ts.ts
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

import {kwStatus}               from './kwStatus';
import {kwStatusCtrlStat}       from './kwStatusCtrl';


@NgModule(
{
    declarations:
    [
        kwStatus,
        kwStatusCtrlStat,
    ],
    exports:
    [
        kwStatus,
        kwStatusCtrlStat,
    ]
})
//@formatter:on
export class kwStatusMod
{
    constructor()
    {
        //console.log('kwStatusMod::constructor() called.');
    }
}
