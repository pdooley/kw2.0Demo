//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwTimeSheetFctyMsg} from "./dwTimeSheetUtil";
import {dwTimeSheetStApi,
        dwTimeSheetStArr,
        dwTimeSheetStInit,
        dwTimeSheetStMap,
        dwTimeSheetStMdl,
        dwTimeSheetStMsg}   from "./dwTimeSheetSt";
import {dwTimeSheetsStArr}  from "../timeSheets/dwTimeSheetsSt";


const sSTATE: string        = "timeSheet";

//@formatter:off



@Component({selector: 'dw-time-sheet-ctrl-api', template: ``})
export class dwTimeSheetCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwTimeSheetStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-time-sheet-ctrl-init', template: ``})
export class dwTimeSheetCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwTimeSheetStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-time-sheet-ctrl-load', template: ``})
export class dwTimeSheetCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwTimeSheetStMsg, data: dwTimeSheetStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-time-sheet-ctrl-map', template: ``})
export class dwTimeSheetCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwTimeSheetsStArr, map: dwTimeSheetStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-time-sheet-ctrl-mdl', template: ``})
export class dwTimeSheetCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwTimeSheetStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-time-sheet-ctrl-pub-sub', template: ``})
export class dwTimeSheetCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwTimeSheetFctyMsg, msg: dwTimeSheetStMsg)
    {super(fcty, msg, sSTATE)}
}
