/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlPropStatMap.ts
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
import {kwBsStMap}              from "@kwBsStat/kwBsStMap";
import {kwCtrlPropStatMap}      from "@kwCtrl/kwCtrlPropStatMap";
import {kwLog}                  from "@kw/kwLog";



export abstract class kwBsCtrlPropStatMap   extends kwCtrlPropStatMap
                                            implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStMap,
        sProp: string,
        nStat: number )
    {
        super(
            AppInjector.get(kwBootstrapStBs),
            dst,
            sProp,
            nStat,
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
