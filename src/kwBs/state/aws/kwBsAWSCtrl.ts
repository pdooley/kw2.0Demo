/**********************************************************************
 *
 * kwBs/state/aws/kwBsAWSCtrl.ts
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
import {Component }                 from "@angular/core";

import {kwBsAWSStVal }              from "./kwBsAWSSt";
import {kwBsCtrlPropStat}           from "@kwBsCtrl/kwBsCtrlPropStat";
import {kwStatusBsEnum}             from "@kwClass/statusBs/kwStatusBsEnum";

const sSTATE: string                  = "aws";
const nSTAT: number                 = kwStatusBsEnum.mdls;

//@formatter:on


@Component({selector: 'kw-bootstrap-aws-ctrl-val', template: ``})
export class kwBsAWSCtrlVal extends kwBsCtrlPropStat
{
    constructor(val: kwBsAWSStVal)
    {super(val, sSTATE, nSTAT)}
}
