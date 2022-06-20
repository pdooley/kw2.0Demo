//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwBillingsStArr,
        dwBillingsStInit,
        dwBillingsStView}       from "./dwBillingsSt";


const sSTATE:       string      = "billings";


const STATES: kwtSubState[] =
[
    {sName: "job",          sType: "base" },
    {sName: "company",      sType: "val", sParam: "company"},
    {sName: "province",     sType: "val", sParam: "province" },
    {sName: "jobFull",      sType: "val", sParam: "job"}
];


//@formatter:off


@Component({selector: 'dw-billings-ctrl-init', template: ``})
export class dwBillingsCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init:  dwBillingsStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-billings-ctrl-pub-sub', template: ``})
export class dwBillingsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwBillingsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-billings-ctrl-view', template: ``})
export class dwBillingsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwBillingsStView)
    {super(view, sSTATE)}
}
