/**********************************************************************
 *
 * kw/class/api/kwMsgSrvc.ts
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

import {kwMsgEnum }            from "./kwMsgEnum";
import {kwMsgType }            from "./kwMsgType";
//@formatter:on


export class kwMsgSrvc
{
    static isType(obj: object): boolean
    {
        return kw.is(obj, kwMsgType)
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwMsgEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwMsgEnum);
    }
}

