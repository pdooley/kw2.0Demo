/**********************************************************************
 *
 * kw/cookie/auth/kwCookieTokenRegister.ts
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

const sKEY = "tokenRegister";


export class kwCookieTokenRegister
{

    constructor()
    {
        //console.log("kwCookieTokenRegister::constructor() is called.");
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
        //console.log("kwCookieTokenRegister::set() called.");

        if (kw.isNull(data))
        {
            console.error("kwCookieTokenRegister::set() data is invalid.");
        }

        kwCookie.setJSON(sKEY, data);
    }

}

