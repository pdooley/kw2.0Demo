/**********************************************************************
 *
 * kw/class/StatBs/kwStatusBs.ts
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
import {kw }                    from "@kw/kw";
import {kwLog }                from "@kw/kwLog";
import {kwStatus}                 from "@kwClass/status/kwStatus";
import {kwStatusBsEnum }          from "./kwStatusBsEnum";
import {kwStatusBsSrvc }          from "./kwStatusBsSrvc";
//@formatter:on

/*
    init = 0,
    trace,
    base,
    complete,
*/

export abstract class kwStatusBs extends kwStatus
{
    protected sClass: string = this.constructor.name;


    constructor(
        nType: kwStatusBsEnum )
    {
        super(nType);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public abstract canTransition(prev: kwStatusBs): boolean;

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        return super.init();
    }

    isBase(): boolean
    {
        return (this.nType === kwStatusBsEnum.base);
    }

    isComplete(): boolean
    {
        return (this.nType === kwStatusBsEnum.complete);
    }

    isTrace(): boolean
    {
        return (this.nType === kwStatusBsEnum.trace);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwStatusBsEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwStatusBs)
    }
}
