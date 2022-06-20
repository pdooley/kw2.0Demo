/**********************************************************************
 *
 * kwView/class/title/kwTitle.ts
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
import {kw}                        from "@kw/kw";
import {kwTitleSrvc}                from "./kwTitleSrvc";
import {kwTitleType}                from "./kwTitleType";
//@formatter:on


export class kwTitle
{
    sFirst: string;
    sSecond: string;
    sThird: string;

    nHeight: number;

    constructor(  private type: kwTitleType  )
    {
        //console.log("kwTitle::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwTitle::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwTitle::create() type is insFirstid.");
            return false;
        }
        //console.info("kwTitle::create() type is [", this.type, "]");

        const sFirst: string = this.type.sFirst;
        if (kw.isString(sFirst))
        {
            //console.info("kwTitle::create() sFirst is insFirstid.");
            return false;
        }
        //console.info("kwTitle::create() sFirst is [", sFirst, "]");
        this.sFirst = sFirst;

        const nHeight: number = this.type.nHeight;
        if (kw.isNumber(nHeight))
        {
            //console.info("kwTitle::create() nHeight is innHeightid.");
            return false;
        }
        //console.info("kwTitle::create() nHeight is [", nHeight, "]");
        this.nHeight = nHeight;

        const sSecond: string = this.type.sSecond;
        if (kw.isString(sSecond))
        {
            //console.info("kwTitle::create() sSecond is insSecondid.");
            return false;
        }
        //console.info("kwTitle::create() sSecond is [", sSecond, "]");
        this.sSecond = sSecond;

        const sThird: string = this.type.sThird;
        if (kw.isString(sThird))
        {
            //console.info("kwTitle::create() sThird is insThirdid.");
            return false;
        }
        //console.info("kwTitle::create() sThird is [", sThird, "]");
        this.sThird = sThird;
        return true;
    }

    getFirst(): string{
        return this.sFirst;
    }

    getHeight(): number{
        return this.nHeight;
    }

    getSecond(): string{
        return this.sSecond;
    }

    getThird(): string{
        return this.sThird;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTitle)
    }

}

