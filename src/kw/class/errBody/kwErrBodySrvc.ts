/**********************************************************************
 *
 * kw/class/err/kwErrBodySrvc.ts
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

import {kwErrBodyType }                from "./kwErrBodyType";
//@formatter:on


export class kwErrBodySrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwErrBodyType)
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

