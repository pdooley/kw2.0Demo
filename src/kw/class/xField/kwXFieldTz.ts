/**********************************************************************
 *
 * kw/class/kwXFieldTz.ts
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
import {kw }                  from "@kw/kw";
import {kwMap }              from "@kwClass/kwMap";
import {kwXField }              from "./kwXField";
import {kwXFieldEnum }          from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldTz extends kwXField
{

    constructor(private srvcTzs: kwMap)
    {
        super(kwXFieldEnum.tz);
        //console.log("kwXFieldTz::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("kwXFieldTz::transform() called.");

        if (!kw.isString(val))
        {
            console.error("kwXFieldTz::transform() field [" + sName + "] is undefined.");
            return null;
        }

        const valNew: any = this.srvcTzs.getByCode(val);
        if (kw.isNull(valNew))
        {
            console.error("kwXFieldTz::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return valNew;
    }
}

