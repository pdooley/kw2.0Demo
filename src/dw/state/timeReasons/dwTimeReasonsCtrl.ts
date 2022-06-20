//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubC}      from "@kwNgUiCtrl/kwNgUiCtrlPubSubC";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtSubState}            from "@kwUi/class/subState/kwtSubState";

import {dwTimeReasonsStArr,
        dwTimeReasonsStView}    from "./dwTimeReasonsSt";


const sSTATE: string            = "timeReasons";

const STATES: kwtSubState[] =
[
    {sName: "timeSheet",    sType: "base" },
    {sName: "reason",       sType: "arr" },
    {sName: "reason",       sType: "map" }
];
//@formatter:off



@Component({selector: 'dw-time-reasons-ctrl-pub-sub', template: ``})
export class dwTimeReasonsCtrlPubSub extends kwNgUiCtrlPubSubC
{
    constructor(arr: dwTimeReasonsStArr)
    {super(arr, sSTATE, STATES)}
}


@Component({selector: 'dw-time-reasons-ctrl-view', template: ``})
export class dwTimeReasonsCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwTimeReasonsStView)
    {super(view, sSTATE)}
}
