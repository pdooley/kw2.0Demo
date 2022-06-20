//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwEmplFullsStArr,
        dwEmplFullsStView}      from "./dwEmplFullsSt";


const sSTATE: string            = "emplFulls";


const STATES: kwtSubState[] =
[
    {sName: "employee",     sType: "base" },
    {sName: "company",      sType: "val", sParam: "company"},
    {sName: "province",     sType: "val", sParam: "province" },
    {sName: "jobFull",      sType: "val", sParam: "job"}
];

//@formatter:off



@Component({selector: 'dw-employee-fulls-ctrl-pub-sub', template: ``})
export class dwEmplFullsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwEmplFullsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-employee-fulls-ctrl-view', template: ``})
export class dwEmplFullsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwEmplFullsStView)
    {super(view, sSTATE)}
}
