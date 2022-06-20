/**********************************************************************
 *
 * kwBs/state/mdls/kwBsMdlsCtrl.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component }             from "@angular/core";

import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwBsMdlsStObj}          from "@kwBsState/mdls/kwBsMdlsSt";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";

const sPROP: string             = "mdls";
const nSTAT: number             = kwStatusBsEnum.mdls;

//@formatter:on


@Component({selector: 'kw-bootstrap-mdls-ctrl-obj', template: ``})
export class kwBsMdlsCtrlObj extends kwBsCtrlPropStatObj
{
    constructor(obj: kwBsMdlsStObj)
    {super(obj, sPROP, nSTAT)}
}
