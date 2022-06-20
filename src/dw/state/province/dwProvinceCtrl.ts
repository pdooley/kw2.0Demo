//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlPubSub}     from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgUiCtrlSubInit}  from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}   from "@kwNgUiCtrl/kwNgUiCtrlSubMap";

import {dwProvinceFctyMsg}  from "./dwProvinceUtil";
import {dwProvinceStApi,
        dwProvinceStArr,
        dwProvinceStInit,
        dwProvinceStMap,
        dwProvinceStMdl,
        dwProvinceStMsg}    from "./dwProvinceSt";
import {dwProvincesStArr}    from "../provinces/dwProvincesSt";


const sSTATE: string        = "province";

//@formatter:off



@Component({selector: 'dw-province-ctrl-api', template: ``})
export class dwProvinceCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwProvinceStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-province-ctrl-init', template: ``})
export class dwProvinceCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwProvinceStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-province-ctrl-load', template: ``})
export class dwProvinceCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwProvinceStMsg, data: dwProvinceStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-province-ctrl-map', template: ``})
export class dwProvinceCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwProvincesStArr, map: dwProvinceStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-province-ctrl-mdl', template: ``})
export class dwProvinceCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(view: dwProvinceStMdl)
    {super(view, sSTATE)}
}


@Component({selector: 'dw-province-ctrl-pub-sub', template: ``})
export class dwProvinceCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwProvinceFctyMsg, msg: dwProvinceStMsg)
    {super(fcty, msg, sSTATE)}
}
