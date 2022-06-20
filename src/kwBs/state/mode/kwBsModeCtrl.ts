/**********************************************************************
 *
 * kwBs/state/mode/kwBsModeCtrl.ts
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
import {Component}              from "@angular/core";

import {kwBsCtrlPropStat}       from "@kwBsCtrl/kwBsCtrlPropStat";
import {kwBsModeStVal}          from "./kwBsModeSt";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";

const sSTATE: string              = "mode";
const nSTAT: number             = kwStatusBsEnum.trace;

//@formatter:on


@Component({selector: 'kw-bootstrap-mode-ctrl-val', template: ``})
export class kwBsModeCtrlVal extends kwBsCtrlPropStat
{
    constructor(val: kwBsModeStVal)
    {super(val, sSTATE, nSTAT)}
}
