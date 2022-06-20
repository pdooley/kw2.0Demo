/**********************************************************************
 *
 * kw/stat/kwStBs.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {kw}                 from "@kw/kw";
import {kwBs}               from "@kwClass/Bs/kwBs";
import {kwLog}              from "@kw/kwLog";
import {kwSt}               from "./kwSt";
import {kwStTrace}          from "./kwStTrace";
//@formatter:off


const sDATA_TYPE: string = "Bs";


export abstract class kwStBs extends kwSt
{

    protected constructor(
        srvcTrace: kwStTrace,
        data?: object)
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kwBs.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: kwBs)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!kwBs.is(data))
        {
            console.error(log.invalid("data"));
            return
        }
        super.set(data);
    }

    public get(): kwBs
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());

        return <kwBs>super.get();
    }

    protected traceInt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        //console.info(log.isObj(this.sDataType), data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStBs);
    }

}
