/**********************************************************************
 *
 * kw/class/acc/kwAccSrvc.ts
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

import {kwAccEnum }                from "./kwAccEnum";
//@formatter:on


export class kwAccSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwAccEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwAccEnum);
    }

}
