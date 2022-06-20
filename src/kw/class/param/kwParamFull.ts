/**********************************************************************
*
* kw/class/kwParamFull.ts
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
import {kw }                from "@kw/kw";

import {kwMap }            from "@kwClass/kwMap";
import {kwParam }            from "./kwParam";
import {kwParamEnum }        from "./kwParamEnum";
import {kwParamType }        from "./kwParamType";
import {kwVarEnum }        from "@kwClass/var/kwVarEnum";
import {kwVarSrvc }        from "@kwClass/var/kwVarSrvc";

import {kwXField }         from "@kwClass/xField/kwXField";
import {kwXFieldEnum }     from "@kwClass/xField/kwXFieldEnum";
import {kwXFieldArr }      from "@kwClass/xField/kwXFieldArr";
import {kwXFieldBool }     from "@kwClass/xField/kwXFieldBool";
import {kwXFieldCurr }     from "@kwClass/xField/kwXFieldCurr";
import {kwXFieldCurrCode } from "@kwClass/xField/kwXFieldCurrCode";
import {kwXFieldLang }     from "@kwClass/xField/kwXFieldLang";
import {kwXFieldLangCode } from "@kwClass/xField/kwXFieldLangCode";
import {kwXFieldNum }      from "@kwClass/xField/kwXFieldNum";
import {kwXFieldObj }      from "@kwClass/xField/kwXFieldObj";
import {kwXFieldSrvc }     from "@kwClass/xField/kwXFieldSrvc";
import {kwXFieldStr }      from "@kwClass/xField/kwXFieldStr";
import {kwXFieldTime }     from "@kwClass/xField/kwXFieldTime";
import {kwXFieldTz }       from "@kwClass/xField/kwXFieldTz";
import {kwXFieldTzCode }   from "@kwClass/xField/kwXFieldTzCode";

//@formatter:on

export class kwParamFull extends kwParam
{
    constructor(
        type: kwParamType,
        private srvcCurrs: kwMap,
        private srvcLangs: kwMap,
        private srvcTzs: kwMap     )
    {
        super(kwParamEnum.full, type);
        //console.log("kwParamFull::constructor() is called.");
    }

    public init(): boolean
    {
        //console.log("kwParamFull::init() called.");

        if (kw.isNull(this.srvcCurrs))
        {
            console.error("kwParamFull::init() srvcCurrs is invalid.");
            return false;
        }

        if (kw.isNull(this.srvcLangs))
        {
            console.error("kwParamFull::init() srvcLangs is invalid.");
            return false;
        }

        if (kw.isNull(this.srvcTzs))
        {
            console.error("kwParamFull::init() srvcTzs is invalid.");
            return false;
        }

        return super.init();
    }

    loadSrvc(sSrvc: string): kwXField
    {
        //console.log("kwParamFull::loadSrvc() called.");

        if (!kw.isString(sSrvc))
        {
            console.error("kwParamFull::loadSrvc() sSrvc is undefined.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() sSrvc is ", sSrvc);

        if (!kwMap.is(this.srvcCurrs))
        {
            console.error("kwParamFull::loadSrvc() srvcCurrs is undefined.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() srvcCurrs is ", this.srvcCurrs);

        if (!kwMap.is(this.srvcLangs))
        {
            console.error("kwParamFull::loadSrvc() srvcLangs is undefined.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() srvcLangs is ", this.srvcLangs);

        if (!kwMap.is(this.srvcTzs))
        {
            console.error("kwParamFull::loadSrvc() srvcTzs is undefined.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() srvcTzs is ", this.srvcTzs);

        const nType: kwXFieldEnum = kwXFieldSrvc.toEnum(sSrvc);
        if (!kwXFieldSrvc.in(nType))
        {
            console.error("kwParamFull::loadSrvc() field [", sSrvc, "] is not valid.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() nType is ", nType);

        let field: kwXField;

        switch ( nType )
        {
            case kwXFieldEnum.arr:
            {
                field = new kwXFieldArr();
                break;
            }

            case kwXFieldEnum.bool:
            {
                field = new kwXFieldBool();
                break;
            }

            case kwXFieldEnum.curr:
            {
                field = new kwXFieldCurr(this.srvcCurrs);
                break;
            }

            case kwXFieldEnum.currcode:
            {
                field = new kwXFieldCurrCode();
                break;
            }

            case kwXFieldEnum.lang:
            {
                field = new kwXFieldLang(this.srvcLangs);
                break;
            }

            case kwXFieldEnum.langcode:
            {
                field = new kwXFieldLangCode();
                break;
            }

            case kwXFieldEnum.num:
            {
                field = new kwXFieldNum();
                break;
            }

            case kwXFieldEnum.obj:
            {
                field = new kwXFieldObj();
                break;
            }

            case kwXFieldEnum.str:
            {
                field = new kwXFieldStr();
                break;
            }

            case kwXFieldEnum.time:
            {
                field = new kwXFieldTime();
                break;
            }

            case kwXFieldEnum.tz:
            {
                field = new kwXFieldTz(this.srvcTzs);
                break;
            }

            case kwXFieldEnum.tzcode:
            {
                field = new kwXFieldTzCode();
                break;
            }
        }

        if ( kw.isNull(field))
        {
            console.error("kwParamFull::loadSrvc() field is not valid.");
            return;
        }
        //console.info("kwParamFull::loadSrvc() field is ", field);

        return field;
    }

    processDefault(nVar: kwVarEnum, val: any): boolean
    {
        //console.log("kwParamFull::processDefault() called.");

        if (!kwVarSrvc.in(nVar))
        {
            console.error("kwParamFull::processDefault() nVar is invalid.");
            return false;
        }

        if (!kw.isString(val))
        {
            //console.info("kwParamFull::processDefault() no default value.");
            return true;
        }

        switch (nVar)
        {
            case kwVarEnum.curr:
            {
                const obj = this.srvcCurrs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            case kwVarEnum.lang:
            {
                const obj = this.srvcLangs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            case kwVarEnum.tz:
            {
                const obj = this.srvcTzs.getByCode(val);
                if (kw.isNull(obj))
                {
                    console.error("kwParamFull::processDefault() obj is not valid.");
                    return false;
                }
                //console.info("kwParamFull::processDefault() obj is ", obj);

                this.setDefault(obj);
                break;
            }

            default:
            {

            }
        }

        return true;
    }

}
