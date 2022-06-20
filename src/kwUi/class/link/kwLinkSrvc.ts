/**********************************************************************
 *
 * kwView/class/link/kwLinkSrvc.ts
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
import {kwLinkType}        from "./kwLinkType";
//@formatter:on


export class kwLinkSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwLinkType)
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

