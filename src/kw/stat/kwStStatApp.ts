/**********************************************************************
 *
 * kw/stat/kwStStat.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:on
import {BehaviorSubject}  from "rxjs";
import * as _               from "lodash";

import {kwLog}            from "@kw/kwLog";
import {kwStatusApp}      from "@kwClass/statusApp/kwStatusApp";
import {kwStatusAppInit}  from "@kwClass/statusApp/kwStatusAppInit";
import {kwStStat}         from "@kwStat/kwStStat";
import {kwStTrace}         from "./kwStTrace";


const DEFAULT: kwStatusApp = new kwStatusAppInit();
const sDATA_TYPE: string = "StatApp";

//@formatter:off


export abstract class kwStStatApp extends kwStStat
{
    protected constructor(
        srvcTrace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected loadDefault(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDefault");
        //console.log(log.called());

        // Set the config from the default config
        this.subject = new BehaviorSubject(_.cloneDeep(DEFAULT));

        return true;
    }

    public get(): kwStatusApp
    {
        return <kwStatusApp>super.get();
    }

    isBootstrap(): boolean
    {
        return (this.get().isBootstrap());
    }

    isConnect(): boolean
    {
        return (this.get().isConnect());
    }

    isCreate(): boolean
    {
        return (this.get().isCreate());
    }

    isLoggedIn(): boolean
    {
        return (this.get().isLoggedIn());
    }

    isLoggedOut(): boolean
    {
        return (this.get().isLoggedOut());
    }

    isLogout(): boolean
    {
        return (this.get().isLogout());
    }

    isLogin(): boolean
    {
        return (this.get().isLogin());
    }

    isReset(): boolean
    {
        return (this.get().isReset());
    }

    isVerify(): boolean
    {
        return (this.get().isVerify());
    }

    protected traceInt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        if (this.srvcTrace.bApp) console.info(log.isObj(this.sDataType), data);
    }

}
