/**********************************************************************
 *
 * kw/class/StatBs/kwStatusBsSrvc.ts
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
import {kw }               from "@kw/kw";
import {kwLog }                 from "@kw/kwLog";

import {kwStatusBsEnum }        from "./kwStatusBsEnum";
//@formatter:on


export class kwStatusBsSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwStatusBsEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwStatusBsEnum);
    }
}

