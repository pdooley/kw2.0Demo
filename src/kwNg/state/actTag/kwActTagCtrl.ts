//@formatter:off
import {Component}          from '@angular/core';

import {kwActTagStApi,
        kwActTagStArr,
        kwActTagStMdl,
        kwActTagStMsg}      from "./kwActTagSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";


const sPROP: string         = "actTag";

//@formatter:off



@Component({selector: 'kw-act-tag-ctrl-api', template: ``})
export class kwActTagCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwActTagStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-act-tag-ctrl-load', template: ``})
export class kwActTagCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwActTagStMsg, data: kwActTagStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-act-tag-ctrl-mdl', template: ``})
export class kwActTagCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwActTagStMdl)
    {super(mdl, sPROP)}
}
