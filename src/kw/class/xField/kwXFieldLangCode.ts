/**********************************************************************
 *
 * kw/class/xField/kwXFieldLangCode.ts
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

export class kwXFieldLangCode extends kwXField
{

    constructor()
    {
        super(kwXFieldEnum.langcode);
        //console.log("kwXFieldLangCode::constructor() is called.");
    }

    transform(val: any, sName: string): any
    {
        //console.log("kwXFieldLangCode::transform() called.");

        if (!kw.isString(val))
        {
            console.error("kwXFieldLangCode::transform() val for [", sName, "] is not an object.");
            return null;
        }

        const valNew: any= val.sCode;
        if (!kw.isString(valNew))
        {
            console.error("kwXFieldLangCode::transform() field [" + sName + "] is undefined.");
            return null;
        }

        return valNew;
    }

}

