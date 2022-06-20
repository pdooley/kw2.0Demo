/**********************************************************************
 *
 * kwNg/ctrl/kwNgCtrlPubSubAll.ts
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
import {AppInjector}           from '@app/appInjector';
import {OnInit}                from '@angular/core';
import {OnDestroy}             from '@angular/core';

import {kwCtrlPubSubAll}        from "@kw/ctrl/kwCtrlPubSubAll";
import {kwFctyMsg}              from "@kwFcty/msg/kwFctyMsg";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwStMsg}                from "@kwStat/kwStMsg";


//@formatter:off


export abstract class kwNgCtrlPubSubAll extends kwCtrlPubSubAll
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg,
        sTag: string       )
    {
        super(
            src,
            dst,
            sTag,
            AppInjector.get(kwNgPubSub)  );

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
