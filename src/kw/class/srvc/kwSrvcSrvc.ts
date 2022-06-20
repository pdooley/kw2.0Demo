/**********************************************************************
 *
 * kw/class/srvc/kwSrvcSrvc.ts
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

import {kwtSrvc }                from "./kwtSrvc";
//@formatter:on


export class kwSrvcSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtSrvc)
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

