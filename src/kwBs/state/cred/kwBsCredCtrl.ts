/**********************************************************************
 *
 * kwBs/state/cred/kwBsCredCtrlObj.ts
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

import {kwBsCredStObj}          from "./kwBsCredSt";
import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";

const nSTAT: number             = kwStatusBsEnum.mdls;
const sSTATE: string            = "cred";

//@formatter:on


@Component({selector: 'kw-bootstrap-cred-ctrl-obj', template: ``})
export class kwBsCredCtrlObj extends kwBsCtrlPropStatObj
{
    constructor(obj: kwBsCredStObj)
    {super(obj, sSTATE, nSTAT)}
}
