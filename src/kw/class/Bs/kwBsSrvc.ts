/**********************************************************************
 *
 * kw/class/Bs/kwBsSrvc.ts
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
import {kw }                from "@kw/kw";

import {kwtBs }                from "./kwtBs";
//@formatter:on


export class kwBsSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtBs)
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

