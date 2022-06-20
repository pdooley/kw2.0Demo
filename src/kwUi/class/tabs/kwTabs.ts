/**********************************************************************
 *
 * kwView/class/tabs/kwTabs.ts
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
import {kw}             from "@kw/kw";
import {kwTabType}      from "../tab/kwTabType";
//@formatter:on

export class kwTabs
{
    constructor(private list: kwTabType[])
    {
        //console.log("kwTabs::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwTabs::init() called.");

        if (!kw.isArray(this.list))
        {
            console.error("kwTabs::init() list is invalid.");
            return false;
        }
        //console.info("kwTabs::init() list ", this.list);

        return true;
    }

    getList(): kwTabType[]
    {
        return this.list;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTabs)
    }
}

