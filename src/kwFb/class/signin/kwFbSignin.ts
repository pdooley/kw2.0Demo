
/**********************************************************************
 *
 * kwFb/class/signin/kwFbSignin.tss
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
import {kwFbUser}                    from "../user/kwFbUser";
import {kwFbUserAdd}                from "../userAdd/kwFbUserAdd";


const sOP : string =  "operationType";

//@formatter:on


export class kwFbSignin
{

    private user : kwFbUser;
    private userAdd : kwFbUserAdd;


    private sOperation: string;
    private sToken: string;

    constructor( private signin : object  )
    {
        //console.log("kwFbSignin::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwFbSignin::init() called.");

        if (kw.isNull(this.signin))
        {
            console.error("kwFbSignin::init() signin is invalid.");
            return false;
        }
        //console.info("kwFbSignin::init() signin is ", this.signin);

        const user: kwFbUser = new kwFbUser(this.signin);
        if (!user.init())
        {
            console.error("kwFbSignin::init() error creating user.");
            return false;
        }
        //console.info("kwFbSignin::init() user is ", user);
        this.user = user;

         const userAdd: kwFbUserAdd = new kwFbUserAdd(this.signin);
        if (!userAdd.init())
        {
            console.error("kwFbSignin::init() error creating userAdd.");
            return false;
        }
        //console.info("kwFbSignin::init() userAdd is ", userAdd);
        this.userAdd = userAdd;

        const sOperation : string = this.signin[sOP];
        if (!kw.isString(sOperation))
        {
            console.error("kwFbSignin::init() sOperation is invalid.");
            return false;
        }
        //console.info("kwFbSignin::init() sOperation is ", sOperation);
        this.sOperation = sOperation;

        const sToken : string = this.user.getToken();
        if (!kw.isString(sToken))
        {
            console.error("kwFbSignin::init() sToken is invalid.");
            return false;
        }
        //console.info("kwFbSignin::init() sToken is ", sToken);
        this.sToken = sToken;

        return true;

    }

    getOperation(): string
    {
        return this.sOperation;
    }

    getToken(): string
    {
        return this.sToken;
    }

    getUser(): kwFbUser
    {
        return this.user;
    }

    getUserAdd(): kwFbUserAdd
    {
        return this.userAdd;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFbSignin);
    }

}
