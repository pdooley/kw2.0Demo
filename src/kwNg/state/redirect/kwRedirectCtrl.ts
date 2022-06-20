//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwRedirectStApi,
        kwRedirectStArr,
        kwRedirectStMdl,
        kwRedirectStMsg}    from "./kwRedirectSt";


const sPROP: string         = "redirect";

//@formatter:off



@Component({selector: 'kw-redirect-ctrl-api', template: ``})
export class kwRedirectCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwRedirectStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-redirect-ctrl-load', template: ``})
export class kwRedirectCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwRedirectStMsg, data: kwRedirectStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-redirect-ctrl-mdl', template: ``})
export class kwRedirectCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwRedirectStMdl)
    {super(mdl, sPROP)}
}
