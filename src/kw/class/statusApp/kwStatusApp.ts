/**********************************************************************
 *
 * kw/class/statusApp/kwStatusApp
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
import {kw }                       from "@kw/kw";
import {kwLog }                    from "@kw/kwLog";
import {kwStatus }                 from "@kwClass/status/kwStatus";
import {kwStatusAppEnum }          from "./kwStatusAppEnum";
//@formatter:on

export abstract class kwStatusApp extends kwStatus
{

    static is(obj: object): boolean
    {
        return kw.is(obj, kwStatusApp)
    }


    protected constructor(
        nType: kwStatusAppEnum )
    {
        super(nType);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        return super.init();
    }

    isBootstrap(): boolean
    {
        return (this.nType === kwStatusAppEnum.bootstrap);
    }

    isConnect(): boolean
    {
        return (this.nType === kwStatusAppEnum.connect);
    }

    isCreate(): boolean
    {
        return (this.nType === kwStatusAppEnum.create);
    }

    isInit(): boolean
    {
        return (this.nType === kwStatusAppEnum.init);
    }

    isLoggedIn(): boolean
    {
        return (this.nType === kwStatusAppEnum.loggedin);
    }

    isLoggedOut(): boolean
    {
        return (this.nType === kwStatusAppEnum.loggedout);
    }

    isLogout(): boolean
    {
        return (this.nType === kwStatusAppEnum.logout);
    }

    isLogin(): boolean
    {
        return (this.nType === kwStatusAppEnum.login);
    }

    isReset(): boolean
    {
        return (this.nType === kwStatusAppEnum.reset);
    }

    isVerify(): boolean
    {
        return (this.nType === kwStatusAppEnum.verify);
    }

    toString(): string
    {
        return kw.toString(this.nType, kwStatusAppEnum);
    }


}
