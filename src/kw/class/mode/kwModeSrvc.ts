/**********************************************************************
 *
 * kw/class/mode/kwModeSrvc.ts
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

import {kwModeEnum }            from "./kwModeEnum";
//@formatter:on


export class kwModeSrvc
{
    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwModeEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwModeEnum);
    }
}

