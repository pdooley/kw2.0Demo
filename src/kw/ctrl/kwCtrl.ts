/**********************************************************************
 *
 * kw/ctrl/kwCtrl.ts
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
import {kwLog }    from "@kw/kwLog";
import {kwSt }     from "@kwStat/kwSt";


export abstract class kwCtrl
{
    protected sClass: string = this.constructor.name;


    protected constructor(
        protected src: kwSt,
        protected dst: kwSt    )
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


        if (!kwSt.is(this.src))
        {
            console.error(log.invalid("src"));
            return false;
        }
        //console.info(log.isObj("src"), this.src);


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


        if (!kwSt.is(this.dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.info(log.isObj("src"), this.src);


        this.dst.val = data;

        return true;
    }

}
