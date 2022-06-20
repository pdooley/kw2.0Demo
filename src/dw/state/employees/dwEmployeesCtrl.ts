//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kw/kw";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwEmployeesFctyMsg} from "./dwEmployeesUtil";
import {dwEmployeesStApi,
        dwEmployeesStArr,
        dwEmployeesStInit,
        dwEmployeesStMsg,
        dwEmployeesStView}  from "./dwEmployeesSt";


const sSTATE: string        = "employees";

//@formatter:off


@Component({selector: 'dw-employees-ctrl-api',template: ``})
export class dwEmployeesCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwEmployeesStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-employees-ctrl-init', template: ``})
export class dwEmployeesCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwEmployeesStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-employees-ctrl-load',template: ``})
export class dwEmployeesCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwEmployeesStMsg, arr: dwEmployeesStArr)
    {super(msg, arr, sSTATE)}
}


@Component({selector: 'dw-employees-ctrl-pub-sub', template: ``})
export class dwEmployeesCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwEmployeesFctyMsg, msg: dwEmployeesStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-employees-ctrl-view', template: ``})
export class dwEmployeesCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwEmployeesStView)
    {super(view, sSTATE)}
}
