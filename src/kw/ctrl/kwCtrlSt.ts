/**********************************************************************
 *
 * kw/ctrl/kwCtrlView.ts
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

import {kw }               from "@kw/kw";
import {kwLog }            from "@kw/kwLog";
import {kwStArr }          from "@kwStat/kwStArr";
import {kwStVal }          from "@kwStat/kwStVal";



export abstract class kwCtrlSt
{
    protected sClass: string = this.constructor.name;

    protected constructor(
        protected src: kwStArr,
        protected dst: kwStVal,
        protected sState: string,  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        return true;
    }

    protected load(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        if (!kw.isString(this.sState))
        {
            console.error(log.errInit("page"));
            return false;
        }
        //console.info(this.sClass, "::load() sState is ", this.sState);

        if (kw.isNull(this.src))
        {
            console.error(this.sClass, "::load() src for [", this.sState, "] is invalid");
            return false;
        }

        const data: object = this.src.getFirst();
        if (kw.isNull(data))
        {
            console.error(this.sClass, "::load() data for [", this.sState, "] is invalid.");
            return false;
        }
        //console.info(this.sClass, "::load() data is ", data);

        const view: object = data[this.sState];
        if (kw.isNull(view))
        {
            console.error(this.sClass, "::load() view for [", this.sState, "] is not provided.");
            return false;
        }

        //console.info(this.sClass, "::load() view for [", this.sState, "] is [", view, "]");
        this.dst.val = view;

    }


}
