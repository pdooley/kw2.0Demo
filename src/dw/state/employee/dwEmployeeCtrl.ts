//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwEmployeeFctyMsg}   from "./dwEmployeeUtil";
import {dwEmployeeStApi,
        dwEmployeeStArr,
        dwEmployeeStInit,
        dwEmployeeStMap,
        dwEmployeeStMdl,
        dwEmployeeStMsg}    from "./dwEmployeeSt";
import {dwEmployeesStArr}   from "../employees/dwEmployeesSt";


const sSTATE: string        = "employee";
//@formatter:off



@Component({selector: 'dw-employee-ctrl-api', template: ``})
export class dwEmployeeCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwEmployeeStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-employee-ctrl-init', template: ``})
export class dwEmployeeCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwEmployeeStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-employee-ctrl-load', template: ``})
export class dwEmployeeCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwEmployeeStMsg, data: dwEmployeeStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-employee-ctrl-map', template: ``})
export class dwEmployeeCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwEmployeesStArr, map: dwEmployeeStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-employee-ctrl-mdl', template: ``})
export class dwEmployeeCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwEmployeeStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-employee-ctrl-pub-sub', template: ``})
export class dwEmployeeCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwEmployeeFctyMsg, msg: dwEmployeeStMsg)
    {super(fcty, msg, sSTATE)}
}
