/**********************************************************************
 *
 * kw/class/rec/kwRec.ts
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
import {kwRecSrvc }                from "./kwRecSrvc";
//@formatter:on


export class kwRec
{

    constructor()
    {
        //console.log("kwRec::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwRec::init() is called.");
        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwRec)
    }

}

