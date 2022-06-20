//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kw/kw";
import {kwBsCtrlAjax}       from "@kwBsCtrl/kwBsCtrlAjax";
import {kwBsCtrlMsgStat}    from "@kwBsCtrl/kwBsCtrlMsgStat";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMap}     from "@kwBsCtrl/kwBsCtrlSubMap";
import {kwBsCurrsFctyMsg}   from "./kwBsCurrsUtil";
import {kwBsCurrsStApi,
        kwBsCurrsStArr,
        kwBsCurrsStMap,
        kwBsCurrsStMsg}     from "./kwBsCurrsSt";
import {kwCurrMap}          from "@kwClass/curr/kwCurrMap";
import {kwMap}              from "@kwClass/kwMap";
import {kwStatusBsEnum}     from "@kwClass/statusBs/kwStatusBsEnum";

const sPROP: string        = "currs";
const nSTAT: number         = kwStatusBsEnum.base;
//@formatter:off



@Component({selector: 'kw-bootstrap-currs-ctrl-api', template: ``})
export class kwBsCurrsCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsCurrsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-currs-ctrl-load', template: ``})
export class kwBsCurrsCtrlLoad extends kwBsCtrlAjax
{
    constructor(mag: kwBsCurrsStMsg, data: kwBsCurrsStArr)
    {super(mag, data, sPROP)}
}


@Component({selector: 'kw-bootstrap-currs-ctrl-map', template: ``})
export class kwBsCurrsCtrlMap extends kwBsCtrlSubMap
{
    constructor(data: kwBsCurrsStArr, map: kwBsCurrsStMap)
    {super(data, map)}

    protected createMap(data: object[]): kwMap
    {
        //console.log(this.sClass, "::createObj() called.");

        if (!kw.isValid(data))
        {
            console.error("kwBsCurrsCtrlMap::createObj() data is invalid.");
            return;
        }


        if (!kw.isArray(data))
        {
            console.error("kwBsCurrsCtrlMap::createMap() data is invalid.");
            return;
        }


        const map = new kwCurrMap(data);
        if (!map.init())
        {
            console.error("kwBsCurrsCtrlMap::createObj() error creating map.");
            return;
        }

        return map;
    }
}


@Component({selector: 'kw-bootstrap-currs-ctrl-msg', template: ``})
export class kwBsCurrsCtrlMsg extends kwBsCtrlMsgStat
{
    constructor(fcty: kwBsCurrsFctyMsg, msg: kwBsCurrsStMsg)
    {super(fcty, msg, nSTAT)}
}
