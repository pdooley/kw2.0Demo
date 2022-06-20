//@formatter:off
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwBsCtrlSubMdl}     from "@kwBsCtrl/kwBsCtrlSubMdl";
import {kwBsCurrStApi,
        kwBsCurrStMdl}      from "./kwBsCurrSt";


const sPROP: string = "curr";
//@formatter:off



@Component({selector: 'kw-bootstrap-curr-ctrl-api', template: ``})
export class kwBsCurrCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwBsCurrStApi)
    {super(api, sPROP)}

}


@Component({selector: 'kw-bootstrap-curr-ctrl-mdl', template: ``})
export class kwBsCurrCtrlMdl extends kwBsCtrlSubMdl
{
    constructor(mdl: kwBsCurrStMdl)
    {super(mdl, sPROP)}
}

