/**********************************************************************
 *
 * kwBs/state/app/kwBsAppCtrl.ts
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

import {kwBsAppStObj }          from "./kwBsAppSt";
import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";


const nSTAT: number             = kwStatusBsEnum.mdls;
const sSTATE: string            = "app";

//@formatter:off


@Component({selector: 'kw-bootstrap-app-ctrl-obj', template: ``})
export class kwBsAppCtrlObj extends kwBsCtrlPropStatObj
{
    constructor(obj: kwBsAppStObj)
    {super(obj, sSTATE, nSTAT)}
}
