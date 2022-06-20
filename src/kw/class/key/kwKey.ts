/**********************************************************************
 *
 * kw/class/key/kwKey.ts
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
import {kwKeySrvc }                from "./kwKeySrvc";
import {kwKeyType }                from "./kwKeyType";
//@formatter:on


export class kwKey
{
    protected sClass: string = this.constructor.name;

    val: any;

    constructor(  private type: kwKeyType  )
    {
        //console.log("kwKey::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwKey::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwKey::create() type is invalid.");
            return false;
        }
        //console.info("kwKey::create() type is [", this.type, "]");

        const val: any = this.type.val;
        if (kw.isNull(val))
        {
            //console.info("kwKey::create() val is invalid.");
            return false;
        }
        //console.info("kwKey::create() val is [", val, "]");
        this.val = val;
        return true;
    }

    getVal(): string{
        return this.val;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwKey)
    }

}

