/**********************************************************************
 *
 * kw/class/act/kwActSrvc.ts
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
import {kw }                        from "@kw/kw";

import {kwActEnum }                from "./kwActEnum";
import {kwActType }                from "./kwActType";
//@formatter:on


export class kwActSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwActType)
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwActEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwActEnum);
    }
}

