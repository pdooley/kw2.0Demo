//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwTimeFullsStArr,
        dwTimeFullsStView}      from "./dwTimeFullsSt";


const sSTATE: string            = "timeFulls";


const STATES: kwtSubState[] =
[
    {sName: "timeSheet", sType: "base" },
    {sName: "reason",    sType: "arr" },
    {sName: "reason",    sType: "map" },
    {sName: "jobSched",  sType: "val", sParam: "job" },
    {sName: "employee",  sType: "val", sParam: "employee" },
];

//@formatter:off



@Component({selector: 'dw-time-fulls-ctrl-pub-sub', template: ``})
export class dwTimeFullsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwTimeFullsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-time-fulls-ctrl-view', template: ``})
export class dwTimeFullsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwTimeFullsStView)
    {super(view, sSTATE)}
}
