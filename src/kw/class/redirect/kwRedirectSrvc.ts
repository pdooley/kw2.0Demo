/**********************************************************************
 *
 * kw/class/cred/kwRedirectSrvc.tsc.ts
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

import {kwtRedirect }           from "./kwtRedirect";
//@formatter:on


export class kwRedirectSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtRedirect)
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

