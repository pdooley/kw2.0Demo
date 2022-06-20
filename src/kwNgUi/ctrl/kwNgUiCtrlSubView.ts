/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlSubView.ts
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

import {kwLog}              from "@kw/kwLog";
import {kwUiCtrlSubView}    from "@kwUiCtrl/kwUiCtrlSubView";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";
import {kwNgUiViewsStMap}   from "@kwNgUiState/views/kwNgUiViewsSt";




export abstract class kwNgUiCtrlSubView extends kwUiCtrlSubView
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwNgUiStView,
        sTag: string  )
    {
        super(AppInjector.get(kwNgUiViewsStMap), dst, sTag);

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
