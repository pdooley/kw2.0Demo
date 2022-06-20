//@formatter:off
import {NgModule}                   from '@angular/core';

import {kwNgUiMetrics}              from './kwNgUiMetrics';
import {kwNgUiMetricsCtrlView}      from './kwNgUiMetricsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiMetrics,

        kwNgUiMetricsCtrlView,
    ],
    exports:
    [
        kwNgUiMetrics,

        kwNgUiMetricsCtrlView,
    ]
})
//@formatter:on
export class kwNgUiMetricsMod
{
    constructor()
    {
        //console.log('kwNgUiMetricsMod::constructor() called.');
    }
}
