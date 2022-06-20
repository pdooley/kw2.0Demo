/**********************************************************************
 *
 * kw/class/route/kwRouteSrvc.ts
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

import {kwRouteEnum }            from "./kwRouteEnum";
//@formatter:on


export class kwRouteSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwRouteEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwRouteEnum);
    }
}

