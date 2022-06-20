
/**********************************************************************
 *
 * kwFb/class/user/kwFbUser.tss
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
import {kwFbToken}                from "../token/kwFbToken";


const sUSER : string  = "user";
const sFULL_NAME : string  = "displayName";
const sEMAIL : string  = "email";
const sIMG : string  = "photoURL";

//@formatter:on


export class kwFbUser
{

    private token : kwFbToken;
    private user : object;

    private sFullName: string;
    private sImg: string;

    constructor( private signin : object )
    {
        //console.log("kwFbUser::constructor() is called.");
    }

    public init(): boolean
    {
        //console.log("kwFbUser::init() called.");

        if (kw.isNull(this.signin))
        {
            console.error("kwFbUser::init() user is invalid.");
            return false;
        }
        //console.info("kwFbUser::init() user is ", this.user);

        const user: object = this.signin[sUSER];
        if (kw.isNull(user))
        {
            console.error("kwFbUser::init() user is invalid.");
            return false;
        }
        //console.info("kwFbUser::init() user is ", user);
        this.user = user;

        const token: kwFbToken = new kwFbToken(this.user);
        if (!token.init())
        {
            console.error("kwFbSignin::init() error creating token.");
            return false;
        }
        //console.info("kwFbSignin::init() token is ", token);
        this.token = token;

        const sFullName: string = this.user[sEMAIL /*sFULL_NAME*/];
        if (!kw.isString(sFullName))
        {
            console.error("kwFbUser::init() sFullName is invalid.");
            return false;
        }
        //console.info("kwFbUser::init() sFullName is ", sFullName);
        this.sFullName = sFullName;

        const sImg: string = this.user[sEMAIL /*sIMG*/];
        if (!kw.isString(sImg))
        {
            console.error("kwFbUser::init() sImg is invalid.");
            //return false;
        }
        //console.info("kwFbUser::init() sImg is ", sImg);
        this.sImg = sImg;

        return true;

    }

    public getFullName(): string
    {
        return this.sFullName;
    }

    public getImg(): string
    {
        return this.sImg;
    }

    public getUser(): object
    {
        return this.user;
    }

    public getToken(): string
    {
        return this.token.getToken();
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFbUser);
    }

}
