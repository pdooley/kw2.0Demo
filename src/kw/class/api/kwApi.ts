/**********************************************************************
 *
 * kw/class/api/kwApi.ts
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
import {kw}                       from "@kw/kw";
import {kwActs}                   from "@kwClass/acts/kwActs";
import {kwApiType}                from "./kwApiType";
import {kwFctyActs}               from "@kwFcty/acts/kwFctyActs";
import {kwFctyMode}               from "@kwFcty/mode/kwFctyMode";
import {kwLog}                    from "@kw/kwLog";
import {kwMode}                   from "@kwClass/mode/kwMode";
//@formatter:on


export class kwApi
{
    protected sClass: string = this.constructor.name;



    acts: kwActs;
    mode: kwMode;

    constructor(private info: kwApiType)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwApi::init() info is ", this.info);

        if (!this.retrieveActs())
        {
            console.error(log.errLoad("acts"));
            return false;
        }

        if (!this.retrieveMode())
        {
            console.error(log.errLoad("mode"));
            return false;
        }

        return true;
    }

    getActs(): kwActs
    {
        return this.acts;
    }

    getMode(): kwMode
    {
        return this.mode;
    }

    retrieveActs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveActs");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        const acts: kwActs = kwFctyActs.create(this.info);
        if (!kwActs.is(acts))
        {
            console.error(log.errCreate("acts"));
            return false;
        }
        //console.info(log.isObj("acts"), acts);
        this.acts = acts;

        return true;
    }

    retrieveMode(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveMode");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        const mode: kwMode = kwFctyMode.create(this.info);
        if (!kwMode.is(mode))
        {
            console.error(log.errCreate("mode"));
            return false;
        }
        //console.info(log.isObj("mode"), mode);
        this.mode = mode;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwApi)
    }

}

