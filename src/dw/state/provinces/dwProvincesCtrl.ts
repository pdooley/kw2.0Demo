//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwProvincesFctyMsg}      from "./dwProvincesUtil";
import {dwProvincesStApi,
        dwProvincesStArr,
        dwProvincesStInit,
        dwProvincesStMsg,
        dwProvincesStView}       from "./dwProvincesSt";


const sSTATE: string        = "provinces";

//@formatter:off


@Component({selector: 'dw-provinces-ctrl-api',template: ``})
export class dwProvincesCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwProvincesStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-provinces-ctrl-init', template: ``})
export class dwProvincesCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwProvincesStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-provinces-ctrl-load',template: ``})
export class dwProvincesCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwProvincesStMsg, data: dwProvincesStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-provinces-ctrl-pub-sub', template: ``})
export class dwProvincesCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwProvincesFctyMsg, msg: dwProvincesStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-provinces-ctrl-view', template: ``})
export class dwProvincesCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwProvincesStView)
    {super(view, sSTATE)}
}
