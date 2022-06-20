//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwShiftTypeFctyMsg} from "./dwShiftTypeUtil";
import {dwShiftTypeStApi,
        dwShiftTypeStArr,
        dwShiftTypeStInit,
        dwShiftTypeStMap,
        dwShiftTypeStMdl,
        dwShiftTypeStMsg}   from "./dwShiftTypeSt";
import {dwShiftTypesStArr}    from "../shiftTypes/dwShiftTypesSt";


const sSTATE: string        = "shiftType";

//@formatter:off



@Component({selector: 'dw-shift-type-ctrl-api', template: ``})
export class dwShiftTypeCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwShiftTypeStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-shift-type-ctrl-init', template: ``})
export class dwShiftTypeCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwShiftTypeStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-shift-type-ctrl-load', template: ``})
export class dwShiftTypeCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwShiftTypeStMsg, data: dwShiftTypeStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-shift-type-ctrl-map', template: ``})
export class dwShiftTypeCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwShiftTypesStArr, map: dwShiftTypeStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-shift-type-ctrl-mdl', template: ``})
export class dwShiftTypeCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwShiftTypeStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-shift-type-ctrl-pub-sub', template: ``})
export class dwShiftTypeCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwShiftTypeFctyMsg, msg: dwShiftTypeStMsg)
    {super(fcty, msg, sSTATE)}
}

