/**********************************************************************
 *
 * kwUi/class/subState/kwSubStateBase.ts
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


//@formatter:on

export class kwSubStateBase extends kwSubState
{


    constructor(
        info: kwtSubState )
    {
        super(kweSubState.base, info);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public build(row: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "build");
        //console.log(log.called());


         return true;
    }


    protected chkData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "chkData");
        //console.log(log.called());

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

        return this.sName + "s";
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

        return this.sName + "s";
    }


    protected createSub(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createSub");
        //console.log(log.called());


        if (!kw.isString(this.sSubBase))
        {
            console.error(log.invalid("sSubBase"));
            return;
        }
        //console.info(log.isObj("sSubBase"), this.sSubBase);


        const sSub = kwState.createTopicRdy(this.sSubBase);
        if (!kw.isString(sSub))
        {
            console.error(log.invalid("sSub"));
            return;
        }
        //console.info(log.isObj("sSub"), sSub);


        return sSub;
    }


}
