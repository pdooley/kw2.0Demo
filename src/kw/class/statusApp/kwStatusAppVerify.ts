/**********************************************************************
 *
 * kw/class/statApp/kwStatusAppVerify.ts
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


export class kwStatusAppVerify extends kwStatusApp
{
    constructor()
    {
        super(kwStatusAppEnum.verify);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwStatusApp): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "canTransition");
        //console.log(log.called());

        if (!prev.isLoggedIn()
        &&  !prev.isLogin()
        &&  !prev.isVerify()        )
        {
            console.error("kwStatusAppVerify::canTransition() invalid statAppe transition.");
            return false;
        }

        return true;
    }

}

