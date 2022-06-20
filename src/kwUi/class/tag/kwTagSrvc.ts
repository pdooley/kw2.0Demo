/**********************************************************************
 *
 * kwUi/class/tag/kwTagSrvc.ts
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
import {kw}                    from "@kw/kw";

import {kwtTag}                from "./kwtTag";
//@formatter:on


export class kwTagSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtTag);
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

