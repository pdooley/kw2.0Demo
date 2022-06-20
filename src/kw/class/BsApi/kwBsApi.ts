/**********************************************************************
 *
 * kw/class/BsApi/kwBsApi.ts
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
import {kw }                       from "@kw/kw";
import {kwApi }                    from "@kwClass/api/kwApi";
import {kwApiType }                from "@kwClass/api/kwApiType";
import {kwBs }                     from "@kwClass/Bs/kwBs";
//@formatter:on


export class kwBsApi extends kwApi
{
    constructor(
        private BS: kwBs,
        type: kwApiType )
    {
        super(type)
        //console.log("kwBsApi::constructor() called");
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBsApi)
    }

}

