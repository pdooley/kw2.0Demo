//@formatter:off
import {Component}          from '@angular/core';

import {kwApisFctyMsg}      from "@kwNgState/apis/kwApisUtil";
import {kwApisStApi,
        kwApisStArr,
        kwApisStMsg,
        kwApisStObj}        from "./kwApisSt";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwNgCtrlMsgStat}    from "@kwNgCtrl/kwNgCtrlMsgStat";
import {kwNgCtrlSubObjApis} from "@kwNgCtrl/kwNgCtrlSubObjApis";
import {kwStatusAppEnum}    from "@kwClass/statusApp/kwStatusAppEnum";


const nSTAT: number         = kwStatusAppEnum.bootstrap;
const sPROP: string         = "apis";

//@formatter:off



@Component({selector: 'kw-apis-ctrl-api', template: ``})
export class kwApisCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwApisStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-apis-ctrl-load', template: ``})
export class kwApisCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwApisStMsg, data: kwApisStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-apis-ctrl-msg', template: ``})
export class kwApisCtrlMsg extends kwNgCtrlMsgStat
{
    constructor(fcty: kwApisFctyMsg, msg: kwApisStMsg)
    {super(fcty, msg, nSTAT)}
}


@Component({selector: 'kw-apis-ctrl-obj', template: ``})
export class kwApisCtrlObj extends kwNgCtrlSubObjApis
{
    constructor(arr: kwApisStArr, obj: kwApisStObj)
    {super(arr, obj)}
}
