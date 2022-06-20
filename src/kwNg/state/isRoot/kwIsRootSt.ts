/**********************************************************************
 *
 * kwNg/state/isRoot/kwIsRootSt.ts
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

//@formatter:on


@Injectable({providedIn: 'root'})
export class kwIsRootStVal extends kwBsStVal
{
    constructor(){super()}

    public init(): boolean
    {
        super.init();

        this.set(false);

        return true;
    }

    public get(): boolean
    {
        return <boolean>super.get();
    }

    public isRoot(): boolean
    {
        return this.get();
    }
}
