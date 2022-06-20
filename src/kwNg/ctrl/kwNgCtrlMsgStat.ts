/**********************************************************************
 *
 * kwBs/ctrl/kwBsCtrlMsgStat.tst.ts * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {AppInjector }          from '@app/appInjector';
import {OnInit }               from '@angular/core';
import {OnDestroy }            from '@angular/core';

import {kw }                   from "@kw/kw";
import {kwCtrlMsgStat}         from "@kw/ctrl/kwCtrlMsgStat";
import {kwFctyMsg }            from "@kwFcty/msg/kwFctyMsg";
import {kwStatusStStatApp }    from "../status/kwStatusSt";
import {kwStMsg }              from "@kwStat/kwStMsg";

//@formatter:off


export abstract class kwNgCtrlMsgStat   extends kwCtrlMsgStat
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg,
        nStat: number       )
    {
        super(
            src,
            dst,
            AppInjector.get(kwStatusStStatApp),
            nStat   );

        //console.log(this.sClass, "::constructor() called");
    }

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
