/**********************************************************************
 *
 * kwView/class/Group/kwGroupSrvc.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@Groupatter:off
import {kw}                       from "@kw/kw";
import {kwGroupEnum}                from "./kwGroupEnum";
//@Groupatter:on


export class kwGroupSrvc
{

    static isType(obj: object): boolean
    {
        return false
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwGroupEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwGroupEnum);
    }

}
