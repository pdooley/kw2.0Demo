//@formatter:off
import {Component}              from '@angular/core';

import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwEmplProStInit,
        dwEmplProStView}        from "./dwEmplProSt";


const sSTATE: string            = "emplPro";

//@formatter:off




@Component({selector: 'dw-employee-profiles-ctrl-init', template: ``})
export class dwEmplProCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwEmplProStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-employee-profiles-ctrl-view', template: ``})
export class dwEmplProCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwEmplProStView)
    {super(view, sSTATE)}
}
