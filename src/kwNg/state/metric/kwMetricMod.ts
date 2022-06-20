/**********************************************************************
 *
 * kwNg/state/metric/kwMetricMod.ts
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

import {kwMetric}                   from './kwMetric';
import {kwMetricCtrlApi,
        kwMetricCtrlInit,
        kwMetricCtrlLoad,
        kwMetricCtrlMdl,
        kwMetricCtrlPubSub}         from './kwMetricCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwMetric,
        kwMetricCtrlApi,
        kwMetricCtrlInit,
        kwMetricCtrlLoad,
        kwMetricCtrlMdl,
        kwMetricCtrlPubSub
    ],
    exports:
    [
        kwMetric,
        kwMetricCtrlApi,
        kwMetricCtrlInit,
        kwMetricCtrlLoad,
        kwMetricCtrlMdl,
        kwMetricCtrlPubSub
    ]
})
//@formatter:on
export class kwMetricMod
{
    constructor()
    {
        //console.log('kwMetricMod::constructor() called.');
    }
}
