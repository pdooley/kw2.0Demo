/**********************************************************************
 *
 * kw/class/srvc/kwUrlSrvc.ts
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
import {kweUrl }                from "@kwClass/url/kweUrl";
//@formatter:on


export class kwUrlSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kweUrl);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kweUrl);
    }
}

