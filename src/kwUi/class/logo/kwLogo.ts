/**********************************************************************
 *
 * kwView/class/logo/kwLogo.ts
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
import {kwLogoSrvc}        from "./kwLogoSrvc";
import {kwLogoType}        from "./kwLogoType";
//@formatter:on


const sALT_TAG: string = "sAlt";
const sURL_TAG: string = "sUrl";


export class kwLogo
{
    sAlt: string;
    sUrl: string;

    constructor(  private type: kwLogoType  )
    {
        //console.log("kwLogo::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwLogo::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwLogo::create() type is invalid.");
            return false;
        }
        //console.info("kwLogo::create() type is [", this.type, "]");

        const sAlt: string = this.type[sALT_TAG];
        if (kw.isString(sAlt))
        {
            //console.info("kwLogo::create() sAlt is insAltid.");
            return false;
        }
        //console.info("kwLogo::create() sAlt is [", sAlt, "]");
        this.sAlt = sAlt;

        const sUrl: string = this.type[sALT_TAG];
        if (kw.isString(sUrl))
        {
            //console.info("kwLogo::create() sUrl is invalid.");
            return false;
        }
        //console.info("kwLogo::create() sUrl is [", sUrl, "]");
        this.sUrl = sUrl;

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
        return kw.is(obj, kwLogo)
    }

}

