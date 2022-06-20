/**********************************************************************
 *
 * kwBs/state/timeZones/kwBsTimeZonesMod.ts
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

import {kwBsTimeZones}                from './kwBsTimeZones';
import {kwBsTimeZonesCtrlApi,
        kwBsTimeZonesCtrlLoad,
        kwBsTimeZonesCtrlMap,
        kwBsTimeZonesCtrlMsg}         from './kwBsTimeZonesCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsTimeZones,
        kwBsTimeZonesCtrlApi,
        kwBsTimeZonesCtrlLoad,
        kwBsTimeZonesCtrlMap,
        kwBsTimeZonesCtrlMsg,
    ],
    exports:
    [
        kwBsTimeZones,
        kwBsTimeZonesCtrlApi,
        kwBsTimeZonesCtrlLoad,
        kwBsTimeZonesCtrlMap,
        kwBsTimeZonesCtrlMsg,
    ]
})
//@formatter:on
export class kwBsTimeZonesMod
{
    constructor()
    {
        //console.log('kwBsTimeZonesMod::constructor() called.');
    }
}
