/**********************************************************************
 *
 * kw/class/auth/kwAuth.ts
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

import {kwAuthEnum }         from "./kwAuthEnum";
import {kwAuthSrvc }         from "./kwAuthSrvc";
//@formatter:on


export class kwAuth
{

    constructor(private nType: kwAuthEnum)
    {
        //console.log("kwAuth::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwAuth::init() is called.");

        if (!kwAuthSrvc.in(this.nType))
        {
            console.error("kwAuth::init() nType is invalid.");
            return false;
        }
        //console.info("kwAuth::init() nType is ", this.nType);

        return true;
    }

    get(): kwAuthEnum
    {
        return this.nType;
    }

    isAuth0(): boolean
    {

        return (this.nType === kwAuthEnum.auth0);
    }

    isFirebase(): boolean
    {

        return (this.nType === kwAuthEnum.firebase);
    }

    isUserPwd(): boolean
    {

        return (this.nType === kwAuthEnum.userpwd);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwAuthEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAuth)
    }

}

