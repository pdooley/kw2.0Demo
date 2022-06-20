/**********************************************************************
 *
 * kw/class/api/kwDataSrvc.ts
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

import {kwDataEnum }            from "./kwDataEnum";
//@formatter:on


export class kwDataSrvc
{

    static isType(obj: any): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwDataEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwDataEnum);
    }
}

