
/**********************************************************************
 *
 * kw/class/page/kwPage.ts
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
import {kw }                from "@kw/kw";
import {kwFctyMsg}          from "@kwFcty/msg/kwFctyMsg";
import {kwLog}              from "@kw/kwLog";
import {kwPageEnum }        from "./kwPageEnum";
import {kwPageType}         from "@kwClass/page/kwPageType";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwStMsg}            from "@kwStat/kwStMsg";
//@formatter:on

export abstract class kwPage
{
    protected sClass: string = this.constructor.name;


    protected srvcData: kwStArr;
    protected srvcFcty: kwFctyMsg;
    protected srvcMsg: kwStMsg;


    protected constructor(
        private nType: kwPageEnum,
        private type:  kwPageType  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected abstract createMsg(fltr?: any): boolean;


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);


        this.srvcData = this.type.srvcData;
        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return false;
        }
        //console.info(log.isObj("srvcData"), this.srvcData);


        this.srvcFcty = this.type.srvcFcty;
        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }
        //console.info(log.isObj("srvcFcty"), this.srvcFcty);


        this.srvcMsg = this.type.srvcMsg;
        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }
        //console.info(log.isObj("srvcMsg"), this.srvcMsg);


        if (!this.createMsg())
        {
            console.error(log.errCreate("msg"));
            return false;
        }

        return true;
    }

    public destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwPage)
    }

}
