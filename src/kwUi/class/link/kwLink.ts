/**********************************************************************
 *
 * kwView/class/link/kwLink.ts
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
import {kwLinkSrvc}        from "./kwLinkSrvc";
import {kwLinkType}        from "./kwLinkType";
//@formatter:on


export class kwLink
{
    sUrl: string;
    sIcon: string;

    constructor(private type: kwLinkType)
    {
        //console.log("kwLink::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwLink::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwLink::create() type is insUrlid.");
            return false;
        }
        //console.info("kwLink::create() type is [", this.type, "]");

        const sUrl: string = this.type.sUrl;
        if (!kw.isString(sUrl))
        {
            //console.info("kwLink::create() sUrl is insUrlid.");
            return false;
        }
        //console.info("kwLink::create() sUrl is [", sUrl, "]");
        this.sUrl = sUrl;

        const sIcon: string = this.type.sIcon;
        if (!kw.isString(sIcon))
        {
            //console.info("kwLink::create() sIcon is insIconid.");
            return false;
        }
        //console.info("kwLink::create() sIcon is [", sIcon, "]");
        this.sIcon = sIcon;

        return true;
    }

    getIcon(): string{
        return this.sIcon;
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
        return kw.is(obj, kwLink)
    }

}

