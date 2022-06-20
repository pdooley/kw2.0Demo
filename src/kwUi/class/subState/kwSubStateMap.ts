/**********************************************************************
 *
 * kwUi/class/subState/kwSubStateMap.ts
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
import {kw}                 from "@kw/kw";
import {kweSubState}        from "./kweSubState";
import {kwLog}              from "@kw/kwLog";
import {kwState}            from "@kwClass/state/kwState";
import {kwSubState}         from "./kwSubState";
import {kwtSubState}        from "./kwtSubState";


const sDATA: string         = "data";
const sFULL: string         = "map";


//@formatter:on

export class kwSubStateMap extends kwSubState
{


    constructor(
        info: kwtSubState )
    {
        super(kweSubState.map, info);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public build(row: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "build");
        //console.log(log.called());


        if (!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return false;
        }
        //console.info(log.isObj("row"), row);


        if (!kw.isValid(this.data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        if (!kw.isString(this.sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), this.sName);


        const data = row[sDATA];
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        if (!kw.isValid(data[sFULL]))
        {
            data[sFULL] = {};
        }


        data[sFULL][this.sName] = this.data;

        return true;
    }


    protected chkData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "chkData");
        //console.log(log.called());


        if (!kw.isMap(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);

        return true;
    }


    protected createDst(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createDst");
        //console.log(log.called());


        if (!kw.isString(this.sName))
        {
            console.error(log.invalid("sName"));
            return;
        }
        //console.info(log.isObj("sName"), this.sName);

        return this.sName;
    }

    protected createPubBase(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createPubBase");
        //console.log(log.called());


        if (!kw.isString(this.sName))
        {
            console.error(log.invalid("sName"));
            return;
        }
        //console.info(log.isObj("sName"), this.sName);

        return this.sName + "s";
    }


    protected createSubBase(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createSubBase");
        //console.log(log.called());


        if (!kw.isString(this.sName))
        {
            console.error(log.invalid("sName"));
            return;
        }
        //console.info(log.isObj("sName"), this.sName);

        return this.sName;
    }


    public createSub(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createSub");
        //console.log(log.called());


        if (!kw.isString(this.sSubBase))
        {
            console.error(log.invalid("sSubBase"));
            return;
        }
        //console.info(log.isObj("sSubBase"), this.sSubBase);


        const sSub = kwState.createTopicMapRdy(this.sSubBase);
        if (!kw.isString(sSub))
        {
            console.error(log.invalid("sSub"));
            return;
        }
        //console.info(log.isObj("sSub"), sSub);


        return sSub;
    }

}
