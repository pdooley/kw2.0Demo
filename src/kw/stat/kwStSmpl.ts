/**********************************************************************
 *
 * kw/stat/kwStSmpl.ts
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
import {kw}               from "@kw/kw";
import {kwActs}           from "@kwClass/acts/kwActs";
import {kwApi}            from "@kwClass/api/kwApi";
import {kwLog}            from "@kw/kwLog";
import {kwMode}           from "@kwClass/mode/kwMode";
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";
import * as _               from "lodash";

const sDATA_TYPE: string = "Smpl";

//@formatter:off

export abstract class kwStSmpl extends kwSt
{

    protected constructor(
        srvcTrace: kwStTrace,
        data?: object   )
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

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    protected traceInt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        if (this.srvcTrace.bState) console.info(log.is(this.sDataType+ " [" + this.nId + "] ", data));
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStSmpl);
    }

}
