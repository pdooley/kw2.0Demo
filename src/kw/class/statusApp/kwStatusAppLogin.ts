/**********************************************************************
 *
 * kw/class/statApp/kwStatusAppLogin.ts
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
import {kwLog}                     from "@kw/kwLog";
import {kwStatusApp }                from "./kwStatusApp";
import {kwStatusAppEnum }            from "./kwStatusAppEnum";
//@formatter:on


export class kwStatusAppLogin extends kwStatusApp
{
    constructor()
    {
        super(kwStatusAppEnum.login);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwStatusApp): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        if (prev.isLoggedOut()
        ||     prev.isInit()        )
        {
            return true;
        }
        console.error("kwStatusAppLogin::canTransition() invalid statAppe transition.");
        return false;
    }

}

