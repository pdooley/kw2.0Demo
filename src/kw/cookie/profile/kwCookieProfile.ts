/**********************************************************************
 *
 * kw/cookie/auth/kwCookieProfile.ts
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

const sKEY = "profile";


export class kwCookieProfile
{

    constructor()
    {
        //console.log("kwCookieProfile::constructor() is called.");
    }

    clear(): void
    {
        return kwCookie.clear(sKEY);
    }

    get(): any
    {
        return kwCookie.get(sKEY);
    }

    set(data: any)
    {
        //console.log("kwCookieProfile::set() called.");

        if (kw.isNull(data))
        {
            console.error("kwCookieProfile::set() data is invalid.");
        }

        kwCookie.set(sKEY, data);
    }

}




