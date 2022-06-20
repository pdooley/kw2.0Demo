/**********************************************************************
 *
 * kw/class/xField/kwXFieldCurrCode.ts
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

export class kwXFieldCurrCode extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.currcode);
        //console.log("kwXFieldCurrCode::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("kwXFieldCurrCode::transform() called.");

        if (!kw.isString(val))
        {
            console.error("kwXFieldCurrCode::transform() val for [", sName, "] is not an object.");
            return null;
        }

        const valNew: any= val.sCode;
        if (!kw.isString(valNew))
        {
            console.error("kwXFieldCurrCode::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return valNew;
    }

}

