//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwReasonsFctyMsg}      from "./dwReasonsUtil";
import {dwReasonsStApi,
        dwReasonsStArr,
        dwReasonsStInit,
        dwReasonsStMsg,
        dwReasonsStView}       from "./dwReasonsSt";


const sSTATE: string        = "reasons";

//@formatter:off


@Component({selector: 'dw-reasons-ctrl-api',template: ``})
export class dwReasonsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwReasonsStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-reasons-ctrl-init', template: ``})
export class dwReasonsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwReasonsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-reasons-ctrl-load',template: ``})
export class dwReasonsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwReasonsStMsg, data: dwReasonsStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-reasons-ctrl-pub-sub', template: ``})
export class dwReasonsCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwReasonsFctyMsg, msg: dwReasonsStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-reasons-ctrl-view', template: ``})
export class dwReasonsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwReasonsStView)
    {super(view, sSTATE)}
}
