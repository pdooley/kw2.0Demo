/**********************************************************************
 *
 * kwBs/state/autoLogin/kwBsAutoLogin.ts
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
import {Component}                  from "@angular/core";

import {kwBsAppStObj}               from "@kwBsState/app/kwBsAppSt";
import {kwBsAutoLoginStSmpl}        from "./kwBsAutoLoginSt";
import {kwBsCtrlPropStatSmpl}       from "@kwBsCtrl/kwBsCtrlPropStatSmpl";
import {kwStatusBsEnum}             from "@kwClass/statusBs/kwStatusBsEnum";

const sSTATE: string                = "bAutoLogin";
const nSTAT: number                 = kwStatusBsEnum.trace;

//@formatter:on


@Component({selector: 'kw-bootstrap-auto-login-ctrl-smpl', template: ``})
export class kwBsAutoLoginCtrlSmpl extends kwBsCtrlPropStatSmpl
{
    constructor(obj: kwBsAppStObj, smpl: kwBsAutoLoginStSmpl)
    {super(obj, smpl, sSTATE, nSTAT)}
}
