/**********************************************************************
 *
 * kwBs/state/cred/kwBsCredSt.ts
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
import {Injectable}     from "@angular/core";

import {kwBsStObj}      from "@kwBsStat/kwBsStObj";
import {kwCred}         from "@kwClass/cred/kwCred";
//@formatter:on



@Injectable({providedIn: 'root'})
export class kwBsCredStObj extends kwBsStObj
{
    constructor(){super()}
    public get(): kwCred {return <kwCred>super.get();}
}
