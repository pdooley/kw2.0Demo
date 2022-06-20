/**********************************************************************
 *
 * kw/stat/kwStStat.ts
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
import {kwLog}            from "@kw/kwLog";
import {kwSt}             from "./kwSt";
import {kwStatus}          from "@kwClass/status/kwStatus";
import {kwStTrace}         from "./kwStTrace";

//@formatter:off


export abstract class kwStStat extends kwSt
{


    protected constructor(
        sDataType: string,
        srvcTrace: kwStTrace,
        data?: object)
    {
        super(
            sDataType,
            srvcTrace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kwStatus.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    matches(nStat: number): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "matches");
        //console.log(log.called());

        return (this.get().matches(nStat));
    }

    isInit(): boolean
    {
        return (this.get().isInit());
    }

}
