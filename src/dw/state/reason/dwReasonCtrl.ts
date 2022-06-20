//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwReasonFctyMsg}  from "./dwReasonUtil";
import {dwReasonStApi,
        dwReasonStArr,
        dwReasonStInit,
        dwReasonStMap,
        dwReasonStMdl,
        dwReasonStMsg}    from "./dwReasonSt";
import {dwReasonsStArr}    from "../reasons/dwReasonsSt";


const sSTATE: string        = "reason";

//@formatter:off



@Component({selector: 'dw-reason-ctrl-api', template: ``})
export class dwReasonCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwReasonStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-reason-ctrl-init', template: ``})
export class dwReasonCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwReasonStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-reason-ctrl-load', template: ``})
export class dwReasonCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwReasonStMsg, data: dwReasonStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-reason-ctrl-map', template: ``})
export class dwReasonCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwReasonsStArr, map: dwReasonStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-reason-ctrl-mdl', template: ``})
export class dwReasonCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(view: dwReasonStMdl)
    {super(view, sSTATE)}
}


@Component({selector: 'dw-reason-ctrl-pub-sub', template: ``})
export class dwReasonCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwReasonFctyMsg, msg: dwReasonStMsg)
    {super(fcty, msg, sSTATE)}
}
