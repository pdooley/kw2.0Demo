//@formatter:off
import {Component}          from '@angular/core';

import {kwAccStApi,
        kwAccStArr,
        kwAccStMdl,
        kwAccStMsg}         from "./kwAccSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";


const sPROP: string         = "acc";

//@formatter:off



@Component({selector: 'kw-acc-ctrl-api', template: ``})
export class kwAccCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwAccStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-acc-ctrl-load', template: ``})
export class kwAccCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwAccStMsg, data: kwAccStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-acc-ctrl-mdl', template: ``})
export class kwAccCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwAccStMdl)
    {super(mdl, sPROP)}
}
