//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwMgmtPayrollsStArr,
        dwMgmtPayrollsStInit,
        dwMgmtPayrollsStView}   from "./dwMgmtPayrollsSt";


const sSTATE:       string      = "mgmtPayrolls";



const STATES: kwtSubState[] =
[
    {sName: "job",          sType: "base" },
    {sName: "company",      sType: "val", sParam: "company"},
    {sName: "province",     sType: "val", sParam: "province" },
    {sName: "jobFull",      sType: "val", sParam: "job"}
];

//@formatter:off


@Component({selector: 'dw-mgmt-payrolls-ctrl-init', template: ``})
export class dwMgmtPayrollsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwMgmtPayrollsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-mgmt-payrolls-ctrl-pub-sub', template: ``})
export class dwMgmtPayrollsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwMgmtPayrollsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-mgmt-payrolls-ctrl-view', template: ``})
export class dwMgmtPayrollsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwMgmtPayrollsStView)
    {super(view, sSTATE)}
}
