/**********************************************************************
 *
 * kw/class/srvc/kwMetricSrvc.ts
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

import {kwMetricType }            from "./kwMetricType";
//@formatter:on


export class kwMetricSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwMetricType)
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

