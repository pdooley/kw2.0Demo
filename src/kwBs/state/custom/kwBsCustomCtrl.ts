//@formatter:off
import {Component}              from '@angular/core';

import {kwBsCtrlSubApi}         from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCustomStApi,
        kwBsCustomStArr,
        kwBsCustomStMsg}        from "./kwBsCustomSt";
import {kwFbCtrlAjax}           from "@kwFbCtrl/kwFbCtrlAjax";


const sPROP: string = "custom";
//@formatter:off


@Component({selector: 'kw-bootstrap-custom-ctrl-api', template: ``})
export class kwBsCustomCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsCustomStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-custom-ctrl-load', template: ``})
export class kwBsCustomCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwBsCustomStMsg, data: kwBsCustomStArr)
    {super(msg, data, sPROP)}
}

