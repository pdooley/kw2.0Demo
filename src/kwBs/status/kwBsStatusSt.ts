/**********************************************************************
 *
 * kwBs/state/stat/kwBsStatusSt
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
import {Injectable}         from "@angular/core";

import {AppInjector}        from "@app/appInjector";

import {kwStStatBs}         from "@kwStat/kwStStatBs";
import {kwTraceStTrace}     from "../trace/kwTraceSt";



@Injectable({providedIn: 'root'})
export class kwBsStatusStStatBs extends kwStStatBs
{
    constructor(){super(AppInjector.get(kwTraceStTrace))}
}

//@formatter:on
