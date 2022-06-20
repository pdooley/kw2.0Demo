/**********************************************************************
 *
 * kw/class/api/kwPageSrvc.ts
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

import {kwPageType }            from "./kwPageType";
//@formatter:on


export class kwPageSrvc
{
    static isType(obj: object): boolean
    {
        return kw.is(obj, kwPageType)
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

