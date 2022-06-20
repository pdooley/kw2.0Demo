/**********************************************************************
 *
 * kw/class/kwXFieldNum.ts
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
import {kwXField }                from "./kwXField";
//@formatter:on

export class kwXFieldNum extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.num);
        //console.log("kwXFieldNum::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("classXFieldNum::transform() called.");

        const nVal = kw.toNumber(val);
        if (!kw.isNumber(nVal))
        {
            console.error("classXFieldNum::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return nVal;
    }
}
