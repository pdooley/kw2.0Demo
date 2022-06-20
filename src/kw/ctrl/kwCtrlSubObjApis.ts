/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubValApis.ts
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
import {kw}                 from "@kw/kw";
import {kwCtrlSubObj}       from "./kwCtrlSubObj";
import {kwLog}              from "@kw/kwLog";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwApis}             from "@kwClass/apis/kwApis";
import {kwStObj}            from "@kwStat/kwStObj";



export abstract class kwCtrlSubObjApis extends kwCtrlSubObj
{

    protected constructor(
        src: kwStArr,
        dst: kwStObj )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected createVal(data: object[]): object
    {
        const log: kwLog = new kwLog(this.sClass, "createVal");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }

        const val = new kwApis(data);
        if (!val.init())
        {
            console.error(log.errCreate("val"));
            return;
        }
        //console.info(log.isObj("val"), val);

        return val;
    }

}
