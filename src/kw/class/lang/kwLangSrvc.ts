/**********************************************************************
 *
 * kw/class/api/kwLangSrvc.ts
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

import {kwLangType }            from "./kwLangType";
//@formatter:on


export class kwLangSrvc
{
    static isType(obj: object): boolean
    {
        return kw.is(obj, kwLangType)
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

