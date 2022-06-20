/**********************************************************************
 *
 * kwView/class/form/kwFormSrvc.ts
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
import {kw }                       from "@kw/kw";
import {kwFormEnum }                from "./kwFormEnum";
//@formatter:on


export class kwFormSrvc
{

    static isType(obj: object): boolean
    {
        return false
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwFormEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwFormEnum);
    }

}
