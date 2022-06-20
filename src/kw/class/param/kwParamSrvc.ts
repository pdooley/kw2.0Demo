/**********************************************************************
 *
 * kw/class/api/kwParamSrvc.ts
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

import {kwParamEnum }            from "./kwParamEnum";
import {kwParamType }            from "./kwParamType";
//@formatter:on


export class kwParamSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwParamType)
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwParamEnum);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwParamEnum);
    }

}

