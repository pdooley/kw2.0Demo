/**********************************************************************
 *
 * kw/class/host/kwHostSrvc.ts
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
import {kw }                    from "@kw/kw";

import {kwHostType }            from "./kwHostType";
//@formatter:on


export class kwHostSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwHostType)
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

