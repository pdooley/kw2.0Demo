
/**********************************************************************
 *
 * kw/class/token/kwToken.ts
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

import {kw }                from "@kw/kw";
import {kwTokenEnum }       from "./kwTokenEnum";
import {kwTokenSrvc }       from "./kwTokenSrvc";
import {kwTokens}           from "../tokens/kwTokens";

export class kwToken
{

    sTokenFull: string;

    constructor(    private nType: kwTokenEnum,
                    protected tokens: kwTokens  )
    {
        //console.log("kwSignin::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwSignin::init() called.");

        if (!kwTokenSrvc.in(this.nType))
        {
            console.error("kwSignin::init() nType is invalid.");
            return false;
        }
        //console.info("kwSignin::init() nType is ", this.nType);

        if (kw.isNull(this.tokens))
        {
            console.error("kwSignin::init() tokens is invalid.");
            return false;
        }
        //console.info("kwSignin::init() tokens is ", this.tokens);

        return this.createToken();
    }

    createToken(): boolean
    {
        //console.log("kwSignin::createToken() called.");

        if (!kwTokenSrvc.in(this.nType))
        {
            console.error("kwSignin::createToken() nType is invalid.");
            return false;
        }
        //console.info("kwSignin::createToken() nType is ", this.nType);

        if (kw.isNull(this.tokens))
        {
            console.error("kwSignin::createToken() tokens is invalid.");
            return false;
        }

        const sType: string = this.toString();
        if (!kw.isString(sType))
        {
            console.error("kwSignin::createToken() sType is invalid.");
            return false;
        }
        //console.info("kwSignin::createToken() sType is ", sType);

        const token: object = this.tokens.getByCode(sType);
        if (kw.isNull(token))
        {
            console.error("kwSignin::createToken() token is invalid.");
            return false;
        }
        //console.info("kwSignin::createToken() token is ", token);

        const sToken: string = token["sVal"];
        if (!kw.isString(sToken))
        {
            console.error("kwSignin::createToken() sToken is invalid.");
            return false;
        }
        //console.info("kwSignin::createToken() sToken is ", sToken);

        const sTokenFull: string = sType + " "  + sToken;
        //console.info("kwSignin::createToken() sTokenFull is ", sTokenFull);

        this.sTokenFull = sTokenFull;
        return true;
    }

    getToken(): string
    {
        return this.sTokenFull;
    }

    isAuth0(): boolean
    {
        return (this.nType === kwTokenEnum.auth0);
    }

    isOrg(): boolean
    {
        return (this.nType === kwTokenEnum.org);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwTokenEnum);
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwToken);
    }

}
