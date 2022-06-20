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
import {OnDestroy}          from '@angular/core';
import {OnInit}             from '@angular/core';

import {AppInjector}        from '@app/appInjector';

import {kwBsFctyMsg}        from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsStatusStStatBs} from "@kwBsStatus/kwBsStatusSt";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwCtrlMsgStat}      from "@kwCtrl/kwCtrlMsgStat";
import {kwLog}              from "@kw/kwLog";

//@formatter:off


export abstract class kwBsCtrlMsgStat   extends kwCtrlMsgStat
                                        implements OnInit, OnDestroy
{

    protected constructor(
        src: kwBsFctyMsg,
        dst: kwBsStMsg,
        nStat: number       )
    {
        super(
            src,
            dst,
            AppInjector.get(kwBsStatusStStatBs),
            nStat   );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    ngOnInit()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        if (!this.init())
        {
            console.error(log.errInit("this"));
            return;
        }
    }

    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this.destroy();
    }

}
