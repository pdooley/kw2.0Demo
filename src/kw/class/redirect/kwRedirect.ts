/**********************************************************************
 *
 * kw/class/redirect/kwRedirect.tse.ts
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
import {kw }                        from "@kw/kw";
import {kwRedirectSrvc }            from "./kwRedirectSrvc";
import {kwtRedirect }               from "./kwtRedirect";

const sProp = "redirect";
//@formatter:on


export class kwRedirect
{
    private _sVal: string;

    constructor(private info: object)
    {
        //console.log("kwFirebase::constructor() is called.");
    }


    public get sVal(): string { return this._sVal;}


    init(): boolean
    {
        //console.log("kwFirebase::init() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwFirebase::create() info is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() info is [", this.info, "]");

        const redirect: kwtRedirect = this.info[sProp];
        if (kw.isNull(redirect))
        {
            console.error("kwFirebase::create() redirect is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() redirect is [", redirect, "]");

        const sVal: string = redirect.sVal;
        if (!kw.isString(sVal))
        {
            //console.info("kwFirebase::create() sVal is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() sVal is [", sVal, "]");
        this._sVal = sVal;
        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwRedirect)
    }

}

