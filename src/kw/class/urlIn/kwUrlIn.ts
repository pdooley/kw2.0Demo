/**********************************************************************
 *
 * kw/class/urlin/kwUrlIn.ts
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
import {kwUrlInSrvc }            from "./kwUrlInSrvc";
import {kwUrlInType }            from "./kwUrlInType";
//@formatter:on

export class kwUrlIn
{

    sApi: string;
    sHost: string;
    sMode: string;
    nPort: number;

    constructor(private type: kwUrlInType)
    {
        //console.log("kwUrlIn::constructor() is called.");
    }

    init()
    {
        //console.log("kwUrlIn::init() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwUrlIn::init() action is invalid");
            return false;
        }

        const sApi: string = this.type.sApi;
        if (!kw.isString(sApi))
        {
            console.error("kwUrlIn::init() sApi is invalid");
            return false;
        }
        //console.info("kwUrlIn::init() sApi is [", sApi, "]");
        this.sApi = sApi;

        const sHost: string = this.type.sHost;
        if (!kw.isString(sHost))
        {
            console.error("kwUrlIn::init() sHost is invalid");
            return false;
        }
        //console.info("kwUrlIn::init() sHost is [", sHost, "]");
        this.sHost = sHost;

        const sMode: string = this.type.sMode;
        if (!kw.isString(sMode))
        {
            console.error("kwUrlIn::init() sMode is invalid");
            return false;
        }
        //console.info("kwUrlIn::init() sMode is [", sMode, "]");
        this.sMode = sMode;

        const nPort: number = this.type.nPort;
        if (!kw.isNumber(nPort))
        {
            console.error("kwUrlIn::init() nPort is invalid");
            return false;
        }
        //console.info("kwUrlIn::init() nPort is [", nPort, "]");
        this.nPort = nPort;

        return true;
    }

    getApi(): string
    {
        return this.sApi;
    }

    getHost(): string
    {
        return this.sHost;
    }

    getMode(): string
    {
        return this.sMode;
    }

    getPort(): number
    {
        return this.nPort;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwUrlIn)
    }

}
