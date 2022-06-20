/**********************************************************************
 *
 * kw/class/cred/kwFirebasebase.ts
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
import {kwFirebaseSrvc }            from "./kwFirebaseSrvc";
import {kwtFirebase }                from "./kwtFirebase";

const sProp = "credentials";
//@formatter:on


export class kwFirebase
{
    sUserName: string;
    sPassword: string;

    constructor(private info: object)
    {
        //console.log("kwFirebase::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwFirebase::init() is called.");

        if (kw.isNull(this.info))
        {
            console.error("kwFirebase::create() info is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() info is [", this.info, "]");

        const cred: kwtFirebase = this.info[sProp];
        if (kw.isNull(cred))
        {
            console.error("kwFirebase::create() cred is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() cred is [", cred, "]");

        const sUserName: string = cred.sUserName;
        if (!kw.isString(sUserName))
        {
            //console.info("kwFirebase::create() sUserName is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() sUserName is [", sUserName, "]");
        this.sUserName = sUserName;

        const sPassword: string = cred.sPassword;
        if (!kw.isString(sPassword))
        {
            console.error("kwFirebase::create() sPassword is invalid.");
            return false;
        }
        //console.info("kwFirebase::create() sPassword is [", sPassword, "]");
        this.sPassword = sPassword;

        return true;
    }

    getUserName(): string{
        return this.sUserName;
    }

    getPassword(): string{
        return this.sPassword;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFirebase)
    }

}

