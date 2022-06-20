/**********************************************************************
 *
 * kwBs/kwBsInit.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}           from "@angular/core";
import {HttpClient}           from "@angular/common/http";

import {kw}                   from "@kw/kw";
import {kwApp}                from "@kwClass/app/kwApp";
import {kwBs}                 from "@kwClass/Bs/kwBs";
import {kwBsApis}             from "@kwClass/BsApis/kwBsApis";
import {kwCred}               from "@kwClass/cred/kwCred";
import {kwLog}                  from "@kw/kwLog";
import {kwSrvcs}              from "@kwClass/srvcs/kwSrvcs";


const sURL:             string = 'assets/bootstrap.json';
//@formatter:on

@Injectable()
export class kwBsInit
{
    protected sClass: string = this.constructor.name;


    bootstrap: kwBs;

    constructor(private http: HttpClient)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    getApis(): kwBsApis
    {
        const log: kwLog = new kwLog(this.sClass, "getApis");
        //console.log(log.called());

        return this.bootstrap.apis;
    }

    getApp(): kwApp
    {
        const log: kwLog = new kwLog(this.sClass, "getApp");
        //console.log(log.called());

        return this.bootstrap.app;
    }

    getBS(): kwBs
    {
        const log: kwLog = new kwLog(this.sClass, "getBS");
        //console.log(log.called());

        return this.bootstrap;
    }

    getCred(): kwCred
    {
        const log: kwLog = new kwLog(this.sClass, "getCreds");
        //console.log(log.called());

        return this.bootstrap.cred;
    }

    getSrvcs(): kwSrvcs
    {
        const log: kwLog = new kwLog(this.sClass, "getSrvcs");
        //console.log(log.called());

        return this.bootstrap.srvcs;
    }

    load(): Promise<any>
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        const promise = this.http.get(sURL)
            .toPromise()
            .then(data => this.store(data));

        return promise;
    }

    store(config: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "store");
        //console.log(log.called());

        if (kw.isNull(config))
        {
            console.error("kwBsInit()::store() config is invalid.");
            return false;
        }

        this.bootstrap = new kwBs(config);
        if (!this.bootstrap.init())
        {
            console.error("kwBsInit()::store() error initializing bootstrap.");
            return false;
        }

        return true;
    }

}

export function initConfig(configService: kwBsInit): Function
{
    //console.log("kwBsInit::initConfig() called.");
    return () => configService.load();
}
