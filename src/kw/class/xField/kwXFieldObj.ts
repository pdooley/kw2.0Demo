/**********************************************************************
 *
 * kw/class/kwXFieldObj.ts
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

export class kwXFieldObj extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.obj);
        //console.log("kwXFieldObj::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("classXFieldObj::transform() called.");

        if (kw.isNull(val))
        {
            console.error("kwXFieldObj::transform() field [" + sName + "] is undefined.");
        }

        return val;
    }
}
