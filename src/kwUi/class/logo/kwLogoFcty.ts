/**********************************************************************
 *
 * kwView/class/srvcs/kwLogoFcty.ts
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
import {kw}                    from "@kw/kw";
import {kwLogo}                 from "./kwLogo";
import {kwLogoType}             from "./kwLogoType";
//@formatter:on


const sTAG: string = "logo";


export class kwLogoFcty
{
    static create(info: object): kwLogo
    {
        //console.log("kwLogoFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwLogoFcty::create() info is invalid");
            return;
        }
        //console.info("kwLogoFcty::create() info is ", info);

        const type: kwLogoType = info[sTAG];
        if (kw.isNull(type))
        {
            console.error("kwLogoFcty()::create() type is invalid.");
            return;
        }
        //console.info("kwLogoFcty()::create() type is ", type);

        const logo: kwLogo = new kwLogo(type);
        if (!logo.init())
        {
            console.error("kwLogoFcty::create() error initializing logo.");
            return;
        }
        //console.info("kwLogoFcty::create() logo is ", logo);

        return logo;
    }

}

