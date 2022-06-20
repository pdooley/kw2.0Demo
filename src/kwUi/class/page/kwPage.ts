/**********************************************************************
 *
 * kwView/class/page/kwPage.ts
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
import {kw}                 from "@kw/kw";
//@formatter:on


const sTAG: string = "page";

export class kwPage
{

    page: object;

    info: object;

    constructor( private data: object )
    {
        //console.log('kwPage::constructor() called.');
    }

    init(): boolean
    {
        //console.log("kwPage::init() called.");

        if (kw.isNull(this.data))
        {
            console.error('kwPage::init() data is invalid.');
            return false;
        }
        //console.info("kwPage::init() data is [", this.data, "]");


        const first = this.data[0];
        if (kw.isNull(first))
        {
            console.error('kwPage::init() first is invalid.');
            return false;
        }
        //console.info("kwPage::init() first is [", first, "]");


        const info = first[sTAG];
        if (kw.isNull(info))
        {
              console.error('kwPage::init() info is invalid.');
             return false;
         }
        //console.info("kwPage::init() info is [", info, "]");
        this.info = info;

        return true;
    }

     getInfo(): object
    {
        return this.info;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwPage)
    }


}
