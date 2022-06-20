/**********************************************************************
 *
 * kwUiAgGrid/class/col/kwColSrvc.ts
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

import {kw}                        from "@kw/kw";
import {kweCol}                    from "./kweCol";
//@formatter:on


export class kwColSrvc
{

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kweCol)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kweCol);
    }
}

