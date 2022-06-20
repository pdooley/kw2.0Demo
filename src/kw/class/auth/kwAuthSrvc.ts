/**********************************************************************
 *
 * kw/class/api/kwAuthSrvc.ts
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

import {kwAuthEnum }            from "./kwAuthEnum";
//@formatter:on


export class kwAuthSrvc
{
    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwAuthEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwAuthEnum);
    }
}

