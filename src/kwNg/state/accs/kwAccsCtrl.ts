//@formatter:off
import {Component}          from '@angular/core';

import {kwAccsStApi,
        kwAccsStArr,
        kwAccsStMsg}        from "./kwAccsSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";


const sPROP: string         = "accs";

//@formatter:off



@Component({selector: 'kw-accs-ctrl-api', template: ``})
export class kwAccsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwAccsStApi){super(api, sPROP)}
}


@Component({selector: 'kw-accs-ctrl-load', template: ``})
export class kwAccsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwAccsStMsg, data: kwAccsStArr)
    {super(msg, data, sPROP)}
}

