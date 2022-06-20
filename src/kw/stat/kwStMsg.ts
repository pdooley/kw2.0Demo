/**********************************************************************
 *
 * kw/stat/kwStMsg.ts
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
import {kw}               from '../kw';
import {kwLog}            from "@kw/kwLog";
import {kwMsg}            from "@kwClass/msg/kwMsg";
import {kwSt}             from "./kwSt";
import {kwStTrace}        from "./kwStTrace";
//@formatter:off

const sDATA_TYPE: string = "Msg";

export abstract class kwStMsg extends kwSt
{
    protected constructor(
        trace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            trace,
            data  );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kwMsg.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: kwMsg)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!kwMsg.is(data))
        {
            console.error(log.invalid("data"));
            return
        }
        super.set(data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStMsg);
    }
}
