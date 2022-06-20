/**********************************************************************
 *
 * kw/class/id/kwId.ts
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

import {kwIdSrvc }                 from "./kwIdSrvc";
import {kwIdType }                 from "./kwIdType";
//@formatter:on


export class kwId
{
    nId: number;

    constructor(private type: kwIdType)
    {
        //console.log("kwId::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwId::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwId::init() type is invalid.");
            return false;
        }
        //console.info("kwId::init() type is ", this.type);

        const nId: number = this.type.nId;
        if (!kw.isNumber(nId))
        {
            console.error("kwId::init() nId is invalid.");
            return false;
        }
        this.nId = nId;

        return true;
    }

    getId(): number
    {
        return this.nId;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwId)
    }
}

