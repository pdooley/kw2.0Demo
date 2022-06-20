/**********************************************************************
 *
 * kw/class/api/kwProtocolSrvc.ts
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

import {kwProtocolEnum }            from "./kwProtocolEnum";
//@formatter:on


export class kwProtocolSrvc
{
    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwProtocolEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwProtocolEnum);
    }
}

