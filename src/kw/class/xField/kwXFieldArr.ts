/**********************************************************************
 *
 * kw/kw/kwXFieldArr.ts
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
import {kwXField }                from "./kwXField";
import {kwXFieldEnum }            from "./kwXFieldEnum";
//@formatter:on


export class kwXFieldArr extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.arr);
        //console.log("kwXField::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("classXFieldArr::transform() called.");

        if (kw.isArray(val))
        {
            return val;
        }

        console.error("classXFieldArr::transform() field [" + sName + "] is undefined.");

        return undefined;
    }

}
