/**********************************************************************
 *
 * kw/class/kwParamSub.ts
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
import {kw }                        from "@kw/kw";
import {kwVarEnum }                from "@kwClass/var/kwVarEnum";

import {kwParam }                    from "./kwParam";
import {kwParamEnum }                from "./kwParamEnum";
import {kwParamType }                from "./kwParamType";
import {kwParamSrvc }              from "./kwParamSrvc";

import {kwXField }                    from "@kwClass/xField/kwXField";
import {kwXFieldEnum }             from "@kwClass/xField/kwXFieldEnum";
import {kwXFieldSrvc }             from "@kwClass/xField/kwXFieldSrvc";
import {kwXFieldArr }              from "@kwClass/xField/kwXFieldArr";
import {kwXFieldBool }             from "@kwClass/xField/kwXFieldBool";
import {kwXFieldNum }              from "@kwClass/xField/kwXFieldNum";
import {kwXFieldStr }              from "@kwClass/xField/kwXFieldStr";
import {kwXFieldTime }             from "@kwClass/xField/kwXFieldTime"; import {kwXFieldObj} from "@kwClass/xField/kwXFieldObj";
//@formatter:on

export class kwParamSub extends kwParam
{

    constructor(type: kwParamType)
    {
        super(kwParamEnum.sub, type);
        //console.log("kwParamSub::constructor() is called.");
    }

    loadSrvc(sSrvc: string): kwXField
    {
        //console.log("kwParamSub::loadSrvc() called.");
        if (!kw.isString(sSrvc))
        {
            console.error("kwParamSub::loadSrvc() sType is undefined.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() sType is ", sType);

        const nType: kwXFieldEnum = kwXFieldSrvc.toEnum(sSrvc);
        if (!kwXFieldSrvc.in(nType))
        {
            console.error("kwParamSub::loadSrvc() nType is undefined.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() nType is ", nType);

        let xSrvc: kwXField;

        switch ( nType )
        {
            case kwXFieldEnum.arr:
            {
                xSrvc = new kwXFieldArr();
                break;
            }

            case kwXFieldEnum.bool:
            {
                xSrvc = new kwXFieldBool();
                break;
            }

            case kwXFieldEnum.num:
            {
                xSrvc = new kwXFieldNum();
                break;
            }

            case kwXFieldEnum.obj:
            {
                xSrvc = new kwXFieldObj();
                break;
            }

            case kwXFieldEnum.str:
            {
                xSrvc = new kwXFieldStr();
                break;
            }

            case kwXFieldEnum.time:
            {
                xSrvc = new kwXFieldTime();
                break;
            }
        }

        if ( kw.isNull(xSrvc))
        {
            console.error("kwParamSub::loadSrvc() xSrvc is not valid.");
            return;
        }
        //console.info("kwParamSub::loadSrvc() xSrvc is ", field);

        return xSrvc;
    }

    processDefault(nVar: kwVarEnum, val: any): boolean
    {
        //console.log("kwParamSub::processDefault() called.");
        return true;
    }

}
