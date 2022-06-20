/**********************************************************************
 *
 * kwNg/ctrl/kwBsCtrlSubApi.ts
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

import {kwApisStObj}        from "@kwNgState/apis/kwApisSt";
import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwCtrlSubApi}       from "@kwCtrl/kwCtrlSubApi";
import {kwLog}              from "@kw/kwLog";



export abstract class kwNgCtrlSubApi    extends kwCtrlSubApi
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStApi,
        sTag: string  )
    {
        super(AppInjector.get(kwApisStObj), dst, sTag);

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
