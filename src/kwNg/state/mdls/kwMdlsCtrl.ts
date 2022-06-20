//@formatter:off
import {Component}          from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwMdlsFctyMsg}      from "@kwNgState/mdls/kwMdlsUtil";
import {kwMdlsStApi,
        kwMdlsStArr,
        kwMdlsStMsg,
        kwMdlsStObj}        from "./kwMdlsSt";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwNgCtrlMsgStat}    from "@kwNgCtrl/kwNgCtrlMsgStat";
import {kwNgCtrlSubObjMdls} from "@kwNgCtrl/kwNgCtrlSubObjMdls";
import {kwStatusAppEnum}    from "@kwClass/statusApp/kwStatusAppEnum";


const nSTAT: number         = kwStatusAppEnum.bootstrap;
const sPROP: string         = "mdls";

//@formatter:off



@Component({selector: 'kw-mdls-ctrl-api', template: ``})
export class kwMdlsCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwMdlsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-mdls-ctrl-load', template: ``})
export class kwMdlsCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwMdlsStMsg, data: kwMdlsStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-mdls-ctrl-msg', template: ``})
export class kwMdlsCtrlMsg extends kwNgCtrlMsgStat
{
    constructor(fcty: kwMdlsFctyMsg, msg: kwMdlsStMsg)
    {super(fcty, msg, nSTAT)}
}


@Component({selector: 'kw-mdls-ctrl-obj', template: ``})
export class kwMdlsCtrlObj extends kwNgCtrlSubObjMdls
{
    constructor(arr: kwMdlsStArr, val: kwMdlsStObj)
    {super(arr, val)}
}
