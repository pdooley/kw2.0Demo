
/**********************************************************************
 *
 * kwFb/class/userAdd/kwFbUserAdd.tss
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


const sADD : string  = "additionalUserInfo";

//@formatter:on


export class kwFbUserAdd
{

    private user : object;

    constructor( private signin : object )
    {
        //console.log("kwFbUserAdd::constructor() is called.");
    }

    public init(): boolean
    {
        //console.log("kwFbUserAdd::init() called.");

        if (kw.isNull(this.signin))
        {
            console.error("kwFbUserAdd::init() signin is invalid.");
            return false;
        }
        //console.info("kwFbUserAdd::init() signin is ", this.signin);

        const user: object = this.signin[sADD];
        if (kw.isNull(user))
        {
            console.error("kwFbUserAdd::init() user is invalid.");
            return false;
        }
        //console.info("kwFbUserAdd::init() user is ", user);
        this.user = user;

        return true;

    }

    public getUser(): object
    {
        return this.user;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFbUserAdd);
    }

}
