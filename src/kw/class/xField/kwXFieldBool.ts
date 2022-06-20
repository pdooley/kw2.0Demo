/**********************************************************************
 *
 * kw/kw/kwXFieldBool.ts
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
import {kw }                   from "@kw/kw";
import {kwXField }                from "./kwXField";
import {kwXFieldEnum }            from "./kwXFieldEnum";
//@formatter:on

export class kwXFieldBool extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.bool);
        //console.log("kwXField::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("classXFieldArr::transform() called.");

        if ( kw.isBoolean(val))
        {
            return val;
        }

        if ( kw.isNumber(val))
        {
            return kw.toBool(val)
        }

        if (!kw.isString(val))
        {
            console.error("classXFieldBool::transform() field [" + sName + "] is undefined.");
            return null;
        }

        const nVal: number = parseInt(val);

        return kw.toBool(nVal);
    }


}
