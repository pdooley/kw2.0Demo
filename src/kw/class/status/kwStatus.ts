/**********************************************************************
 *
 * kw/class/status/kwStatus.ts
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
import {kwLog }                 from "@kw/kwLog";
//@formatter:on

export abstract class kwStatus
{
    protected sClass: string = this.constructor.name;

    protected constructor(
        protected nType: number )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public abstract canTransition(prev: kwStatus): boolean;

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isNumber(this.nType))
        {
            console.error(log.invalid("nType"));
            return false;
        }
        //console.info(log.is("nType", this.nType));

        return true;
    }

    public getType(): number
    {
        return this.nType;
    }

    public isInit(): boolean
    {
        return (this.nType === 0);
    }

    public matches(nVal: number): boolean
    {
        return nVal === this.nType;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwStatus);
    }

}
