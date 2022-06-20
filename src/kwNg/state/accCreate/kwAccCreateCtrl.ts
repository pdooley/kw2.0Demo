//@formatter:off
import {Component}          from '@angular/core';

import {kwAccCreateStApi,
        kwAccCreateStArr,
        kwAccCreateStMdl,
        kwAccCreateStMsg}   from "./kwAccCreateSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";


const sPROP: string         = "accCreate";

//@formatter:off



@Component({selector: 'kw-acc-create-ctrl-api', template: ``})
export class kwAccCreateCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwAccCreateStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-acc-create-ctrl-load', template: ``})
export class kwAccCreateCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwAccCreateStMsg, data: kwAccCreateStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-acc-create-ctrl-mdl', template: ``})
export class kwAccCreateCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwAccCreateStMdl)
    {super(mdl, sPROP)}
}
