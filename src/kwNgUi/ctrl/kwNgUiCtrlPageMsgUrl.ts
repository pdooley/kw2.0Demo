/**********************************************************************
 *
 * kwNg/ctrl/kwNgUiCtrlPageMsgUrl.ts
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
import { ActivatedRoute}           from '@angular/router';

import {AppInjector}                from "@app/appInjector";

import { kwLog}                    from "@kw/kwLog";
import { kwBsStArr}                from "@kwBsStat/kwBsStArr";
import { kwBsStMsg}                from "@kwBsStat/kwBsStMsg";
import { kwBsFctyMsg}              from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwNgUiAttrsStArr}           from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}            from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwNgUiStInit}               from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}               from "@kwNgUiStat/kwNgUiStView";
import {kwUiCtrlPageMsgUrl}         from "@kwUiCtrl/kwUiCtrlPageMsgUrl";



export abstract class kwNgUiCtrlPageMsgUrl extends kwUiCtrlPageMsgUrl
{

    constructor(
        srvcInit:           kwNgUiStInit,
        srvcView:           kwNgUiStView,
        srvcData:           kwBsStArr,
        srvcFcty:           kwBsFctyMsg,
        srvcMsg:            kwBsStMsg,
        private srvcRoute:  ActivatedRoute )
    {
        super(
            AppInjector.get(kwNgUiAttrsStArr),
            AppInjector.get(kwNgUiDispStObj),
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        this.subscribeFltr();
    }

//@formatter:on

    protected subscribeFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeFltr");
        //console.log(log.called());

        if (this.bSubFltr)
        {
            return true;
        }

        this.srvcRoute.params.subscribe(params =>
        {
            //console.info(log.isObj("params"), params, ']');
            //this.createMsg(params);
        });

        this.bSubFltr = true;

        return true;
    }

}
