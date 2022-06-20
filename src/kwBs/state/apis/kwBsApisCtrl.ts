/**********************************************************************
 *
 * kwBs/state/apis/kwBsApisCtrl.ts
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
import {Component}              from '@angular/core';

import {kwBsApisStObj}          from "./kwBsApisSt";
import {kwBsCtrlPropStatObj}    from "@kwBsCtrl/kwBsCtrlPropStatObj";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";


const nSTAT: number             = kwStatusBsEnum.trace;
const sPROP: string             = "apis";
//@formatter:off


@Component({selector: 'kw-bootstrap-apis-ctrl-obj', template: ``})
export class kwBsApisCtrlObj extends kwBsCtrlPropStatObj
{
    constructor(obj: kwBsApisStObj)
    {super(obj, sPROP, nSTAT)}
}

