//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwOrgStApi,
        kwOrgStArr,
        kwOrgStMdl,
        kwOrgStMsg}         from "./kwOrgSt";


const sPROP: string         = "org";

//@formatter:off



@Component({selector: 'kw-org-ctrl-api', template: ``})
export class kwOrgCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwOrgStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-org-ctrl-load', template: ``})
export class kwOrgCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwOrgStMsg, data: kwOrgStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-org-ctrl-mdl', template: ``})
export class kwOrgCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwOrgStMdl)
    {super(mdl, sPROP)}
}
