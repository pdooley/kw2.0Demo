/**********************************************************************
 *
 * kwBs/state/stat/kwBsStatusMod.ts
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

import {kwBsStatus}             from './kwBsStatus';
import {kwBsStatusCtrlStat}     from './kwBsStatusCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsStatus,
        kwBsStatusCtrlStat,
    ],
    exports:
    [
        kwBsStatus,
        kwBsStatusCtrlStat,
    ]
})
//@formatter:on
export class kwBsStatusMod
{
    constructor()
    {
        //console.log('kwBsStatusMod::constructor() called.');
    }
}
