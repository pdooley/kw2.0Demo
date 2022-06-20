/**********************************************************************
 *
 * kwNgUi/state/disp/kwNgUiDispCtrl.ts
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

import {kwNgUiCtrlPropStatObj}  from "@kwNgUiCtrl/kwNgUiCtrlPropStatObj";
import {kwNgUiDispStObj}        from "./kwNgUiDispSt";
import {kwUiStatusEnum}         from "@kwUiClass/status/kwUiStatusEnum";


const nSTAT: number             = kwUiStatusEnum.state;
const sSTATE: string            = "disp";

//@formatter:on


@Component({selector: 'kw-ng-ui-disp-ctrl-obj', template: ``})
export class kwNgUiDispCtrlObj extends kwNgUiCtrlPropStatObj
{
    constructor(obj: kwNgUiDispStObj)
    {super(obj, sSTATE, nSTAT)}
}
