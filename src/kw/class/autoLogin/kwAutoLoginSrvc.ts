/**********************************************************************
 *
 * kw/class/cred/kwAutoLoginSrvc.tsc.ts
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

import {kwtAutoLogin }          from "./kwtAutoLogin";
//@formatter:on


export class kwAutoLoginSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtAutoLogin)
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

