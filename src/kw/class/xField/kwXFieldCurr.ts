/**********************************************************************
 *
 * kw/class/xField/kwXFieldCurr.ts
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
import {kwMap }                from "@kwClass/kwMap";
import {kwXField }                from "./kwXField";
import {kwXFieldEnum }            from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldCurr extends kwXField
{

    constructor(private srvcCurrs: kwMap)
    {
        super(kwXFieldEnum.curr);
        //console.log("kwXFieldCurr::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("classXFieldCurr::transform() called.");

        if (!kw.isString(val))
        {
            console.error("classXFieldCurr::transform() val is invalid.");
            return null;
        }

        const valNew: any= this.srvcCurrs.getByCode(val);
        if (kw.isNull(valNew))
        {
            console.error("classXFieldCurr::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return valNew;
    }

}

