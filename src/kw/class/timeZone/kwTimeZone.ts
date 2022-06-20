
/**********************************************************************
 *
 * kw/class/timeZone/kwBsTimeZone.ts
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

import {kwTimeZoneType }                from "./kwTimeZoneType";
//@formatter:on

export class kwBsTimeZone
{

    nId: number;
    sCode: string;
    sName: string;

    constructor( private type: kwTimeZoneType )
    {
        //console.log("kwBsTimeZone::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwBsTimeZone::init() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwBsTimeZone::init() type is invalid.");
            return false;
        }
        //console.info("kwBsTimeZone::init() type is [", this.type, "]");

        const nId = this.type.nId;
        if (!kw.isNumber(nId))
        {
            console.error("kwBsTimeZone::init() nId is invalid");
            return false;
        }
        //console.info("kwBsTimeZone::init() nId is [", nId, "]");
        this.nId = nId;

        const sCode = this.type.sCode;
        if (!kw.isString(sCode))
        {
            console.error("kwBsTimeZone::init() sCode is invalid");
            return false;
        }
        //console.info("kwBsTimeZone::init() sCode is [", sCode, "]");
        this.sCode = sCode;

        const sName = this.type.sName;
        if (!kw.isString(sName))
        {
            console.error("kwBsTimeZone::init() sName is invalid");
            return false;
        }
        //console.info("kwBsTimeZone::init() sName is [", sName, "]");
        this.sName = sName;

        return true;
    }

    getId(): number
    {
        return this.nId;
    }

    getCode(): string
    {
        return this.sCode;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBsTimeZone)
    }

}
