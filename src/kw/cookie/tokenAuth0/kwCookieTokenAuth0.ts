/**********************************************************************
 *
 * kw/cookie/auth/kwCookieTokenAuth0.ts
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

const sKEY = "tokenAuth0";


export class kwCookieTokenAuth0
{

    constructor()
    {
        //console.log("kwCookieTokenAuth0::constructor() is called.");
    }

    clear(): void
    {
        return kwCookie.clear(sKEY);
    }

    get(): any
    {
        return kwCookie.getJSON(sKEY);
    }

    set(data: any)
    {
        //console.log("kwCookieTokenAuth0::set() called.");

        if (kw.isNull(data))
        {
            console.error("kwCookieTokenAuth0::set() data is invalid.");
        }

        kwCookie.setJSON(sKEY, data);
    }

}

