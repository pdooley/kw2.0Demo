/**********************************************************************
 *
 * kwUi/class/init/kwInitSrvc.ts
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
import {kw}                    from "@kw/kw";

import {kwInitType}            from "./kwInitType";
//@formatter:on


export class kwInitSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwInitType)
    }

    static in(nVal: number): boolean
    {
        return false
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }
}

