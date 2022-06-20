//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwScheduleFctyMsg}  from "./dwScheduleUtil";
import {dwScheduleStApi,
        dwScheduleStArr,
        dwScheduleStInit,
        dwScheduleStMap,
        dwScheduleStMdl,
        dwScheduleStMsg}    from "./dwScheduleSt";
import {dwSchedulesStArr}    from "../schedules/dwSchedulesSt";


const sSTATE: string        = "schedule";

//@formatter:off



@Component({selector: 'dw-schedule-ctrl-api', template: ``})
export class dwScheduleCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwScheduleStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-schedule-ctrl-init', template: ``})
export class dwScheduleCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwScheduleStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-schedule-ctrl-load', template: ``})
export class dwScheduleCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwScheduleStMsg, data: dwScheduleStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-schedule-ctrl-map', template: ``})
export class dwScheduleCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwSchedulesStArr, map: dwScheduleStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-schedule-ctrl-mdl', template: ``})
export class dwScheduleCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(view: dwScheduleStMdl)
    {super(view, sSTATE)}
}


@Component({selector: 'dw-schedule-ctrl-pub-sub', template: ``})
export class dwScheduleCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwScheduleFctyMsg, msg: dwScheduleStMsg)
    {super(fcty, msg, sSTATE)}
}
