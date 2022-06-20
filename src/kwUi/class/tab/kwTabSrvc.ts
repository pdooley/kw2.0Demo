/**********************************************************************
 *
 * kwView/class/tab/kwTabSrvc.ts
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
import {kw}                from "@kw/kw";

import {kwTabType}         from "./kwTabType";
//@formatter:on


export class kwTabSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwTabType)
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

