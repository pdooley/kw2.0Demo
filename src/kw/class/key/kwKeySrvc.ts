/**********************************************************************
 *
 * kw/class/key/kwKeySrvc.ts
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
import {kwKeyType }            from "./kwKeyType";
//@formatter:on


export class kwKeySrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwKeyType)
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

