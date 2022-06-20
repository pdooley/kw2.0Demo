//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsLangStApi,
        kwBsLangStMdl}      from "./kwBsLangSt";

const sPROP: string         = "lang";

//@formatter:off


@Component({selector: 'kw-bootstrap-lang-ctrl-api', template: ``})
export class kwBsLangCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsLangStApi)
    {super(api, sPROP)}
}




@Component({selector: 'kw-bootstrap-lang-ctrl-mdl', template: ``})
export class kwBsLangCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsLangStMdl)
    {super(mdl, sPROP)}
}

