/**********************************************************************
 *
 * kwView/class/api/kwColSrvc.ts
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
import {kw }                from "@kw/kw";

import {kwColEnum }            from "./kwColEnum";
//@formatter:on


export class kwColSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwColEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwColEnum);
    }
}

