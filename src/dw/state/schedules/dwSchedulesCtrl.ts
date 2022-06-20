//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwSchedulesFctyMsg} from "./dwSchedulesUtil";
import {dwSchedulesStApi,
        dwSchedulesStArr,
        dwSchedulesStInit,
        dwSchedulesStMsg,
        dwSchedulesStView}  from "./dwSchedulesSt";


const sSTATE: string        = "schedules";

//@formatter:off



@Component({selector: 'dw-schedules-ctrl-api', template: ``})
export class dwSchedulesCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwSchedulesStApi)
    {super(api, sSTATE);}
}


@Component({selector: 'dw-schedules-ctrl-init', template: ``})
export class dwSchedulesCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwSchedulesStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-schedules-ctrl-load', template: ``})
export class dwSchedulesCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwSchedulesStMsg, data: dwSchedulesStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-schedules-ctrl-pub-sub', template: ``})
export class dwSchedulesCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwSchedulesFctyMsg, msg: dwSchedulesStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-schedules-ctrl-view', template: ``})
export class dwSchedulesCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwSchedulesStView)
    {super(view, sSTATE)}
}
