/**********************************************************************
 *
 * kwBs/trace/kwTraceSt.ts
 *
 * author: Patrick Dooley
 *
 * This is a very special file - it must remain as it is.
 * It must not inherit from anything.
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}     from "@angular/core";

import {kwStTrace}      from "@kwStat/kwStTrace";

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwTraceStTrace extends kwStTrace
{
    constructor(){super()}
}
