/**********************************************************************
 *
 * kw/class/BsApis/kwBsApis.ts
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
import {kw }                        from "@kw/kw";
import {kwApi }                     from "@kwClass/api/kwApi";
import {kwApiMap}                   from "@kwClass/api/kwApiMap";
import {kwApisSrvc }                from "./kwApisSrvc";
import {kwLog}                      from "@kw/kwLog";

const sProp = "apis";

//@formatter:on

export class kwBsApis
{
    protected sClass: string = this.constructor.name;


    apis: kwApiMap;

    constructor(private info: object)
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
            console.error("kwApis::init() info is invalid.");
            return false;
        }
        //console.info("kwApis::init() info ", this.info);

        const arr: object[] = this.info[sProp];
        if (!kw.isArray(arr))
        {
            console.error("kwApis::init() arr is invalid.");
            return false;
        }
        //console.info("kwApis::init() arr ", arr);

        const apis = new kwApiMap(arr);
        if (!apis.init())
        {
            console.error("kwApis::init() apis is invalid.");
            return false;
        }
        //console.info("kwApis::init() apis ", apis);
        this.apis = apis;

        return true;
    }

    getApi(sItem: string): kwApi
    {
        const log: kwLog = new kwLog(this.sClass, "getApi");
        //console.log(log.called());

        return kwApisSrvc.getItem(sItem, this.apis);
    }

    getApis(): object
    {
        return this.apis;
    }

    getItem(sItem: string): object
    {
        const log: kwLog = new kwLog(this.sClass, "getItem");
        //console.log(log.called());

        if (!kw.isString(sItem))
        {
            console.error(log.invalid("sItem"));
            return;
        }
        //console.info(log.isObj("sItem"), sItem);

        if (!kw.isValid(this.apis))
        {
            console.error(log.invalid("apis"));
            return;
        }
        //console.info(log.isObj("apis"), this.apis);

        return this.apis.getByCode(sItem);
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBsApis)
    }
}

