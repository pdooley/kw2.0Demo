/**********************************************************************
 *
 * kw/kw/kwXFieldSrvc.ts
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
import {kwXFieldEnum }            from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwXFieldEnum);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwXFieldEnum);
    }

}

