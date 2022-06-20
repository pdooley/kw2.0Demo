/**********************************************************************
 *
 * kw/cookie/auth/kwCookiePage.ts
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

const sKEY = "page";


export class kwCookiePage
{

    constructor()
    {
        //console.log("kwCookiePage::constructor() is called.");
    }

    clear(): void
    {
        return kwCookie.clear(sKEY);
    }

    get()
    {
        return kwCookie.get(sKEY);
    }

    set(data: any)
    {
        //console.log("kwCookiePage::set() called.");

        if (!kw.isString(data))
        {
            console.error("kwCookiePage::set() data is invalid.");
        }

        kwCookie.set(sKEY, data);
    }

}




