/**********************************************************************
 *
 * kw/class/srvc/kwTimeZoneSrvc.ts
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

import {kwTimeZoneType }                from "./kwTimeZoneType";
//@formatter:on


export class kwTimeZoneSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwTimeZoneType)
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

