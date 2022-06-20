/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlPageMsgFltrUrl.ts
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
/*
import {ActivatedRoute}           from '@angular/router';
import {OnDestroy}                from '@angular/core';
import {OnInit}                   from '@angular/core';

import { AppInjector}              from '@app/appInjector';

import {kwNgUiAttrsStVal}           from "@kwBsState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}            from "@kwBsState/disp/kwNgUiDispSt";
import {kwBsFctyMsg}              from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwLog}                    from "@kw/kwLog";
import {kwStArr}                  from "@kwStat/kwStArr";
import {kwStInit}                 from "@kwUiStat/kwUiStInit";
import {kwStMsg}                  from "@kwStat/kwStMsg";
import {kwStView}                 from "@kwUiStat/kwUiStView";
import {kwUiCtrlPageMsgFltrUrl}   from '@kwUiCtrl/kwUiCtrlPageMsgFltrUrl';



export abstract class kwNgUiCtrlPageMsgFltrUrl  extends kwUiCtrlPageMsgFltrUrl
                                                implements OnInit, OnDestroy
{

    constructor(
        srvcInit:           kwStInit,
        srvcView:           kwStView,
        srvcData:           kwStArr,
        srvcFcty:           kwBsFctyMsg,
        srvcMsg:            kwStMsg,
        private srvcRoute:  ActivatedRoute )
    {
        super(
            AppInjector.get(kwNgUiAttrsStVal),
            AppInjector.get(kwNgUiDispStObj),
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg     );

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

    protected retrieveFltrData(): void
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveFltrData");
        //console.log(log.called());

        this.srvcRoute.params.subscribe(params =>
        {
            //console.info(log.isObj("params"), params, ']');
 //           this.storeDataFltr(params);
        })
   }



}

*/
