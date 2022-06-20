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

import {kwErrBodyRepSrvc }             from "./kwErrBodyRepSrvc";
import {kwErrBodyRepType }             from "./kwErrBodyRepType";
//@formatter:on



export class kwErrBodyRep
{

    report: kwErrBodyRepType;

    sCall: string;
    sException: string;
    sText: string;

    bSuccess: boolean;

    constructor(private type: kwErrBodyRepType)
    {
        //console.log("kwErrBodyRep::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwErrBodyRep::init() is called.");

        if (kw.isNull(this.type))
        {
            console.error("kwErrBodyRep::init() type is invalid.");
            return false;
        }

        const sCall: string = this.type.call;
        if (!kw.isString(sCall))
        {
            console.error("kwErrBodyRep::init() sCall is invalid.");
            return false;
        }
        //console.info("kwErrBodyRep::init() sCall is [", sCall, "]");
        this.sCall = sCall;

        const sException: string = this.type.exception;
        if (!kw.isString(sException))
        {
            console.error("kwErrBodyRep::init() sException is invalid.");
            return false;
        }
        //console.info("kwErrBodyRep::init() sException is [", sException, "]");
        this.sException = sException;

        const bSuccess: boolean = this.type.success;
        if (!kw.isBoolean(bSuccess))
        {
            console.error("kwErrBodyRep::init() bSuccess is invalid.");
            return false;
        }
        //console.info("kwErrBodyRep::init() bSuccess is [", bSuccess, "]");
        this.bSuccess = bSuccess;

        return true;
    }

    getCall(): string {
        return this.sCall;
    }

    getException(): string{
        return this.sException;
    }

    getSuccess(): boolean{
        return this.bSuccess;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwErrBodyRep)
    }
}

