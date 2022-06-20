/**********************************************************************
 *
 * kw/stat/kwStStatBs.ts
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
import {BehaviorSubject}    from "rxjs";
import * as _               from "lodash";

import {kwLog}            from "@kw/kwLog";
import {kwStatusBs}       from "@kwClass/statusBs/kwStatusBs";
import {kwStatusBsInit}   from "@kwClass/statusBs/kwStatusBsInit";
import {kwStStat}         from "@kwStat/kwStStat";
import {kwStTrace}         from "./kwStTrace";
//@formatter:off


const DEFAULT: kwStatusBs = new kwStatusBsInit();
const sDATA_TYPE: string = "StatBs";

export abstract class kwStStatBs extends kwStStat
{
    protected constructor(
        srvcTrace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data    );

        //console.log(this.sClass, "::constructor() called.");
    }

    protected loadDefault(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDefault");
        //console.log(log.called());

        // Set the config from the default config
        this.subject = new BehaviorSubject(_.cloneDeep(DEFAULT));

        return true;
    }

    public get(): kwStatusBs
    {
        return <kwStatusBs>super.get();
    }

    public isBase(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isBase");
        //console.log(log.called());

        const stat: kwStatusBs = this.get();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isBase();
    }

    public isComplete(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isComplete");
        //console.log(log.called());

        const stat: kwStatusBs = this.get();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isComplete();
    }

    public isTrace(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isTrace");
        //console.log(log.called());

        const stat: kwStatusBs = this.get();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isTrace();
    }

    protected traceInt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        if (this.srvcTrace.bBs) console.info(log.isObj(this.sDataType), data);
    }

}
