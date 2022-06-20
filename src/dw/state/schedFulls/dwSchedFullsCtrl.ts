//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwSchedFullsStArr,
        dwSchedFullsStView}      from "./dwSchedFullsSt";


const sSTATE:       string      = "schedFulls";


const STATES: kwtSubState[] =
[
    {sName: "schedule",     sType: "base" },
    {sName: "shiftType",    sType: "val", sParam: "shiftType"  }
];

//@formatter:off



@Component({selector: 'dw-schedule-fulls-ctrl-pub-sub', template: ``})
export class dwSchedFullsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwSchedFullsStArr)
    {super(arr, sSTATE, STATES)}
}

@Component({selector: 'dw-schedule-fulls-ctrl-view', template: ``})
export class dwSchedFullsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwSchedFullsStView)
    {super(view, sSTATE)}
}
