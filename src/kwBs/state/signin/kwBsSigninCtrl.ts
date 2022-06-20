//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsSigninStApi,
        kwBsSigninStArr,
        kwBsSigninStMdl,
        kwBsSigninStMsg}    from "./kwBsSigninSt";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwStatusBsEnum}     from "@kwClass/statusBs/kwStatusBsEnum";


const nSTAT: number         = kwStatusBsEnum.trace;
const sPROP: string         = "signin";
//@formatter:off



@Component({selector: 'kw-bootstrap-signin-ctrl-api', template: ``})
export class kwBsSigninCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsSigninStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-signin-ctrl-load', template: ``})
export class kwBsSigninCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwBsSigninStMsg, data: kwBsSigninStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-bootstrap-signin-ctrl-mdl', template: ``})
export class kwBsSigninCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsSigninStMdl)
    {super(mdl, sPROP)}
}



