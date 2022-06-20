/**********************************************************************
 *
 * kw/class/statApp/kwStatusAppReset.ts
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


export class kwStatusAppReset extends kwStatusApp
{
    constructor()
    {
        super(kwStatusAppEnum.reset);
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    canTransition(prev: kwStatusApp): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        if (prev.isLogin())
        {
            console.error("kwStatusAppLogout::canTransition() invalid statAppe transition.");
            return false;
        }
        return true;
    }

}

