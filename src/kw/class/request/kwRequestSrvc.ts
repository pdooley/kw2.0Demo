/**********************************************************************
 *
 * kw/class/srvc/kwRequestSrvc.ts
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
import {kw }                        from "@kw/kw";

import {kwRequestType }            from "./kwRequestType";
//@formatter:on


export class kwRequestSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwRequestType)
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

