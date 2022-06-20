
/**********************************************************************
 *
 * kw/class/lang/kwLang.ts
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
import {kw }                 from "@kw/kw";

import {kwLangType }         from "./kwLangType";
//@formatter:on

export class kwLang
{
    protected sClass: string = this.constructor.name;

    sCode: string;
    sName: string;
    sNative: string;

    nId: number;

    constructor(private type: kwLangType)
    {
        //console.log("kwLang::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwLang::init() called.");

        if (kw.isNull(this.type))
        {
            console.error("kwLang::init() type is not valid.");
            return false;
        }
        //console.info("kwLang::init() type is ", this.type);

        const nId: number = this.type.nId;
        if (!kw.isNumber(nId))
        {
            console.error("kwLang::init() nId is not valid.");
            return false;
        }
        //console.info("kwLang::init() nId is ", nId);
        this.nId = nId;

        const sCode: string = this.type.sCode;
        if (!kw.isString(sCode))
        {
            console.error("kwLang::init() sCode is not valid.");
            return false;
        }
        //console.info("kwLang::init() sCode is ", sCode);
        this.sCode = sCode;

        const sName: string = this.type.sName;
        if (!kw.isString(sName))
        {
            console.error("kwLang::init() sCode is not valid.");
            return false;
        }
        //console.info("kwLang::init() sName is ", sName);
        this.sName = sName;

        return true;
    }

    getId()
    {
        return this.nId;
    }

    getCode()
    {
        return this.sCode;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwLang)
    }

}
