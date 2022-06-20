//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwHourInpStView}        from "./dwHourInpSt";


const sSTATE:       string      = "hourInp";



//@formatter:off



@Component({selector: 'dw-hourly-input-ctrl-view', template: ``})
export class dwHourInpCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwHourInpStView)
    {super(view, sSTATE)}
}
