/**********************************************************************
 *
 * kw/cookie/auth/kwCookieTokenOrg.ts
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

const sKEY = "tokenOrg";


export class kwCookieTokenOrg
{

    constructor()
    {
        //console.log("kwCookieTokenOrg::constructor() is called.");
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
        //console.log("kwCookieTokenOrg::set() called.");

        if (kw.isNull(data))
        {
            console.error("kwCookieTokenOrg::set() data is invalid.");
        }

        kwCookie.setJSON(sKEY, data);
    }

}

