/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlPropApi.ts
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
import {OnDestroy}              from '@angular/core';
import {OnInit}                 from '@angular/core';

import {AppInjector}            from "@app/appInjector";

import {kwBsApisStObj}          from "@kwBsState/apis/kwBsApisSt";
import {kwBsStApi}              from "@kwBsStat/kwBsStApi";
import {kwCtrlPropSubApi}       from "@kwCtrl/kwCtrlPropSubApi";
import {kwLog}                  from "@kw/kwLog";



export abstract class kwBsCtrlPropApi   extends kwCtrlPropSubApi
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStApi,
        sProp: string  )
    {
        super(AppInjector.get(kwBsApisStObj), dst, sProp);

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
