/**********************************************************************
 *
 * kw/class/cred/kwFirebaseSrvcSrvc.ts
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

import {kwtFirebase }                from "./kwtFirebase";
//@formatter:on


export class kwFirebaseSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtFirebase)
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

