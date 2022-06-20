/**********************************************************************
 *
 * kw/class/cred/kwFirebaseSrvc.tsc.ts
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

import {kwtCred }                from "./kwtCred";
//@formatter:on


export class kwCredSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtCred)
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

