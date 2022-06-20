/**********************************************************************
 *
 * kw/class/errBodyRep/kwErrBodySrvc.ts
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
import {kw }                            from "@kw/kw";

import {kwErrBodyRepType }             from "./kwErrBodyRepType";
//@formatter:on


export class kwErrBodyRepSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwErrBodyRepType)
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

