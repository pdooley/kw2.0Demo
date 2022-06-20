
/**********************************************************************
 *
 * kw/class/mdl/kwMdlSub.ts
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
import {kwMdl }                 from "./kwMdl";
import {kweMdl }                from "./kweMdl";
import {kwtMdl }                from "./kwtMdl";
import {kwParam }               from "@kwClass/param/kwParam";
import {kwParamType }           from "@kwClass/param/kwParamType";
import {kwParamSub }            from "@kwClass/param/kwParamSub";
//@formatter:on

export class kwMdlSub extends kwMdl
{

    constructor(type: kwtMdl)
    {
        super(kweMdl.sub, type);
        //console.log("kwMdlSub::constructor() is called.");
    }

    createParam(type: kwParamType): kwParam
    {
        //console.log("kwMdlSub::createParam() called.");
        if (kw.isNull(type))
        {
            console.error("kwMdlSub::createParam() type is invalid.");
            return;
        }
        //console.info("kwMdlSub::createParam() type is [", type, "]");

        const param: kwParam = new kwParamSub(type);
        if (!param.init())
        {
            console.error("kwMdlSub::createParam() error creating param.");
            return;
        }

        return param;
    }

}
