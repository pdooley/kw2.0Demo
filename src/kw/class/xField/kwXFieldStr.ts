/**********************************************************************
 *
 * kw/class/kwXFieldStr.ts
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

export class kwXFieldStr extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.str);
        //console.log("kwXFieldStr::constructor() is called.");
    }

    // static method
    transform(val: any, sName: string): any
    {
        //console.log("classXFieldStr::transform() called.");

        if (!kw.isString(val))
        {
            console.error("kwXFieldStr::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return val;
    }

}
