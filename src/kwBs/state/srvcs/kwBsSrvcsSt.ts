/**********************************************************************
 *
 * kwBs/state/srvcs/kwBsSrvcsStMap.ts
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
import {Injectable}        from "@angular/core";

import {kwBsStObj}          from "@kwBsStat/kwBsStObj";
import {kwSrvcs }           from "@kwClass/srvcs/kwSrvcs";

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwBsSrvcsStObj extends kwBsStObj
{
    constructor(){super()}
    public get(): kwSrvcs {return <kwSrvcs>super.get()}
}
