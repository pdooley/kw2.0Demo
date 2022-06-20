/**********************************************************************
 *
 * kw/ctrl/kwCtrlMsg.ts
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
import {kwFctyMsg }        from "@kwFcty/msg/kwFctyMsg";
import {kwLog }            from "@kw/kwLog";
import {kwMsg}             from "@kwClass/msg/kwMsg";
import {kwSt }             from "@kwStat/kwSt";
import {kwStMsg }          from "@kwStat/kwStMsg";



export abstract class kwCtrlMsg
{

    protected sClass: string = this.constructor.name;


    protected constructor(
        private src: kwFctyMsg,
        private dst: kwStMsg       )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kwSt.is(this.dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.info(log.isObj("dst"), this.dst);


        if (!kwFctyMsg.is(this.src))
        {
            console.error(log.invalid("src"));
            return false;
        }
        //console.info(log.isObj("dst"), this.dst);


        return true;
    }

    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());
    }

    protected load(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if (!kwFctyMsg.is(this.src))
        {
            console.error(log.invalid("src"));
            return false;
        }
        //console.info(log.isObj("src"), this.src);


        if (!kwSt.is(this.dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.info(log.isObj("dst"), this.dst);


        const msg: kwMsg = this.src.all([]);
        if (!kwMsg.is(msg))
        {
            console.error(log.errCreate("msg"));
            return false;
        }
        //console.info(log.isObj("msg"), msg);


        this.dst.val = msg;
    }

}
