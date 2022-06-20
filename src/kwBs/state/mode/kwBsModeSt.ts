/**********************************************************************
 *
 * kwBs/state/mode/kwBsModeSt.ts
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

import {kwBsStVal}      from "@kwBsStat/kwBsStVal";
import {kwMode}         from "@kwClass/mode/kwMode";
//@formatter:on

@Injectable({providedIn: 'root'})
export class kwBsModeStVal extends kwBsStVal
{
    constructor(){super()}
    public get(): kwMode {return <kwMode>super.get();}
}
