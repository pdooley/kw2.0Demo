/**********************************************************************
 *
 * kw/class/err/kwErr.ts
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
import {kw }                           from "@kw/kw";

import {kwErrBody }                    from "@kwClass/errBody/kwErrBody";
import {kwErrSrvc }                    from "./kwErrSrvc";
import {kwErrType }                    from "./kwErrType"; import {kwErrBodyType } from "@kwClass/errBody/kwErrBodyType"; import {kwErrBodySrvc } from "@kwClass/errBody/kwErrBodySrvc";
//@formatter:on


export class kwErr
{

    body: kwErrBody;

    sStatusText: string;
    sUrl: string;

    nStatus: number;
    nType: number;

    bOk: boolean;

    constructor(private type: kwErrType)
    {
        //console.log("kwErr::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwErr::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwErr::init() type is invalid.");
            return false;
        }

        const sStatusText: string = this.type.statusText;
        if (!kw.isString(sStatusText))
        {
            console.error("kwErr::init() sStatusText is invalid.");
            return false;
        }
        //console.info("kwErr::init() sStatusText is [", sStatusText, "]");
        this.sStatusText = sStatusText;

        const sUrl: string = this.type.url;
        if (!kw.isString(sUrl))
        {
            console.error("kwErr::init() sUrl is invalid.");
            return false;
        }
        //console.info("kwErr::init() sUrl is [", sUrl, "]");
        this.sUrl = sUrl;

        const nStatus: number = this.type.status;
        if (!kw.isNumber(nStatus))
        {
            console.error("kwErr::init() nStatus is invalid.");
            return false;
        }
        //console.info("kwErr::init() nStatus is [", nStatus, "]");
        this.nStatus = nStatus;

        const nType: number = this.type.type;
        if (!kw.isNumber(nType))
        {
            console.error("kwErr::init() nType is invalid.");
            return false;
        }
        //console.info("kwErr::init() nType is [", nType, "]");
        this.nType = nType;

        const bOk: boolean = this.type.ok;
        if (!kw.isBoolean(bOk))
        {
            console.error("kwErr::init() bOk is invalid.");
            return false;
        }
        //console.info("kwErr::init() bOk is [", bOk, "]");
        this.bOk = bOk;

        if (!this.createBody())
        {
            console.error("kwErr::init() error creating body.");
            return false;
        }

        return true;
    }

    createBody(): boolean
    {
        //console.log("kwErr::createBody() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwErr::createBody() type is invalid.");
            return false;
        }

        const type: kwErrBodyType = this.type._body;
        if (kw.isNull(type))
        {
            console.error("kwErr::createBody() type is invalid.");
            return false;
        }
        //console.info("kwErr::createBody() type is [", type, "]");

        const body = new kwErrBody(type);
        if (!body.init())
        {
            console.error("kwErr::createBody() error creating body.");
            return false;
        }
        this.body = body;

        return true;
    }

    getBody(): kwErrBody{
        return this.body;
    }

    getUrl(): string{
        return this.sUrl;
    }

    getStatus(): number{
        return this.nStatus;
    }

    getType(): number{
        return this.nType;
    }

    isOk(): boolean{
        return this.bOk;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwErr)
    }

}

