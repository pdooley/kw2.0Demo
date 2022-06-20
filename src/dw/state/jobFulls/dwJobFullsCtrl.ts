//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwJobFullsStArr,
        dwJobFullsStView}       from "./dwJobFullsSt";


const sSTATE:       string      = "jobFulls";

const STATES: kwtSubState[] =
[
    {sName: "job",          sType: "base" },
    {sName: "company",      sType: "val", sParam: "company"  },
    {sName: "schedule",     sType: "val", sParam: "schedule" },
];

//@formatter:off


@Component({selector: 'dw-job-fulls-ctrl-pub-sub', template: ``})
export class dwJobFullsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwJobFullsStArr)
    {super(arr, sSTATE, STATES)}
}

@Component({selector: 'dw-job-fulls-ctrl-view', template: ``})
export class dwJobFullsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwJobFullsStView)
    {super(view, sSTATE)}
}
