/**********************************************************************
 *
 * kwBs/trace/kwTraceCtrl.ts
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

import {AppInjector}            from "@app/appInjector";

import {kwBsCtrlPropStatTrace}  from "@kwBsCtrl/kwBsCtrlPropStatTrace";
import {kwTraceStTrace}         from "./kwTraceSt";


//@formatter:on


@Component({selector: 'kw-bootstrap-trace-ctrl-trace', template: ``})
export class kwTraceCtrlTrace extends kwBsCtrlPropStatTrace
{
    constructor(){super(AppInjector.get(kwTraceStTrace))}
}
