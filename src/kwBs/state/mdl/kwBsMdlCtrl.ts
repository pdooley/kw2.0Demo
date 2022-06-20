//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsMdlStApi,
        kwBsMdlStArr,
        kwBsMdlStMsg}       from "./kwBsMdlSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";

const sPROP: string         = "mdl";

//@formatter:off


@Component({selector: 'kw-bootstrap-mdl-ctrl-api', template: ``})
export class kwBsMdlCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsMdlStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-mdl-ctrl-load', template: ``})
export class kwBsMdlCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwBsMdlStMsg, data: kwBsMdlStArr)
    {super(msg, data, sPROP)}
}


