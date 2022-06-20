/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlPropStatObj.ts
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
import {kwBsStObj}              from "@kwBsStat/kwBsStObj";
import {kwCtrlPropStatObj}      from "@kwCtrl/kwCtrlPropStatObj";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiStatusStStat}     from "@kwNgUiStatus/kwNgUiStatusSt";



export abstract class kwNgUiCtrlPropStatObj extends kwCtrlPropStatObj
                                            implements OnInit, OnDestroy
{

    protected constructor(
        srvc: kwBsStObj,
        sSTATE: string,
        nStat: number )
    {
        super(
            AppInjector.get(kwBootstrapStBs),
            srvc,
            sSTATE,
            nStat,
            AppInjector.get(kwNgUiStatusStStat)
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
