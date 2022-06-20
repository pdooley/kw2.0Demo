/**********************************************************************
 *
 * kw/class/acts/kwActsSrvc.ts
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

import {kwActsType }                    from "./kwActsType";
//@formatter:on


export class kwActsSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwActsType)
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

