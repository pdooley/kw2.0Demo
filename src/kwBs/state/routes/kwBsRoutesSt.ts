/**********************************************************************
 *
 * kwBs/state/routes/kwBsRoutesSt.ts
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

import {kwBsStVal}          from "@kwBsStat/kwBsStVal";
import {kwRoutes}           from "@kwClass/routes/kwRoutes";



@Injectable({providedIn: 'root'})
export class kwBsRoutesStVal extends kwBsStVal
{
    constructor(){super()}
    public get(): kwRoutes {return <kwRoutes>super.get()}
}

//@formatter:on
