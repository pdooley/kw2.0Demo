//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSubAll}  from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}  from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwCompanysFctyMsg}  from "./dwCompanysUtil";
import {dwCompanysStApi,
        dwCompanysStArr,
        dwCompanysStInit,
        dwCompanysStMsg,
        dwCompanysStView}   from "./dwCompanysSt";


const sSTATE: string        = "companys";
//@formatter:off


@Component({selector: 'dw-companys-ctrl-api',template: ``})
export class dwCompanysCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwCompanysStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-companys-ctrl-init', template: ``})
export class dwCompanysCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwCompanysStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-companys-ctrl-load',template: ``})
export class dwCompanysCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwCompanysStMsg, data: dwCompanysStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-companys-ctrl-pub-sub', template: ``})
export class dwCompanysCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwCompanysFctyMsg, msg: dwCompanysStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-companys-ctrl-view', template: ``})
export class dwCompanysCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwCompanysStView)
    {super(view, sSTATE)}
}
