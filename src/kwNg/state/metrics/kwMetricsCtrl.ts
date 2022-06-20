//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwMetricsFctyMsg}   from "./kwMetricsUtil";
import {kwMetricsStApi,
        kwMetricsStArr,
        kwMetricsStInit,
        kwMetricsStMsg}     from "./kwMetricsSt";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";


const sPROP: string         = "metrics";

//@formatter:off



@Component({selector: 'kw-metrics-ctrl-api', template: ``})
export class kwMetricsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwMetricsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-metrics-ctrl-init', template: ``})
export class kwMetricsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: kwMetricsStInit)
    {super(init, sPROP)}
}


@Component({selector: 'kw-metrics-ctrl-load', template: ``})
export class kwMetricsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwMetricsStMsg, data: kwMetricsStArr)
    {super(msg, data, sPROP)}
}



@Component({selector: 'kw-metrics-ctrl-pub-sub', template: ``})
export class kwMetricsCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: kwMetricsFctyMsg, msg: kwMetricsStMsg)
    {super(fcty, msg, sPROP)}
}
