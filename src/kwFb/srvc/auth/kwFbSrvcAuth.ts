/**********************************************************************
 *
 * kwFb/srvc/auth/kwFbSrvcAuth.ts author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Injectable}            from '@angular/core';

import {AngularFireAuth}       from '@angular/fire/auth';
import * as firebase            from 'firebase/app';

import {kw}                     from "@kw/kw";
import {kwErrStVal}             from '@kwNg/state/err/kwErrSt';
import {kwFbErr}                from '@kwFbClass/err/kwFbErr'
import {kwFbSignin}             from "@kwFbClass/signin/kwFbSignin";
import {kwFbSigninStVal}        from '@kwFbState/signin/kwFbSigninSt'
import {kwFbtErr}               from "@kwFbClass/err/kwFbtErr";
import {kwLog}                  from "@kw/kwLog";
import {kwStatusApp}            from '@kwClass/statusApp/kwStatusApp';
import {kwStatusAppLogout}      from '@kwClass/statusApp/kwStatusAppLogout';
import {kwStatusStStatApp}      from "@kwNg/status/kwStatusSt";

//@formatter:on

@Injectable({providedIn: 'root'})
export class kwFbSrvcAuth
{

    protected sClass: string = this.constructor.name;


    constructor(
        private srvcStatus: kwStatusStStatApp,
        private srvcFB:     AngularFireAuth,
        private srvcErr:    kwErrStVal,
        private srvcSignin: kwFbSigninStVal   )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public forgot(value)
    {
        const log: kwLog = new kwLog(this.sClass, "forgot");
        //console.log(log.called());

        firebase.auth()
            .sendPasswordResetEmail(value.email)
            .then(res => {
                //console.log(log.isObj("res"), res);
            }, err => {
                this.processErr(err);
            })
    }

    public login(value)
    {
        debugger
        const log: kwLog = new kwLog(this.sClass, "login");
        //console.log(log.called());

        firebase.auth()
            .signInWithEmailAndPassword(value.email, value.password)
            .then(res => {
                this.store(res);
            }, err => {
                this.processErr(err);
            })
    }

    public loginFacebook()
    {
        const log: kwLog = new kwLog(this.sClass, "loginFacebook");
        //console.log(log.called());

        let provider = new firebase.auth.FacebookAuthProvider();
        this.srvcFB.auth
            .signInWithPopup(provider)
            .then(res => {
                this.store(res);
            }, err => {
                this.processErr(err);
            })
    }

    public loginGoogle()
    {
        const log: kwLog = new kwLog(this.sClass, "loginGoogle");
        //console.log(log.called());

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.srvcFB.auth
            .signInWithPopup(provider)
            .then(res => {
                this.store(res);
            }, err => {
                this.processErr(err);
            })
    }

    public logout()
    {
        const log: kwLog = new kwLog(this.sClass, "logout");
        //console.log(log.called());

        firebase.auth()
            .signOut()
            .then(res => {
                this.remove(res);
            }, err => {
                this.processErr(err);
            })
    }

    public register(value)
    {
        const log: kwLog = new kwLog(this.sClass, "register");
        //console.log(log.called());

        this.srvcFB.auth
            .createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
                this.store(res);
            }, err => {
                this.processErr(err);
            })
    }

    public reset(value): void
    {
        const log: kwLog = new kwLog(this.sClass, "reset");
        //console.log(log.called());

        this.srvcFB.auth
            .createUserWithEmailAndPassword(value.email, value.password)
            .then(res => {
                this.store(res);
            }, err => {
                this.processErr(err);
            })
    }


    private processErr(err: kwFbtErr): void
    {
        const log: kwLog = new kwLog(this.sClass, "processErr");
        //console.log(log.called());

        const error = new kwFbErr(err);
        if (!error.init())
        {
           console.error(log.errCreate("error"))
           return;
        }
        console.info(log.isObj("error"), error);

        this.srvcErr.val = error;
    }

    private remove(res: void): void
    {
        const log: kwLog = new kwLog(this.sClass, "remove");
        //console.log(log.called());

        const logout: kwStatusApp = new kwStatusAppLogout();

        this.srvcStatus.val = logout;
    }

    private store(res: firebase.auth.UserCredential): void
    {
        const log: kwLog = new kwLog(this.sClass, "store");
        //console.log(log.called());

        if (kw.isNull(res)) {
            console.error("kwFbSrvc::store() res is invalid.");
            return;
        }
        //console.info("kwFbSrvc::store() res is ", res);


        const signin: kwFbSignin = new kwFbSignin(res);
        if (!signin.init()) {
            console.error("kwFbSrvc::store() error creating signin.");
            return;
        }
        //console.info("kwFbSrvc::store() signin is ", signin);

        this.srvcSignin.val = signin;

    }

}
