//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwPayrollsStArr,
        dwPayrollsStInit,
        dwPayrollsStView}       from "./dwPayrollsSt";


const sSTATE:       string      = "payrolls";


const STATES: kwtSubState[] =
[
    {sName: "job",          sType: "base" },
    {sName: "company",      sType: "val", sParam: "company"},
    {sName: "province",     sType: "val", sParam: "province" },
    {sName: "jobFull",      sType: "val", sParam: "job"}
];

//@formatter:off



@Component({selector: 'dw-payrolls-ctrl-init', template: ``})
export class dwPayrollsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwPayrollsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-payrolls-ctrl-pub-sub', template: ``})
export class dwPayrollsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwPayrollsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-payrolls-ctrl-view', template: ``})
export class dwPayrollsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwPayrollsStView)
    {super(view, sSTATE)}
}
