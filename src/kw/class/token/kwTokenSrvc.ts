/**********************************************************************
 *
 * kw/class/token/kwTokenSrvc.ts
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

import {kwTokenEnum }            from "./kwTokenEnum";
//@formatter:on


export class kwTokenSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwTokenEnum);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwTokenEnum);
    }
}

