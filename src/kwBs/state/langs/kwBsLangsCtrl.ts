//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kw/kw";
import {kwBsCtrlAjax}       from "@kwBsCtrl/kwBsCtrlAjax";
import {kwBsCtrlMsgStat}    from "@kwBsCtrl/kwBsCtrlMsgStat";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMap}     from "@kwBsCtrl/kwBsCtrlSubMap";
import {kwBsLangsFctyMsg}   from "@kwBsState/langs/kwBsLangsUtil";
import {kwBsLangsStApi,
        kwBsLangsStArr,
        kwBsLangsStMap,
        kwBsLangsStMsg}     from "./kwBsLangsSt";
import {kwLangMap}          from "@kwClass/lang/kwLangMap";
import {kwMap}              from "@kwClass/kwMap";
import {kwStatusBsEnum}     from "@kwClass/statusBs/kwStatusBsEnum";


const sPROP: string         = "langs";
const nSTAT: number         = kwStatusBsEnum.base;
//@formatter:off



@Component({selector: 'kw-bootstrap-langs-ctrl-api', template: ``})
export class kwBsLangsCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsLangsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-langs-ctrl-load', template: ``})
export class kwBsLangsCtrlLoad extends kwBsCtrlAjax
{
    constructor(mag: kwBsLangsStMsg, data: kwBsLangsStArr)
    {super(mag, data, sPROP)}
}


@Component({selector: 'kw-bootstrap-langs-ctrl-map', template: ``})
export class kwBsLangsCtrlMap extends kwBsCtrlSubMap
{
    constructor(data: kwBsLangsStArr, map: kwBsLangsStMap)
    {super(data, map)}

    protected createMap(data: object[]): kwMap
    {
        //console.log("kwBsLangsCtrlMap::createObj() called.");

        if (!kw.isValid(data))
        {
            console.error("kwBsLangsCtrlMap::createObj() data is invalid.");
            return;
        }


        if (!kw.isArray(data))
        {
            console.error("kwBsLangsCtrlMap::createMap() data is invalid.");
            return;
        }


        const map = new kwLangMap(data);
        if (!map.init())
        {
            console.error("kwBsLangsCtrlMap::createObj() error creating map.");
            return;
        }

        return map;
    }
}


@Component({selector: 'kw-bootstrap-langs-ctrl-msg', template: ``})
export class kwBsLangsCtrlMsg extends kwBsCtrlMsgStat
{
    constructor(fcty: kwBsLangsFctyMsg, msg: kwBsLangsStMsg)
    {super(fcty, msg, nSTAT)}
}
