/**********************************************************************
 *
 * kwNFb/state/signin/kwFbSigninCtrlVal.ts
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
import {OnInit}               from '@angular/core';
import {Subject}              from "rxjs";
import {takeUntil}            from "rxjs/operators";

import {kw}                   from "@kw/kw";
import {kwBsSigninStArr}      from "@kwBsState/signin/kwBsSigninSt";
import {kwFbSignin}           from "@kwFb/class/signin/kwFbSignin";
import {kwFbSigninStVal}      from "./kwFbSigninSt";


const sTOKEN: string = "sToken";

//@formatter:on


@Component({
    selector: 'kwfb-signin-ctrl-val',
    template: `<br>`,
})
export class kwFbSigninCtrlVal implements OnInit, OnDestroy
{
    private _unsubscribeAll: Subject<any>;


    constructor(
        private srvcIn: kwFbSigninStVal,
        private srvcOut: kwBsSigninStArr )
    {
        //console.log("kwFbSigninCtrlVal::constructor() called");
    }

    ngOnInit(): boolean
    {
        //console.log("kwFbSigninCtrlVal::ngOnInit() called");

        this._unsubscribeAll = new Subject();

        this.srvcIn.val
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((signin) => {
                this.inspect(signin);
            });

        return true;
    }

    ngOnDestroy()
    {
        //console.log("kwBsFbSigninCtrlApi::ngOnDestroy() called.");

        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    private inspect(info: kwFbSignin): void
    {
        //console.log("kwFbSigninCtrlVal::inspect() called");

        if (kw.isNull(info))
        {
            //console.info("kwFbSigninCtrlVal::inspect() [info] is not setg");
            this.srvcOut.val = null;
            return;
        }
        //console.info("kwFbSigninCtrlVal::inspect() info is ", info);

        const sToken : string = info[sTOKEN];
        if (!kw.isString(sToken))
        {
            console.error("kwFbSigninCtrlVal::inspect() [sToken] is invalid.");
            return;
        }
        //console.info("kwFbSigninCtrlVal::inspect() sToken is ", sToken);

        let out = {};
        out[sTOKEN] = sToken;

        //console.info("kwFbSigninCtrlVal::inspect() out is ", out);

        this.srvcOut.val = [out];

    }


}
