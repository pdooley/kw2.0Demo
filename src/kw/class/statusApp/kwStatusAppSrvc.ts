/**********************************************************************
 *
 * kw/class/api/kwStatusAppSrvc.ts
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
import {kwLog}                      from "@kw/kwLog";

import {kwStatusAppEnum }             from "./kwStatusAppEnum";
//@formatter:on


export class kwStatusAppSrvc
{
    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwStatusAppEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwStatusAppEnum);
    }
}

