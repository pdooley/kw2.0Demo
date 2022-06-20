/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlPageMsgSt.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {OnDestroy}          from '@angular/core';
import {OnInit}             from '@angular/core';

import {AppInjector}        from "@app/appInjector";

import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStVal}          from "@kwBsStat/kwBsStVal";
import {kwFctyMsg}          from "@kwFcty/msg/kwFctyMsg";
import {kwUiCtrlPageMsgSt}  from "@kwUiCtrl/kwUiCtrlPageMsgSt";
import {kwNgUiAttrsStArr}   from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}    from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";

export abstract class kwNgUiCtrlPageMsgSt   extends kwUiCtrlPageMsgSt
                                            implements OnDestroy, OnInit
{

    protected constructor(
        srvcInit: kwNgUiStInit,
        srvcView: kwNgUiStView,
        srvcData: kwBsStArr,
        srvcFcty: kwFctyMsg,
        srvcMsg:  kwBsStMsg,
        srvcFltr: kwBsStVal)
    {
        super(
            AppInjector.get(kwNgUiAttrsStArr),
            AppInjector.get(kwNgUiDispStObj),
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg,
            srvcFltr    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.init();
    }

    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.destroy();
    }



}
