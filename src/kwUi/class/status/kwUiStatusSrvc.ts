/**********************************************************************
 *
 * kwUi/class/status/kwUiStatusSrvc.ts
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
import {kw}               from "@kw/kw";
import {kwLog}                 from "@kw/kwLog";

import {kwUiStatusEnum}        from "./kwUiStatusEnum";
//@formatter:on


export class kwUiStatusSrvc
{

    static isType(obj: object): boolean
    {
        return false;
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwUiStatusEnum)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwUiStatusEnum);
    }
}

