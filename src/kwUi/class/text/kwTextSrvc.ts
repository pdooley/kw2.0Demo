/**********************************************************************
 *
 * kwView/class/text/kwTextSrvc.ts
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
import {kwTextType}            from "./kwTextType";
//@formatter:on


export class kwTextSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwTextType)
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

