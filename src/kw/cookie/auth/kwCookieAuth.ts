/**********************************************************************
 *
 * kw/cookie/auth/kwCookieAuth.ts
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
import {kwCookie }                    from "../kwCookie";
//@formatter:on

const sKEY = "token";


export class kwCookieAuth
{

    constructor( private kwCookie)
    {
        //console.log("kwCookieAuth::constructor() is called.");
    }

    clear()
    {
        return kwCookie.clear(sKEY);
    }

    get()
    {
        return kwCookie.get(sKEY);
    }

    set(data: any)
    {
        //console.log("kwCookieAuth::set() called.");

        if (!kw.isString(data))
        {
            console.error("kwCookieAuth::set() data is invalid.");
        }

        kwCookie.set(sKEY, data);
    }

}




