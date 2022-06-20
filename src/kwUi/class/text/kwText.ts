/**********************************************************************
 *
 * kwView/class/text/kwText.ts
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
import {kwTextSrvc}                from "./kwTextSrvc";
import {kwTextType}                from "./kwTextType";
//@formatter:on


export class kwText
{
    sUrl: string;
    sAlt: string;

    constructor(private type: kwTextType)
    {
        //console.log("kwText::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwText::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwText::create() type is insUrlid.");
            return false;
        }
        //console.info("kwText::create() type is [", this.type, "]");

        const sUrl: string = this.type.sUrl;
        if (!kw.isString(sUrl))
        {
            //console.info("kwText::create() sUrl is insUrlid.");
            return false;
        }
        //console.info("kwText::create() sUrl is [", sUrl, "]");
        this.sUrl = sUrl;

        const sAlt: string = this.type.sAlt;
        if (!kw.isString(sAlt))
        {
            //console.info("kwText::create() sAlt is insAltid.");
            return false;
        }
        //console.info("kwText::create() sAlt is [", sAlt, "]");
        this.sAlt = sAlt;

        return true;
    }

    getAlt(): string{
        return this.sAlt;
    }

    getUrl(): string{
        return this.sUrl;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwText)
    }

}

