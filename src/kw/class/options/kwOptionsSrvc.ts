/**********************************************************************
 *
 * kw/class/api/kwOptionsSrvc.ts
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

import {kwOptionsType }        from "./kwOptionsType";
//@formatter:on


export class kwOptionsSrvc
{
    static isType(obj: object): boolean
    {
        return kw.is(obj, kwOptionsType)
    }

    static in(nVal: number): boolean
    {
        return false;
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }
}

