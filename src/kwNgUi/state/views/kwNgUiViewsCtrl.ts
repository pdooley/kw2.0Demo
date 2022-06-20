//@formatter:off
import {Component}          from '@angular/core';

import {kw}                 from "@kw/kw";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMap}     from "@kwBsCtrl/kwBsCtrlSubMap";
import {kwMap}              from "@kwClass/kwMap";
import {kwNgCtrlMsgStat}    from "@kwNgCtrl/kwNgCtrlMsgStat";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwNgUiViewsFctyMsg} from "./kwNgUiViewsUtil";
import {kwNgUiViewsStApi,
        kwNgUiViewsStArr,
        kwNgUiViewsStMap,
        kwNgUiViewsStMsg}   from "./kwNgUiViewsSt";
import {kwUiStatusEnum}     from "@kwUiClass/status/kwUiStatusEnum";
import {kwViewMap}          from "@kwUiClass/view/kwViewMap";


const nSTAT: number         = kwUiStatusEnum.state;
const sPROP: string         = "views";

//@formatter:off



@Component({selector: 'kw-ng-ui-views-ctrl-api', template: ``})
export class kwNgUiViewsCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwNgUiViewsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-ng-ui-views-ctrl-load', template: ``})
export class kwNgUiViewsCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwNgUiViewsStMsg, arr: kwNgUiViewsStArr)
    {super(msg, arr, sPROP)}
}


@Component({selector: 'kw-ng-ui-views-ctrl-map', template: ``})
export class kwNgUiViewsCtrlMap extends kwBsCtrlSubMap
{
    constructor(msg: kwNgUiViewsStArr, data: kwNgUiViewsStMap){super(msg, data)}

    protected createMap(data: object[]): kwMap
    {
        //console.log(this.sClass, "::createMap() called.");

        if (!kw.isValid(data))
        {
            console.error(this.sClass, "::createMap() data is invalid.");
            return;
        }

        const map = new kwViewMap(data);
        if (!map.init())
        {
            console.error(this.sClass, "::createMap() error creating map.");
            return;
        }

        return map;
    }
}


@Component({selector: 'kw-ng-ui-views-ctrl-msg', template: ``})
export class kwNgUiViewsCtrlMsg extends kwNgCtrlMsgStat
{
    constructor(fcty: kwNgUiViewsFctyMsg, msg: kwNgUiViewsStMsg)
    {super(fcty, msg, nSTAT)}
}
