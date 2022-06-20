/**********************************************************************
 *
 * kwNg/state/err/kwErrSt.ts
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
import {kwErr }             from "@kwClass/err/kwErr";

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwErrStVal extends kwBsStVal
{
    constructor(){super()}
    public get(): kwErr {return <kwErr>super.get()}
}
