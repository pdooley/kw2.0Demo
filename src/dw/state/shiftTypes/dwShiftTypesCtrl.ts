//@formatter:off
import {Component}              from '@angular/core';

import {kwFbCtrlAjax}           from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}         from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlPubSubAll}      from "@kwNgCtrl/kwNgCtrlPubSubAll";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubView}      from "@kwNgUiCtrl/kwNgUiCtrlSubView";

import {dwShiftTypesFctyMsg}    from "./dwShiftTypesUtil";
import {dwShiftTypesStApi,
        dwShiftTypesStArr,
        dwShiftTypesStInit,
        dwShiftTypesStMsg,
        dwShiftTypesStView}     from "./dwShiftTypesSt";


const sSTATE: string            = "shiftTypes";

//@formatter:off



@Component({selector: 'dw-shift-types-ctrl-api', template: ``})
export class dwShiftTypesCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwShiftTypesStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-shift-types-ctrl-init', template: ``})
export class dwShiftTypesCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwShiftTypesStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-shift-types-ctrl-load', template: ``})
export class dwShiftTypesCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwShiftTypesStMsg, data: dwShiftTypesStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-shift-types-ctrl-pub-sub', template: ``})
export class dwShiftTypesCtrlPubSub extends kwNgCtrlPubSubAll
{
    constructor(fcty: dwShiftTypesFctyMsg, msg: dwShiftTypesStMsg)
    {super(fcty, msg, sSTATE)}
}


@Component({selector: 'dw-shift-types-ctrl-view', template: ``})
export class dwShiftTypesCtrlView extends kwNgUiCtrlSubView
{
    constructor(view: dwShiftTypesStView)
    {super(view, sSTATE);}
}
