/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgAll.ts
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
import {kwFctyMsg}              from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                  from "@kw/kwLog";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwUiStInit}               from "@kwUiStat/kwUiStInit";
import {kwStMsg}                from "@kwStat/kwStMsg";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwUiStView}               from "@kwUiStat/kwUiStView";
import {kwUiCtrlPageMsg}        from "@kwUiCtrl/kwUiCtrlPageMsg";


export abstract class kwUiCtrlPageMsgAll extends kwUiCtrlPageMsg
{


    protected constructor(
        srvcAttrs:  kwStArr,
        srvcDisp:   kwStObj,
        srvcInit:   kwUiStInit,
        srvcView:   kwUiStView,
        srvcData:   kwStArr,
        srvcFcty:   kwFctyMsg,
        srvcMsg:    kwStMsg   )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        console.log(log.called());
    }


//@formatter:on


    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initPage");
        console.log(log.called());

        return super.init();
    }


    protected subscribeFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeFltr");
        console.log(log.called());

        if (this.bSubFltr)
        {
            return true;
        }

        this.createMsg();


        this.bSubFltr = true;

        return true;
    }

    protected unSubscribeFltr(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubscribeFltr");
        console.log(log.called());
    }


}
