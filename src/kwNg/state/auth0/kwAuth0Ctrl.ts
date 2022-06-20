/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0Ctrl.ts
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
import {Component}              from "@angular/core";
import {OnInit}                 from '@angular/core';
import {OnDestroy}              from '@angular/core';
import {Subscription}           from 'rxjs/Subscription';

import {AppInjector}            from "@app/appInjector";

import {kw}                     from "@kw/kw"
import {kwApisStApi,
        kwApisStArr}            from "@kwNgState/apis/kwApisSt";
import {kwAuth0StArr}           from "./kwAuth0St";
import {kwBsCustomStArr}        from "@kwBsState/custom/kwBsCustomSt";
import {kwBsMdlStMdl}           from "@kwBsState/mdl/kwBsMdlSt";
import {kwCred}                 from "@kwClass/cred/kwCred";
import {kwIsRootStVal}          from "@kwNgState/isRoot/kwIsRootSt";
import {kwLoginErrStVal}        from "@kwNgState/loginErr/kwLoginErrSt";
import {kwLoginStVal}           from "@kwNgState/login/kwLoginSt";
import {kwStatusStStatApp}      from "@kwNgStatus/kwStatusSt";
import {kwStVal}                from "@kwStat/kwStVal";

const sMODEL: string            = "Auth0User";
const sPROP: string             = "auth0";


//@formatter:on


@Component({selector: 'kw-auth0-ctrl-load', template: ``,})
export class kwAuth0CtrlLoad implements OnInit, OnDestroy
{
    subApis: Subscription;
    subApp: Subscription;
    subMdls: Subscription;

    constructor(
        private srvcApis:       kwApisStArr,
        private srvcApisApi:    kwApisStApi,
        private srvcAuth0:      kwAuth0StArr,
        private srvcBS:         kwBsCustomStArr,
        private srvcIsRoot:     kwIsRootStVal,
        private srvcLogin:      kwLoginStVal,
        private srvcLoginErr:   kwLoginErrStVal,
        private srvcMdls:       kwBsMdlStMdl,
        private srvcStatus:     kwStatusStStatApp   )
    {
        //console.log("kwAuth0Ctrl::constructor() called");
    }

    ngOnInit(): boolean
    {
        //console.log("kwAuth0Ctrl::ngOnInit() called");

        this.subApis = this.srvcApis.val.subscribe(info =>
        {
            this.retrieveApis();
        });

        this.subApp = this.srvcStatus.val.subscribe(info =>
        {
            this.inspectApp();
        });

        this.subMdls = this.srvcMdls.val.subscribe(info =>
        {
            this.retrieveMdls();
        });

        return true;
    }

    ngOnDestroy()
    {
        //console.log("kwAuth0Ctrl::ngOnDestroy() called.");

        this.subApis.unsubscribe();
        this.subApp.unsubscribe();
        this.subMdls.unsubscribe();
    }

    protected load(src: kwStVal): boolean
    {
        //console.log("kwAuth0Ctrl::load() called");
        return true;
    }

    inspectApp()
    {
        //console.log("kwAuth0Ctrl::inspectApi() called");

        if ( this.srvcIsRoot.isRoot())
        {
            //console.info("kwAuth0Ctrl::inspectApp() user is root - doing nothing.");
            return;
        }

        if (!this.srvcStatus.isLogout())
        {
            //console.info("kwAuth0Ctrl::inspectApp() app state is logout - logging out");
            //this.srvcAuth0.logout();
            return;
        }

        //console.info("kwAuth0Ctrl::inspectApp() logging in");

        this.login();
    }

    login()
    {
        //console.log("kwAuth0Ctrl::login() called ");

        const data: kwCred = this.srvcLogin.get();
        if ( kwCred.is(data))
        {
            console.error("kwAuth0Ctrl::login() data is invalid.");
            return;
        }
        //console.info("kwAuth0Ctrl::login() data is ", data);

        const sUsername = data.sUserName;
        if (!kw.isString(sUsername))
        {
            console.error("kwAuth0Ctrl::login() sUsername is invalid.");
            return false;
        }
        //console.info("kwAuth0Ctrl::login() sUsername is ", sUsername);

        const sPassword = data.sPassword;
        if (!kw.isString(sPassword))
        {
            console.error("kwAuth0Ctrl::login() sPassword is invalid.");
            return false;
        }
        //console.info("kwAuth0Ctrl::login() sPassword is ", sPassword);

        /*const sConnName = this.srvcBS.getConnName();
        if (!kw.isString(sConnName))
        {
            console.error("kwAuth0Ctrl::login() sConnName is invalid.");
            return false;
        }
        //console.info("kwAuth0Ctrl::login() sConnName is ", sConnName);
*/
 /*       const sScope = this.srvcBS.getScope();
        if (!kw.isString(sScope))
        {
            console.error("kwAuth0Ctrl::login() sScope is invalid.");
            return false;
        }
        //console.info("kwAuth0Ctrl::login() sScope is ", sScope);
*/
        const options = {
            sso: false,
            username: sUsername,
            password: sPassword,
            //connection: sConnName,
            //scope: sScope
        };

        //this.srvcAuth0.login(options, this.onSuccess, this.onFail);
    }

    onFail(): void
    {
        //console.log("kwAuth0Ctrl::onFail() called ");

    }

    onSuccess(profile, idToken): void
    {
        //console.log("kwAuth0Ctrl::onSuccess() called ");

        if ( kw.isNull(idToken))
        {
            console.error("kwAuth0Ctrl::onSuccess() idToken is invalid.");
            this.srvcLoginErr.val = profile;
            return;
        }

        //console.debug("kwAuth0Ctrl::onSuccess() idToken is ", idToken);

        this.srvcAuth0.val = idToken;
    }

    retrieveApis(): void
    {
        //console.log("kwAuth0Ctrl::retrieveApis() called");

        //const api: kwApi = this.srvcApis.getApi(sPROP);
        //if (!kwApi.is(api))
        //{
        //    //console.info("kwAuth0Ctrl::retrieveApis() apis is invalid.");
        //    return;
        //}
        //console.debug("kwAuth0Ctrl::retrieveApis() apis is ", api);

        //this.srvcApisApi.val = api;
    }

    retrieveMdls(): void
    {
        //console.log("kwAuth0Ctrl::retrieveMdls() called");


    }

}
