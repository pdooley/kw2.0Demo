/**********************************************************************
 *
 * kwNg/state/metrics/kwMetricsMod.ts
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

import {kwMetrics}                  from './kwMetrics';
import {kwMetricsCtrlApi,
        kwMetricsCtrlInit,
        kwMetricsCtrlLoad,
        kwMetricsCtrlPubSub}        from './kwMetricsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwMetrics,
        kwMetricsCtrlApi,
        kwMetricsCtrlInit,
        kwMetricsCtrlLoad,
        kwMetricsCtrlPubSub
    ],
    exports:
    [
        kwMetrics,
        kwMetricsCtrlApi,
        kwMetricsCtrlInit,
        kwMetricsCtrlLoad,
        kwMetricsCtrlPubSub
    ]
})
//@formatter:on
export class kwMetricsMod
{
    constructor()
    {
        //console.log('kwMetricsMod::constructor() called.');
    }
}
