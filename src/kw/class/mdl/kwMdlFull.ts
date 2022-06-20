
/**********************************************************************
 *
 * kw/class/mdl/kwMdlFull.ts
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
import {kw }               from "@kw/kw";
import {kwMap }            from "@kwClass/kwMap";
import {kwMdl }            from "./kwMdl";
import {kweMdl }           from "./kweMdl";
import {kwtMdl }           from "./kwtMdl";
import {kwParam }          from "@kwClass/param/kwParam";
import {kwParamFull }      from "@kwClass/param/kwParamFull";
import {kwParamType }      from "@kwClass/param/kwParamType";
//@formatter:on

export class kwMdlFull extends kwMdl
{

    constructor(
        type: kwtMdl,
        private currs: kwMap,
        private Tzs: kwMap,
        private langs: kwMap    )
    {
        super(kweMdl.full, type);
        //console.log("kwMdlFull::constructor() is called.");
    }

    createParam(type: kwParamType): kwParam
    {
        //console.log("classMdlFull::createParam() called.");
        if (kw.isNull(type))
        {
            console.error("classMdlFull::createParam() type is invalid.");
            return;
        }
        //console.info("classMdlFull::createParam() type is [", type, "]");

        if (!kwMap.is(this.currs))
        {
            console.error("classMdlFull::createParam() currs is invalid.");
            return;
        }
        //console.info("classMdlFull::createParam() currs is [", this.currs, "]");

        if (!kwMap.is(this.langs))
        {
            console.error("classMdlFull::createParam() langs is invalid.");
            return;
        }
        //console.info("classMdlFull::createParam() langs is [", this.langs, "]");

        if (!kwMap.is(this.Tzs))
        {
            console.error("classMdlFull::createParam() Tzs is invalid.");
            return;
        }
        //console.info("classMdlFull::createParam() Tzs is [", this.Tzs, "]");

        const param: kwParam = new kwParamFull(
            type,
            this.currs,
            this.langs,
            this.Tzs);

        if (!param.init())
        {
            console.error("classMdlFull::createParam() error creating param.");
            return;
        }

        return param;
    }

}
