/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubArr.ts
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
import {kw}               from "@kw/kw";
import {kwCtrlSub}        from "./kwCtrlSub";
import {kwLog}            from "@kw/kwLog";
import {kwSt}             from "@kwStat/kwSt";
import {kwStArr}          from "@kwStat/kwStArr";



export abstract class kwCtrlSubArr extends kwCtrlSub
{


    protected constructor(
        src: kwSt,
        dst: kwStArr,
        private sProp?: string )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            console.error(this.sClass, "::init() error");
            return false;
        }

        if (!kw.isString(this.sProp))
        {
            console.error(this.sClass, "::init() sProp is invalid");
            return false;
        }

        return true;
    }

    protected preload(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preload");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"),data);

        if (!kw.isString(this.sProp))
        {
            //console.info(log.invalid("page"));
            return false;
        }
        //console.info(log.isObj("sProp"), this.sProp);

        const val = data[this.sProp];
        if (!kw.isArray(val))
        {
            //console.info(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);

        return this.load(val);
    }

}
