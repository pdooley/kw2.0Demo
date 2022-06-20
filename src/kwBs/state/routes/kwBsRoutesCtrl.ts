/**********************************************************************
 *
 * kwBs/state/routes/kwBsRoutesCtrl.ts
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
import {kwBsRoutesStVal}        from "./kwBsRoutesSt";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";

const sSTATE: string             = "routes";
const nSTAT: number              = kwStatusBsEnum.mdls;


@Component({selector: 'kw-bootstrap-routes-ctrl-val', template: ``})
export class kwBsRoutesCtrlVal extends kwBsCtrlPropStat
{
    constructor(val: kwBsRoutesStVal)
    {super(val, sSTATE, nSTAT)}
}

//@formatter:on

