/**********************************************************************
 *
 * kwView/class/title/kwTitleSrvc.ts
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
import {kw}                    from "@kw/kw";
import {kwTitleType}            from "./kwTitleType";
//@formatter:on


export class kwTitleSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwTitleType)
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

