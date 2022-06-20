/**********************************************************************
 *
 * kwBs/state/srvcs/kwBsSrvcsCtrlMap.ts
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
import {Component }             from '@angular/core';

import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwBsSrvcsStObj }        from "./kwBsSrvcsSt";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";


const sSTATE: string            = "srvcs";
const nSTAT: number             = kwStatusBsEnum.trace;
//@formatter:off


@Component({selector: 'kw-bootstrap-srvcs-ctrl-map', template: ``})
export class kwBsSrvcsCtrlObj extends kwBsCtrlPropStatObj
{
    constructor(obj: kwBsSrvcsStObj)
    {super(obj, sSTATE, nSTAT)}
}
