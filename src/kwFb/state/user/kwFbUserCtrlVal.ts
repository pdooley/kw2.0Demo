/**********************************************************************
 *
 * kwNFb/state/user/kwFbUserCtrlVal.ts
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
import {Component}            from "@angular/core";
import {OnDestroy}            from '@angular/core';
import {Subject}              from "rxjs";
import {OnInit}               from '@angular/core';
import {takeUntil}            from "rxjs/operators";

import {kw}                   from "@kw/kw";
import {kwFbSignin}           from "@kwFb/class/signin/kwFbSignin";
import {kwFbSigninStVal}      from "@kwFb/state/signin/kwFbSigninSt";
import {kwFbUser}             from "@kwFb/class/user/kwFbUser";
import {kwBsUserStArr}        from "@kwBsState/user/kwBsUserSt";
import {kwLog}                from "@kw/kwLog";


const sFULL_NAME: string         = "fullname";
const sIMG: string               = "profile_picture";

//@formatter:on


@Component({
    selector: 'kwfb-user-ctrl-val',
    template: `<br>`,
})
export class kwFbUserCtrlVal implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;

    private _unsubscribeAll: Subject<any>;


    constructor(
        private srvcIn: kwFbSigninStVal,
        private srvcOut: kwBsUserStArr )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    ngOnInit(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this._unsubscribeAll = new Subject();

        this.srvcIn.val
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((signin) => this.inspect(signin));

        return true;
    }

    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private inspect(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "inspect");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            //console.info(log.empty("info"));
            this.srvcOut.val = null;
            return;
        }
        //console.info(log.isObj("info"), info);

        const user : kwFbUser = info.user;
        if (kw.isNull(user))
        {
            console.error(log.invalid("user"));
            return;
        }
        //console.info(log.isObj("user"), user);

        let out = {};
        out[sFULL_NAME] = user.getFullName();
        out[sIMG] = user.getImg();

        //console.info(log.isObj("out"), out);

        this.srvcOut.val = [out];
    }


}
