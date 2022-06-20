//@formatter:off
import {Component}          from '@angular/core';

import {kwFbCtrlAjax}       from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}     from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgCtrlSubMdl}     from "@kwNgCtrl/kwNgCtrlSubMdl";
import {kwSignupStApi,
        kwSignupStArr,
        kwSignupStMdl,
        kwSignupStMsg}      from "./kwSignupSt";


const sPROP: string         = "signup";

//@formatter:off



@Component({selector: 'kw-signup-ctrl-api', template: ``})
export class kwSignupCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: kwSignupStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-signup-ctrl-load', template: ``})
export class kwSignupCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwSignupStMsg, data: kwSignupStArr)
    {super(msg, data, sPROP)}
}


@Component({selector: 'kw-signup-ctrl-mdl', template: ``})
export class kwSignupCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: kwSignupStMdl)
    {super(mdl, sPROP)}
}


