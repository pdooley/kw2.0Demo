//@formatter:off
import {Component}          from '@angular/core';

import {kwActTagsStApi,
        kwActTagsStArr,
        kwActTagsStMsg}     from "./kwActTagsSt";
import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";


const sPROP: string         = "actTag";

//@formatter:off



@Component({selector: 'kw-act-tags-ctrl-api', template: ``})
export class kwActTagsCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwActTagsStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-act-tags-ctrl-load', template: ``})
export class kwActTagsCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwActTagsStMsg, data: kwActTagsStArr)
    {super(msg, data, sPROP)}
}

