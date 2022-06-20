//@formatter:off
import {Component}          from '@angular/core';

import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";
import {kwSignoutStApi,
        kwSignoutStArr,
        kwSignoutStMdl,
        kwSignoutStMsg}     from "./kwSignoutSt";


const sPROP: string         = "signout";

//@formatter:off



@Component({selector: 'kw-signout-ctrl-api', template: ``})
export class kwSignoutCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwSignoutStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-signout-ctrl-load', template: ``})
export class kwSignoutCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwSignoutStMsg, data: kwSignoutStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-signout-ctrl-mdl', template: ``})
export class kwSignoutCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwSignoutStMdl)
    {super(mdl, sPROP)}
}
