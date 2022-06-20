/**********************************************************************
 *
 * kwView/class/Group/kwGroup.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@Groupatter:off
import {kw}                from "@kw/kw";
import {kwGroupEnum}       from "./kwGroupEnum";
import {kwGroupSrvc}       from "./kwGroupSrvc";
import {kwLog}              from "@kw/kwLog";
//@Groupatter:on


export abstract class kwGroup
{

    protected sClass: string = this.constructor.name;

    protected constructor(
        private nType: kwGroupEnum )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kwGroupSrvc.in(this.nType))
        {
            console.error("kwAct::init() nType is invalid.");
            return false;
        }
        //console.info("kwGroup::init() nType is ", this.nType);

        return true;
    }

    isAdd(): boolean
    {
        return (this.nType === kwGroupEnum.add);
    }

    isEdit(): boolean
    {
        return (this.nType === kwGroupEnum.edit);
    }

    isView(): boolean
    {
        return (this.nType === kwGroupEnum.view);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwGroupEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwGroup)
    }
}
