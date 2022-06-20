//@formatter:off
import {Component}          from '@angular/core';

import {kwBsApiStApi,
        kwBsApiStArr,
        kwBsApiStMsg}       from "./kwBsApiSt";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";



const sPROP: string         = "api";
//@formatter:off



@Component({selector: 'kw-bootstrap-api-ctrl-api', template: ``})
export class kwBsApiCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsApiStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-api-ctrl-load', template: ``})
export class kwBsApiCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwBsApiStMsg, arr: kwBsApiStArr)
    {super(msg, arr, sPROP)}
}
