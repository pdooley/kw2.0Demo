/**********************************************************************
 *
 * kwView/class/btn/kwBtnSrvc.ts
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
import {kw}                 from "@kw/kw";

import {kwBtnType }            from "./kwBtnType";
//@formatter:on


export class kwBtnSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwBtnType)
    }

    static in(nVal: number): boolean
    {
        return false
    }

    static toEnum(sVal: string): number
    {
        return -1;
    }

}

