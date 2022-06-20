/**********************************************************************
 *
 * kw/class/port/kwPort.ts
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
import {kw }                            from "@kw/kw";

import {kwPortSrvc }                 from "./kwPortSrvc";
import {kwPortType }                 from "./kwPortType";
//@formatter:on


export class kwPort
{
    nPort: number;

    constructor(private type: kwPortType)
    {
        //console.log("kwPort::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwPort::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwPort::init() type is invalid.");
            return false;
        }
        //console.info("kwPort::init() type is ", this.type);

        const nPort: number = this.type.nPort;
        if (!kw.isNumber(nPort))
        {
            console.error("kwPort::init() nPort is invalid.");
            return false;
        }
        this.nPort = nPort;

        return true;
    }

    getPort(): number
    {
        return this.nPort;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwPort)
    }
}

