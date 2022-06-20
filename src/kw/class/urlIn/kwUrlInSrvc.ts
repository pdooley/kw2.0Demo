/**********************************************************************
 *
 * kw/class/urlin/kwUrlInSrvc.ts
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

import {kwUrlInType }            from "./kwUrlInType";
//@formatter:on


export class kwUrlInSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwUrlInType)
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

