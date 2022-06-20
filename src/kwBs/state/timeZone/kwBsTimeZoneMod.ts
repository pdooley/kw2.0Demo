/**********************************************************************
 *
 * kwBs/state/timeZone/kwBsTimeZoneMod.ts
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

import {kwBsTimeZone}           from './kwBsTimeZone';
import {kwBsTimeZoneCtrlApi,
        kwBsTimeZoneCtrlMdl}    from './kwBsTimeZoneCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsTimeZone,
        kwBsTimeZoneCtrlApi,
        kwBsTimeZoneCtrlMdl,
    ],
    exports:
    [
        kwBsTimeZone,
        kwBsTimeZoneCtrlApi,
        kwBsTimeZoneCtrlMdl,
    ]
})
//@formatter:on
export class kwBsTimeZoneMod
{
    constructor()
    {
        //console.log('kwBsTimeZoneMod::constructor() called.');
    }
}
