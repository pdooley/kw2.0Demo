//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwMetricFctyMsg}    from "./kwMetricUtil";
import {kwMetricStApi,
        kwMetricStArr,
        kwMetricStInit,
        kwMetricStMdl,
        kwMetricStMsg}      from "./kwMetricSt";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";


const sPROP: string         = "metric";

//@formatter:off



@Component({selector: 'kw-metric-ctrl-api', template: ``})
export class kwMetricCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwMetricStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-metric-ctrl-init', template: ``})
export class kwMetricCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: kwMetricStInit)
    {super(init, sPROP)}
}


@Component({selector: 'kw-metric-ctrl-load', template: ``})
export class kwMetricCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwMetricStMsg, data: kwMetricStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-metric-ctrl-mdl', template: ``})
export class kwMetricCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwMetricStMdl)
    {super(mdl, sPROP)}
}


@Component({selector: 'kw-metric-ctrl-pub-sub', template: ``})
export class kwMetricCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: kwMetricFctyMsg, msg: kwMetricStMsg)
    {super(fcty, msg, sPROP)}
}
