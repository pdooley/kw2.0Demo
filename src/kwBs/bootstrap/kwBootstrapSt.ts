/**********************************************************************
 *
 * kwBs/bootstrap/kwBootstrapSt.ts
 *
 * author: Patrick Dooley
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}         from "@angular/core";

import {AppInjector}        from "@app/appInjector";

import {kwStBs}             from "@kwStat/kwStBs";
import {kwTraceStTrace}     from "@kwBs/trace/kwTraceSt";

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwBootstrapStBs extends kwStBs
{
    constructor(){super(AppInjector.get(kwTraceStTrace))}
}
