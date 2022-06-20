//@formatter:off
import {Component}              from '@angular/core';

import {kwFbCtrlAjax}           from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}         from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";
import {kwNgCtrlPubSub}         from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubMdl}         from "@kwNgCtrl/kwNgCtrlSubMdl";

import {dwCompanyFctyMsg}       from "./dwCompanyUtil";
import {dwCompanyStApi,
        dwCompanyStArr,
        dwCompanyStInit,
        dwCompanyStMap,
        dwCompanyStMdl,
        dwCompanyStMsg}         from "./dwCompanySt";
import {dwCompanysStArr}        from "../companys/dwCompanysSt";


const sSTATE: string        = "company";
//@formatter:off



@Component({selector: 'dw-company-ctrl-api', template: ``})
export class dwCompanyCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwCompanyStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-company-ctrl-init', template: ``})
export class dwCompanyCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwCompanyStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-company-ctrl-load', template: ``})
export class dwCompanyCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwCompanyStMsg, data: dwCompanyStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-company-ctrl-map', template: ``})
export class dwCompanyCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwCompanysStArr, map: dwCompanyStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-company-ctrl-mdl', template: ``})
export class dwCompanyCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwCompanyStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-company-ctrl-pub-sub', template: ``})
export class dwCompanyCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwCompanyFctyMsg, msg: dwCompanyStMsg)
    {super(fcty, msg, sSTATE)}
}
