/**********************************************************************
 *
 * kw/class/srvc/kwVarSrvc.ts
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

import {kwVarEnum }            from "./kwVarEnum";
//@formatter:on


export class kwVarSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwVarEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwVarEnum);
    }
}

