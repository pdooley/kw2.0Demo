/**********************************************************************
 *
 * kw/stat/kwStTrace.ts
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
import * as _                           from "lodash";

import {kw}                           from "@kw/kw";
import {kwLog}                        from "@kw/kwLog";
import {kwSt}                         from "@kwStat/kwSt";
import {kwTrace}                       from "@kwClass/trace/kwTrace";


const sDATA_TYPE: string = "Trace";

//@formatter:off

// Create the injection token for the custom settings

export abstract class kwStTrace extends kwSt
{


    protected constructor()
    {
        super(
            sDATA_TYPE );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kwTrace.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public get bApp(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bApp;
    }

    public get bBs(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bBs;
    }

    public get bLoad(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bLoad;
    }

    public get bPubSub(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bPubSub;
    }

    public get bRoutes(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return false;}
        return val.bRoutes;
    }

    public get bState(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bState;
    }

    public get bUi(): boolean
    {
        const val: kwTrace = this.get();
        if (!kw.isValid(val)) { return true;}
        return val.bUi;
    }

    protected traceInt(data: any): void
    {
        //console.info(this.sClass, "::trace() data is [", data, "]");
    }


    public static is(val: object): boolean
    {
        return kw.is(val, kwStTrace);
    }
}
