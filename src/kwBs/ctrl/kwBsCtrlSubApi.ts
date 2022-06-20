/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlSubApi.ts
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

import {kwBsApisStObj}      from "@kwBsState/apis/kwBsApisSt";
import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwCtrlSubApi}       from "@kwCtrl/kwCtrlSubApi";
import {kwLog}              from "@kw/kwLog";



export abstract class kwBsCtrlSubApi    extends kwCtrlSubApi
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStApi,
        sSTATE: string  )
    {
        super(AppInjector.get(kwBsApisStObj), dst, sSTATE);

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
