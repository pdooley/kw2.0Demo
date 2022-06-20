/**********************************************************************
 *
 * kwView/class/links/kwLinks.ts
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
import {kw}            from "@kw/kw";

//@formatter:on


const sLINKS: string = "links";


export class kwLinks
{

    info: object[];

    constructor(private data: object)
    {
        //console.log("kwLinks::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwLinks::init() called.");

        if (kw.isNull(this.data))
        {
            console.error("kwLinks::init() data is invalid.");
            return false;
        }
        //console.info("kwLinks::init() data ", this.data);


        const info = this.data[sLINKS];
        if (kw.isNull(info))
        {
            console.error("kwLinks::init() info is invalid.");
            return false;
        }
        //console.info("kwLinks::init() info ", info);
        this.info = info;

        return true;
    }

    getInfo(): object[]
    {
        return this.info;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwLinks)
    }
}

