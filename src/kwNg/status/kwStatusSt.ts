/**********************************************************************
 *
 * kwNg/status/kwStatusStStatApp
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

import {kwTraceStTrace}   from "@kwBs/trace/kwTraceSt";
import {kwStStatApp}        from "@kwStat/kwStStatApp";


@Injectable({providedIn: 'root'})
export class kwStatusStStatApp extends kwStStatApp
{
    constructor(trace: kwTraceStTrace){super(trace)}
}

//@formatter:on
