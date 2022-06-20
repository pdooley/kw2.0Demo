//@formatter:off
import {Component}              from '@angular/core';

import {kwFbCtrlAjax}           from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}         from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}      from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwTimeSheetsFctyMsg}    from "./dwTimeSheetsUtil";
import {dwTimeSheetsStApi,
        dwTimeSheetsStArr,
        dwTimeSheetsStInit,
        dwTimeSheetsStMsg,
        dwTimeSheetsStView}     from "./dwTimeSheetsSt";


const sSTATE: string            = "timeSheets";

const STATES: kwtSubState[] =
[
    {sName: "timeSheet", sType: "base" },
    {sName: "reason",    sType: "arr" },
    {sName: "reason",    sType: "map" }
];
//@formatter:off



@Component({selector: 'dw-time-sheets-ctrl-api', template: ``})
export class dwTimeSheetsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwTimeSheetsStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-time-sheets-ctrl-init', template: ``})
export class dwTimeSheetsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwTimeSheetsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-time-sheets-ctrl-load', template: ``})
export class dwTimeSheetsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwTimeSheetsStMsg, data: dwTimeSheetsStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-time-sheets-ctrl-pub-sub', template: ``})
export class dwTimeSheetsCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwTimeSheetsFctyMsg, msg: dwTimeSheetsStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-time-sheets-ctrl-view', template: ``})
export class dwTimeSheetsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwTimeSheetsStView)
    {super(view, sSTATE)}
}
