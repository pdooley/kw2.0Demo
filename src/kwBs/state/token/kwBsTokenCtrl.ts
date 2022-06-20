//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsTokenStApi,
        kwBsTokenStArr,
        kwBsTokenStMdl,
        kwBsTokenStMsg}     from "./kwBsTokenSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";

const sPROP: string         = "token";
//@formatter:off


@Component({selector: 'kw-bootstrap-token-ctrl-api', template: ``})
export class kwBsTokenCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsTokenStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-token-ctrl-load', template: ``})
export class kwBsTokenCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwBsTokenStMsg, arr: kwBsTokenStArr)
    {super(msg, arr, sPROP)}
}


@Component({selector: 'kw-bootstrap-token-ctrl-mdl', template: ``})
export class kwBsTokenCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsTokenStMdl)
    {super(mdl, sPROP)}
}
