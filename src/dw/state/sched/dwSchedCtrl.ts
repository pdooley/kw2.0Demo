//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwSchedStInit,
        dwSchedStView}          from "./dwSchedSt";


const sSTATE: string            = "sched";


//@formatter:off



@Component({selector: 'dw-sched-ctrl-init', template: ``})
export class dwSchedCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwSchedStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-sched-ctrl-view', template: ``})
export class dwSchedCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwSchedStView)
    {super(view, sSTATE)}
}
