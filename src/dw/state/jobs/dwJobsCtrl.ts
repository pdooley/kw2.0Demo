//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwJobsFctyMsg}      from "./dwJobsUtil";
import {dwJobsStApi,
        dwJobsStArr,
        dwJobsStInit,
        dwJobsStMsg,
        dwJobsStView}       from "./dwJobsSt";


const sSTATE: string        = "jobs";

//@formatter:off


@Component({selector: 'dw-jobs-ctrl-api',template: ``})
export class dwJobsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwJobsStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-jobs-ctrl-init', template: ``})
export class dwJobsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwJobsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-jobs-ctrl-load',template: ``})
export class dwJobsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwJobsStMsg, data: dwJobsStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-jobs-ctrl-pub-sub', template: ``})
export class dwJobsCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwJobsFctyMsg, msg: dwJobsStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-jobs-ctrl-view', template: ``})
export class dwJobsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwJobsStView)
    {super(view, sSTATE)}
}
