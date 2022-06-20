/**********************************************************************
 *
 * kwFb/ctrl/kwFbCtrlSubMsg.ts
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
import {OnInit}             from '@angular/core';
import {OnDestroy}          from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kwCtrlSubAjax}      from "@kwCtrl/kwCtrlSubAjax";
import {kwFbSrvcLoad}       from "@kwFb/srvc/load/kwFbSrvcLoad";
import {kwLog}              from "@kw/kwLog";
import {kwNgPubSub}         from "@kwNg/pubSub/kwNgPubSub";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwStMsg}            from "@kwStat/kwStMsg";

//@formatter:on


export class kwFbCtrlAjax   extends kwCtrlSubAjax
                            implements OnInit, OnDestroy
{

    constructor(
        src: kwStMsg,
        dst: kwStArr,
        sTag: string    )
    {
        super(
            src,
            dst,
            sTag,
            AppInjector.get(kwFbSrvcLoad),
            AppInjector.get(kwNgPubSub)       );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    ngOnInit()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        if(!this.init())
        {
            console.error(log.errInit("this"));
        }

    }

    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this.destroy();
    }

}
