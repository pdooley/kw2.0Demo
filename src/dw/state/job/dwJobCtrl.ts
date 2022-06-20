//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwJobFctyMsg}       from "./dwJobUtil";
import {dwJobStApi,
        dwJobStArr,
        dwJobStInit,
        dwJobStMap,
        dwJobStMdl,
        dwJobStMsg}         from "@dwState/job/dwJobSt";
import {dwJobsStArr}        from "../jobs/dwJobsSt";


const sSTATE: string        = "job";
//@formatter:off



@Component({selector: 'dw-job-ctrl-api', template: ``})
export class dwJobCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwJobStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-job-ctrl-init', template: ``})
export class dwJobCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwJobStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-job-ctrl-load', template: ``})
export class dwJobCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwJobStMsg, data: dwJobStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-job-ctrl-map', template: ``})
export class dwJobCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwJobsStArr, map: dwJobStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-job-ctrl-mdl', template: ``})
export class dwJobCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwJobStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-job-ctrl-pub-sub', template: ``})
export class dwJobCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwJobFctyMsg, msg: dwJobStMsg)
    {super(fcty, msg, sSTATE)}
}
