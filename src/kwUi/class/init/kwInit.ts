/**********************************************************************
 *
 * kwUi/class/init/kwInit.ts
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
import {kwInitType}               from "./kwInitType";
import {kwLog}                    from "@kw/kwLog";
//@formatter:on


export class kwInit
{
    protected sClass: string = this.constructor.name;


    constructor(
        private info: kwInitType)
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
        //console.info("kwInit::init() info is ", this.info);

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwInit)
    }

}

