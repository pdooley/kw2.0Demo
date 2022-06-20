/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlPropApi.ts
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
import {OnDestroy }            from "@angular/core";
import {OnInit }               from "@angular/core";

import {AppInjector }          from "@app/appInjector";

import {kwApisStObj}           from "@kwNgState/apis/kwApisSt";
import {kwCtrlPropSubApi }     from "@kwCtrl/kwCtrlPropSubApi";
import {kwLog }                from "@kw/kwLog";
import {kwStApi }              from "@kwStat/kwStApi";



export abstract class kwNgCtrlPropApi   extends kwCtrlPropSubApi
                                        implements OnInit, OnDestroy
{

    protected constructor(
        dst: kwStApi,
        sProp: string  )
    {
        super(AppInjector.get(kwApisStObj), dst, sProp);

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
