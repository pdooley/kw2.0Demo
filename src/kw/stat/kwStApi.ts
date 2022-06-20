/**********************************************************************
 *
 * kw/stat/kwStApi.ts
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
import * as _               from "lodash";

import {kw}                 from "@kw/kw";
import {kwActs}             from "@kwClass/acts/kwActs";
import {kwApi}              from "@kwClass/api/kwApi";
import {kwApiSrvc}          from "@kwClass/api/kwApiSrvc";
import {kwLog}              from "@kw/kwLog";
import {kwMode}             from "@kwClass/mode/kwMode";
import {kwSt}               from "./kwSt";
import {kwStTrace}          from "./kwStTrace";
//@formatter:off

const sDATA_TYPE: string    = "Api";


export abstract class kwStApi extends kwSt
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

        if (!kw.isValid(data))
        {
            //console.info(log.empty("data"));
            this.subject.next(null);
            return;
        }


        if (!kwApi.is(data))
        {
            console.error(log.invalid("data"));
            return
        }
        //console.info(log.isObj("data"), data);


        this.traceInt(data);


        // Notify the observers
        this.subject.next(data);
    }

    public set(data: kwApi)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!kwApi.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        super.set(data);
    }

    public get(): kwApi
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());

        return <kwApi>super.get();
    }

    public getActs(): kwActs
    {
        const log: kwLog = new kwLog(this.sClass, "getActs");
        //console.log(log.called());

        const api: kwApi = this.get();
        if (!kwApi.is(api))
        {
            console.error(log.invalid("api"));
            return;
        }

        const acts: kwActs = api.getActs();
        if (!kwActs.is(acts))
        {
            console.error(log.invalid("acts"));
            return;
        }

        return acts;
    }

    public getMode(): kwMode
    {
        const log: kwLog = new kwLog(this.sClass, "getMode");
        //console.log(log.called());

        const api: kwApi = this.val;
        if (!kwApi.is(api))
        {
            console.error(log.invalid("api"));
            return;
        }

        const mode: kwMode = api.getMode();
        if (!kwMode.is(mode))
        {
            console.error(log.invalid("mode"));
            return;
        }

        return mode;
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStApi);
    }

}
