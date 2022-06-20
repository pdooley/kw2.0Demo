
/**********************************************************************
 *
 * kwFb/class/token/kwFbToken.tss
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

import {kw}                        from "@kw/kw";


const sTOKEN : string  = "h";
const sTOKEN_ID : string  = "b";
const sTOKEN_REFRESH : string  = "a";

//@formatter:on


export class kwFbToken
{

    private sToken : string;

    constructor( private user : object )
    {
        //console.log("kwFbToken::constructor() is called.");
    }

    public init(): boolean
    {
        //console.log("kwFbToken::init() called.");

        if (kw.isNull(this.user))
        {
            console.error("kwFbToken::init() user is invalid.");
            return false;
        }
        //console.info("kwFbToken::init() user is ", this.user);

        const tk: string = this.user[sTOKEN];
        if (kw.isNull(tk))
        {
            console.error("kwFbToken::init() tk is invalid.");
            return false;
        }
        //console.info("kwFbToken::init() tk is ", tk);

        const sToken: string = tk[sTOKEN_REFRESH];
        if (!kw.isString(sToken))
        {
            console.error("kwFbToken::init() sToken is invalid.");
            return false;
        }
        //console.info("kwFbToken::init() sToken is ", sToken);
        this.sToken = sToken;

        return true;

    }

    public getToken(): string
    {
        return this.sToken;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFbToken);
    }

}
