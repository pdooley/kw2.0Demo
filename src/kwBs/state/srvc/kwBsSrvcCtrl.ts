//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsSrvcStApi,
        kwBsSrvcStArr,
        kwBsSrvcStMdl,
        kwBsSrvcStMsg}      from "./kwBsSrvcSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";


const sPROP: string         = "srvc";

//@formatter:off



@Component({selector: 'kw-bootstrap-srvc-ctrl-api', template: ``})
export class kwBsSrvcCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsSrvcStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-bootstrap-srvc-ctrl-load', template: ``})
export class kwBsSrvcCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwBsSrvcStMsg, data: kwBsSrvcStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-bootstrap-srvc-ctrl-mdl', template: ``})
export class kwBsSrvcCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsSrvcStMdl)
    {super(mdl, sPROP)}
}
