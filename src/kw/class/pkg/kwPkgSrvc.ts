/**********************************************************************
 *
 * kw/class/pkg/kwPkgSrvc.ts
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

import {kwPkgType }            from "./kwPkgType";
//@formatter:on


export class kwPkgSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwPkgType)
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

