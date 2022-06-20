/**********************************************************************
 *
 * kw/ctrl/kwCtrlVal.ts
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
import {kwStArr}          from "@kwStat/kwStArr";
import {kwStObj}          from "@kwStat/kwStObj";



export abstract class kwCtrlSubObj extends kwCtrlSub
{

    protected constructor(
        src: kwStArr,
        dst: kwStObj )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected abstract createVal(data: object[]): object;

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

        return true;
    }


    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());


        if (kw.isNull(data))
        {
            console.error(log.invalid("data"));
            return false;
        }

        if (!kw.isArray(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        const val = this.createVal(data);
        if (!kw.isValid(val))
        {
            //console.info(log.errCreate("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);

        return this.load(val);
    }

}
