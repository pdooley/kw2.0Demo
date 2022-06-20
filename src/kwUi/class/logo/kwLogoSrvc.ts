/**********************************************************************
 *
 * kwView/class/logo/kwLogoSrvc.ts
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
import {kw}                 from "@kw/kw";
import {kwLogoType}        from "./kwLogoType";
//@formatter:on


export class kwLogoSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwLogoType)
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

