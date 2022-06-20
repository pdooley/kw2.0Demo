/**********************************************************************
 *
 * kw/class/port/kwPortSrvc.ts
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

import {kwPortType }                from "./kwPortType";
//@formatter:on


export class kwPortSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwPortType)
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

