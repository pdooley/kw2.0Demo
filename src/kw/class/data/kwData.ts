
/**********************************************************************
 *
 * kw/class/data/kwData.ts
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

import {kwDataEnum }                from "./kwDataEnum";
import {kwDataSrvc }                from "./kwDataSrvc";
//@formatter:on

export class kwData
{

    constructor( private nType: kwDataEnum )
    {
        //console.log("kwData::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwData::init() is called.");

        if (!kwDataSrvc.in(this.nType))
        {
            console.error("kwCol::init() nType is invalid.");
            return false;
        }
        //console.info("kwCol::init() nType is ", this.nType);

        return true;
    }

    isArray(): boolean
    {
        return (this.nType === kwDataEnum.array);
    }

    isBoolean(): boolean
    {
        return (this.nType === kwDataEnum.boolean);
    }

    isNull(): boolean
    {
        return (this.nType === kwDataEnum.null);
    }

    isNumber(): boolean
    {
        return (this.nType === kwDataEnum.number);
    }

    isString(): boolean
    {
        return (this.nType === kwDataEnum.string);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwDataEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwData)
    }

}
