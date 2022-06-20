//@formatter:off
import {Component}              from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwBsCtrlMsgStat}        from "@kwBsCtrl/kwBsCtrlMsgStat";
import {kwBsCtrlSubApi}         from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMap}         from "@kwBsCtrl/kwBsCtrlSubMap";
import {kwBsTimeZonesFctyMsg}   from "./kwBsTimeZonesUtil";
import {kwBsTimeZonesStApi,
        kwBsTimeZonesStArr,
        kwBsTimeZonesStMap,
        kwBsTimeZonesStMsg}     from "./kwBsTimeZonesSt";
import {kwMap}                  from "@kw/class/kwMap";
import {kwNgCtrlAjax}           from "@kwNgCtrl/kwNgCtrlAjax";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";
import {kwTimeZoneMap}          from "@kwClass/timeZone/kwTimeZoneMap";


const sPROP: string         = "timeZones";
const nSTAT: number         = kwStatusBsEnum.base;
//@formatter:off



@Component({selector: 'kw-bootstrap-time-zones-ctrl-api', template: ``})
export class kwBsTimeZonesCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsTimeZonesStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-time-zones-ctrl-load', template: ``})
export class kwBsTimeZonesCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwBsTimeZonesStMsg, data: kwBsTimeZonesStArr)
    {super(msg, data, sPROP)}
}



@Component({selector: 'kw-bootstrap-time-zones-ctrl-map', template: ``})
export class kwBsTimeZonesCtrlMap extends kwBsCtrlSubMap
{
    constructor(data: kwBsTimeZonesStArr, map: kwBsTimeZonesStMap)
    {super(data, map)}

    protected createMap(data: object[]): kwMap
    {
        //console.log(this.sClass, "::createMap() called.");

        if (!kw.isValid(data))
        {
            console.error("kwBsTzsCtrlMap::createMap() data is invalid.");
            return;
        }

        if (!kw.isArray(data))
        {
            console.error("kwBsTzsCtrlMap::createMap() data is invalid.");
            return;
        }

        const map = new kwTimeZoneMap(data);
        if (!map.init())
        {
            console.error("kwBsTzsCtrlMap::createMap() error creating map.");
            return;
        }

        return map;
    }
}




@Component({selector: 'kw-bootstrap-time-zones-ctrl-msg', template: ``})
export class kwBsTimeZonesCtrlMsg extends kwBsCtrlMsgStat
{
    constructor(fcty: kwBsTimeZonesFctyMsg, msg: kwBsTimeZonesStMsg)
    {super(fcty, msg, nSTAT)}
}
