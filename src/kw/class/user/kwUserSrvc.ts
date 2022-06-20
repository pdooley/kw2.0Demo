/**********************************************************************
 *
 * kw/class/srvc/kwUserSrvc.ts
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

import {kwUserEnum }            from "./kwUserEnum";
//@formatter:on


export class kwUserSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwUserEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwUserEnum);
    }
}

