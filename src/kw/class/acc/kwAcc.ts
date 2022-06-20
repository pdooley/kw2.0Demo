/**********************************************************************
 *
 * kw/class/acc/kwAcc.ts
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
import {kwAccEnum }                from "./kwAccEnum";
import {kwAccSrvc }                from "./kwAccSrvc";
import {kwLog} from "@kw/kwLog";
//@formatter:on


export class kwAcc
{
    protected sClass: string = this.constructor.name;


    constructor(private nType: kwAccEnum)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (!kwAccSrvc.in(this.nType))
        {
            console.error(log.invalid("nType"));
            return false;
        }
        //console.info(log.isObj("nType"), this.nType);

        return true;
    }

    isBoth(): boolean
    {
        return (this.nType === kwAccEnum.both);
    }

    isClient(): boolean
    {
        return (this.nType === kwAccEnum.client);
    }

    isStaff(): boolean
    {
        return (this.nType === kwAccEnum.staff);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwAccEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAcc)
    }

}
