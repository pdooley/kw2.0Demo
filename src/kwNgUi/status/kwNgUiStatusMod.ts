/**********************************************************************
 *
 * kwNgUi/stat/kwNgUiStatusMod.ts.ts
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

import {kwNgUiStatus}           from './kwNgUiStatus';
import {kwNgUiStatusCtrlStat}   from './kwNgUiStatusCtrl';


@NgModule(
{
    declarations:
    [
        kwNgUiStatus,
        kwNgUiStatusCtrlStat,
    ],
    exports:
    [
        kwNgUiStatus,
        kwNgUiStatusCtrlStat,
    ]
})
//@formatter:on
export class kwNgUiStatusMod
{
    constructor()
    {
        //console.log('kwStatusMod::constructor() called.');
    }
}
