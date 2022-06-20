/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubMap.ts
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
import {kwCtrlSub }         from "./kwCtrlSub";
import {kwLog }             from "@kw/kwLog";
import {kwMap}              from "@kwClass/kwMap";
import {kwStArr }           from "@kwStat/kwStArr";
import {kwStMap }           from "@kwStat/kwStMap";



export abstract class kwCtrlSubMap extends kwCtrlSub
{


    protected constructor(
        src: kwStArr,
        dst: kwStMap    )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected abstract createMap(val: object[]): kwMap;

//@formatter:on


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

        const val: kwMap = this.createMap(data);
        if (!kwMap.is(val))
        {
            console.error(log.errCreate("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);

        return this.load(val);
    }

}
