/**********************************************************************
 *
 * kwUi/class/status/kwUiStatus.ts
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
import {kw}                    from "@kw/kw";
import {kwLog}                 from "@kw/kwLog";
import {kwStatus}               from "@kwClass/status/kwStatus";
import {kwUiStatusEnum}        from "./kwUiStatusEnum";
//@formatter:on

/*
    init = 0,
    trace,
    base,
    complete,
*/

export abstract class kwUiStatus extends kwStatus
{
    protected sClass: string = this.constructor.name;


    constructor(
        nType: kwUiStatusEnum )
    {
        super(nType);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public abstract canTransition(prev: kwUiStatus): boolean;

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        return super.init();
    }

    isApp(): boolean
    {
        return (this.nType === kwUiStatusEnum.app);
    }

    isComplete(): boolean
    {
        return (this.nType === kwUiStatusEnum.complete);
    }

    isState(): boolean
    {
        return (this.nType === kwUiStatusEnum.state);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwUiStatusEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwUiStatus)
    }
}
