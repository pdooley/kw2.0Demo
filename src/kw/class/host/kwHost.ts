/**********************************************************************
 *
 * kw/class/host/kwHost.ts
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
import {kw }                        from "@kw/kw";

import {kwHostSrvc }               from "./kwHostSrvc";
import {kwHostType }               from "./kwHostType";
//@formatter:on


export class kwHost
{
    sHost: string;

    constructor(private type: kwHostType)
    {
        //console.log("kwHost::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwHost::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwHost::init() type is invalid.");
            return false;
        }
        //console.info("kwHost::init() type is ", this.type);

        const sHost: string = this.type.sHost;
        if (!kw.isString(sHost))
        {
            console.error("kwHost::init() sHost is invalid.");
            return false;
        }
        this.sHost = sHost;

        return true;
    }

    getHost(): string
    {
        return this.sHost;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwHost)
    }
}

