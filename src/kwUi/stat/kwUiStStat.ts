/**********************************************************************
 *
 * kwUi/stat/kwStStatUi.ts
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

import {kwLog}              from "@kw/kwLog";
import {kwUiStatus}         from "@kwUiClass/status/kwUiStatus";
import {kwUiStatusApp}      from "@kwUiClass/status/kwUiStatusApp";
import {kwStStat}           from "@kwStat/kwStStat";
import {kwStTrace}          from "@kwStat/kwStTrace";
//@formatter:off


const DEFAULT: kwUiStatus = new kwUiStatusApp();
const sDATA_TYPE: string = "StatUi";

export abstract class kwUiStStat extends kwStStat
{
    protected constructor(
        trace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            trace,
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

    public get(): kwUiStatus
    {
        return <kwUiStatus>super.get();
    }


    public isApp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isBase");
        //console.log(log.called());

        const stat: kwUiStatus = this.get();
        if (!kwUiStatus.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isApp();
    }


    public isComplete(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isComplete");
        //console.log(log.called());

        const stat: kwUiStatus = this.get();
        if (!kwUiStatus.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isComplete();
    }


    public isState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "isState");
        //console.log(log.called());

        const stat: kwUiStatus = this.get();
        if (!kwUiStatus.is(stat))
        {
            console.error(log.invalid("stat"));
            return false;
        }

        return stat.isState();
    }


    protected traceInt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        if (this.srvcTrace.bBs) console.info(log.isObj(this.sDataType), data);
    }

}
