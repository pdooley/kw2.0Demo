/**********************************************************************
 *
 * kw/class/curr/kwCurrSrvc.ts
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

import {kwCurrType }            from "./kwCurrType";
//@formatter:on


export class kwCurrSrvc
{
    static isMap(obj: object): boolean
    {
        return kw.isMap(obj)
    }

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwCurrType)
    }

    static in(nVal: number): boolean
    {
        return false;
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }
}

