/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlSubMapTs.ts
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
import {OnDestroy}          from '@angular/core';
import {OnInit}             from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwLog}              from "@kw/kwLog";
import {kwNgPubSub}         from "@kwNg/pubSub/kwNgPubSub";
import {kwUiCtrlSubMap}     from "@kwUiCtrl/kwUiCtrlSubMap";
import {kwUiStMap}          from "@kwUiStat/kwUiStMap";



export abstract class kwNgUiCtrlSubMap  extends kwUiCtrlSubMap
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwBsStArr,
        dst: kwUiStMap,
        sTag: string )
    {
        super(
            src,
            dst,
            sTag,
            AppInjector.get(kwNgPubSub) );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

    }

//@formatter:on

    ngOnInit()
    {
        //console.log(this.sClass, "::ngOnInit() called");

        if (!this.init())
        {
            console.error(this.sClass, "::ngOnInit() error initializing");
            return;
        }
    }

    ngOnDestroy()
    {
        //console.log(this.sClass, "::ngOnDestroy() called.");
        this.destroy();
    }




}
