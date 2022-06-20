/**********************************************************************
 *
 * kw/class/id/kwIdSrvc.ts
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

import {kwIdType }                from "./kwIdType";
//@formatter:on


export class kwIdSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwIdType)
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

