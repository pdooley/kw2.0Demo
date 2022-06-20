/**********************************************************************
 *
 * kw/class/ajax/kwAjaxSrvc.ts
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

import {kwAjaxEnum }           from "./kwAjaxEnum";
import {kwAjaxType }            from "./kwAjaxType";
//@formatter:on


export class kwAjaxSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwAjaxType)
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kwAjaxEnum);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kwAjaxEnum);
    }

    static toString(nVal: number): string
    {
        return kw.toString(nVal, kwAjaxEnum);
    }

}

