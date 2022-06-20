//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {kwNgUiMetricsStView}    from "./kwNgUiMetricsSt";


const sSTATE: string            = "metrics";

//@formatter:off


@Component({selector: 'kw-ng-ui-metrics-ctrl-view', template: ``})
export class kwNgUiMetricsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: kwNgUiMetricsStView)
    {super(view, sSTATE)}
}
