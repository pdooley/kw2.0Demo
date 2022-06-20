/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlPropStatTrace.ts
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

import {kwBootstrapStBs}        from "@kwBs/bootstrap/kwBootstrapSt";
import {kwBsStatusStStatBs}     from "@kwBsStatus/kwBsStatusSt";
import {kwCtrlPropStatTrace}    from "@kwCtrl/kwCtrlPropStatTrace";
import {kwLog}                  from "@kw/kwLog";
import {kwStatusBsEnum}         from "@kwClass/statusBs/kwStatusBsEnum";
import {kwStTrace}              from "@kwStat/kwStTrace";

const nSTAT: number             = kwStatusBsEnum.init;
const sPROP: string             = "trace";


export abstract class kwBsCtrlPropStatTrace extends kwCtrlPropStatTrace
                                            implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwStTrace)
    {
        super(
            AppInjector.get(kwBootstrapStBs),
            dst,
            sPROP,
            nSTAT,
            AppInjector.get(kwBsStatusStStatBs)
        );

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
