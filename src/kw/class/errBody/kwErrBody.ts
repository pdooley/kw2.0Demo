/**********************************************************************
 *
 * kw/class/acts/kwActs.ts
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

import {kwErrBodyRepSrvc }             from "@kwClass/errBodyRep/kwErrBodyRepSrvc";
import {kwErrBodyRepType }             from "@kwClass/errBodyRep/kwErrBodyRepType";
import {kwErrBodySrvc }                from "./kwErrBodySrvc";
import {kwErrBodyType }                from "./kwErrBodyType";
import {kwErrBodyRep }                 from "@kwClass/errBodyRep/kwErrBodyRep";
//@formatter:on



export class kwErrBody
{

    report: kwErrBodyRep;

    sCall: string;
    sException: string;
    sText: string;

    bSuccess: boolean;

    constructor(private type: kwErrBodyType)
    {
        //console.log("kwErrBody::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwErrBody::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwErrBody::init() type is invalid.");
            return false;
        }

        const sCall: string = this.type.call;
        if (!kw.isString(sCall))
        {
            console.error("kwErrBody::init() sCall is invalid.");
            return false;
        }
        //console.info("kwErrBody::init() sCall is [", sCall, "]");
        this.sCall = sCall;

        const sException: string = this.type.exception;
        if (!kw.isString(sException))
        {
            console.error("kwErrBody::init() sException is invalid.");
            return false;
        }
        //console.info("kwErrBody::init() sException is [", sException, "]");
        this.sException = sException;

        const sText: string = this.type.text;
        if (!kw.isString(sText))
        {
            console.error("kwErrBody::init() sText is invalid.");
            return false;
        }
        //console.info("kwErrBody::init() sText is [", sText, "]");
        this.sText = sText;

        const bSuccess: boolean = this.type.success;
        if (!kw.isBoolean(bSuccess))
        {
            console.error("kwErrBody::init() bSuccess is invalid.");
            return false;
        }
        //console.info("kwErrBody::init() bSuccess is [", bSuccess, "]");
        this.bSuccess = bSuccess;

        if (!this.createReport())
        {
            console.error("kwErrBody::init() error creating report.");
            return false;
        }

        return true;
    }

    createReport(): boolean
    {
        //console.log("kwErrBody::createReport() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwErrBody::createReport() type is invalid.");
            return false;
        }

        const type: kwErrBodyRepType = this.type.report;
        if (kw.isNull(type))
        {
            console.error("kwErrBody::createReport() type is invalid.");
            return false;
        }
        //console.info("kwErrBody::createReport() type is [", type, "]");

        const report = new kwErrBodyRep(type);
        if (!report.init())
        {
            console.error("kwErrBody::createReport() error creating report.");
            return false;
        }
        this.report = report;

        return true;
    }

    getCall(): string {
        return this.sCall;
    }

    getException(): string{
        return this.sException;
    }

    getText(): string{
        return this.sText;
    }

    getReport(): kwErrBodyRep{
        return this.report;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwErrBody)
    }
}

