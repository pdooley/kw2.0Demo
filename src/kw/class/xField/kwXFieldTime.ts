/**********************************************************************
 *
 * kw/class/kwXFieldTime.ts
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

export class kwXFieldTime extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.time);
        //console.log("kwXFieldTime::constructor() is called.");
    }

    transform(val:any, sName: string): any
    {
        //console.log("classXFieldTime::transform() called.");

        if (!kw.isString(val))
        {
            console.error("kwXFieldStr::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return val;
    }

}
