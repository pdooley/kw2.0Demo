/**********************************************************************
 *
 * kw/class/api/kwApiSrvc.ts
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

import {kwApiType }            from "./kwApiType";
//@formatter:on


export class kwApiSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwApiType)
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

