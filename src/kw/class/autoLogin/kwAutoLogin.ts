/**********************************************************************
 *
 * kw/class/autoLogin/kwAutoLogin.tse.ts
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
import {kw }                            from "@kw/kw";
import {kwAutoLoginSrvc }               from "./kwAutoLoginSrvc";
import {kwtAutoLogin }                  from "./kwtAutoLogin";

const sProp = "autoLogin";
//@formatter:on


export class kwAutoLogin
{
    private _bVal: boolean;

    constructor(private info: object)
    {
        //console.log("kwFirebase::constructor() is called.");
    }


    public get bVal(): boolean { return this._bVal;}


    init(): boolean
    {
        //console.log("kwFirebase::init() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwFirebase::create() info is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() info is [", this.info, "]");

        const autoLogin: kwtAutoLogin = this.info[sProp];
        if (kw.isNull(autoLogin))
        {
            console.error("kwFirebase::create() autoLogin is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() autoLogin is [", autoLogin, "]");

        const bVal: boolean = autoLogin.bVal;
        if (!kw.isBoolean(bVal))
        {
            //console.info("kwFirebase::create() bVal is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() bVal is [", bVal, "]");
        this._bVal = bVal;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAutoLogin)
    }

}

