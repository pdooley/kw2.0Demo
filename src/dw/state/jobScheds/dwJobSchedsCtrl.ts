//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwJobSchedsStArr,
        dwJobSchedsStView}      from "./dwJobSchedsSt";


const sSTATE: string            = "jobScheds";


const STATES: kwtSubState[] = [
    {sName: "job",       sType: "base"},
    {sName: "company",   sType: "val", sParam: "company"},
    {sName: "schedFull", sType: "val", sParam: "schedule"},
];

//@formatter:off



@Component({selector: 'dw-job-scheds-ctrl-pub-sub', template: ``})
export class dwJobSchedsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwJobSchedsStArr)
    {super(arr, sSTATE, STATES)}
}

@Component({selector: 'dw-job-scheds-ctrl-view', template: ``})
export class dwJobSchedsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwJobSchedsStView)
    {super(view, sSTATE)}
}
