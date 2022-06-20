/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlSubMdl.ts
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
import {OnDestroy }             from '@angular/core';
import {OnInit }                from '@angular/core';

import {AppInjector}            from "@app/appInjector";

import {kwBsStMdl}              from "@kwBsStat/kwBsStMdl";
import {kwBsTimeZonesStMap}           from "@kwBsState/timeZones/kwBsTimeZonesSt";
import {kwBsLangsStMap}         from "@kwBsState/langs/kwBsLangsSt";
import {kwBsCurrsStMap}         from "@kwBsState/currs/kwBsCurrsSt";
import {kwCtrlSubMdl}           from "@kwCtrl/kwCtrlSubMdl";
import {kwLog}                  from "@kw/kwLog";
import {kwMdlsStObj}            from "@kwNgState/mdls/kwMdlsSt";




export abstract class kwNgCtrlSubMdl    extends kwCtrlSubMdl
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwBsStMdl,
        sProp: string  )
    {
        super(
            AppInjector.get(kwMdlsStObj),
            dst,
            sProp,
            AppInjector.get(kwBsCurrsStMap),
            AppInjector.get(kwBsLangsStMap),
            AppInjector.get(kwBsTimeZonesStMap)    );

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
