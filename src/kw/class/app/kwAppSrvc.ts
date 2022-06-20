/**********************************************************************
 *
 * kw/class/app/kwAppSrvc.ts
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
import {kwtApp}                 from "./kwtApp";
//@formatter:on


export class kwAppSrvc
{
    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtApp)
    }

    static in(nVal: number): boolean
    {
        return false
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }
}

