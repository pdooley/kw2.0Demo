//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlPubSubJoin}   from "@kwNgUiCtrl/kwNgUiCtrlPubSubJoin";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";
import {kwtQuery}               from "@kwClass/query/kwtQuery";

import {dwEmplTimesStArr,
        dwEmplTimesStInit,
        dwEmplTimesStView}      from "./dwEmplTimesSt";


const sSTATE:       string      = "emplTimes";

const sJOIN:        string      = "timeSheets";
const sMAIN:        string      = "emplFulls";

const sPARAM:       string      = "employee";

const sPARAM_MAIN:  string      = "company";
const sPARAM_JOIN:  string      = "start";


const JOIN: kwtQuery = {
    sState: sJOIN,
    where: {
        sParam: sPARAM_JOIN,
        sOp: "=="
    }
};


const MAIN: kwtQuery = {
    sState: sMAIN,
    where: {
        sParam: sPARAM_MAIN,
        sOp: "=="
    }
};


//@formatter:off



@Component({selector: 'dw-employee-times-ctrl-init', template: ``})
export class dwEmplTimesCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwEmplTimesStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-employee-times-ctrl-pub-sub', template: ``})
export class dwEmplTimesCtrlPubSub extends kwNgUiCtrlPubSubJoin
{
    constructor(arr: dwEmplTimesStArr)
    {super(arr, sSTATE, sPARAM, MAIN, JOIN)}
}


@Component({selector: 'dw-employee-times-ctrl-view', template: ``})
export class dwEmplTimesCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwEmplTimesStView)
    {super(view, sSTATE)}
}
