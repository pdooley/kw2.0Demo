/**********************************************************************
 *
 * kwNg/state/cred/kwCredSt.ts
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

import {kwCred}             from "@kwClass/cred/kwCred";
import {kwBsStVal}          from "@kwBsStat/kwBsStVal";

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwCredStVal extends kwBsStVal
{
    constructor(){super()}
    public get(): kwCred {return <kwCred>super.get()}
}
