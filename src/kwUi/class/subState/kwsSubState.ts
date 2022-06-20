/**********************************************************************
 *
 * kwUi/class/subState/kwsSubState.ts
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
import {kweSubState}        from "./kweSubState";
//@formatter:on


export class kwsSubState
{

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kweSubState)
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kweSubState);
    }
}

