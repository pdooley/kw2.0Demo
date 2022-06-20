/**********************************************************************
 *
 * kwView/class/attr/kwAttrSrvc.ts
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
import {kw}                 from "@kw/kw";

import {kweAttr}            from "./kweAttr";
import {kwtAttr}            from "./kwtAttr";
//@formatter:on


export class kwAttrSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtAttr)
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kweAttr)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kweAttr);
    }

}

