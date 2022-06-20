/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgUrl.ts
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
import {kw}                   from "@kw/kw";
import {kwUiCtrlPageMsgFltr}    from "./kwUiCtrlPageMsgFltr";
import {kwFctyMsg}            from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                from "@kw/kwLog";
import {kwPageFltrUrl}         from "@kwClass/page/kwPageFltrUrl";
import {kwStArr}              from "@kwStat/kwStArr";
import {kwStObj}              from "@kwStat/kwStObj";
import {kwStInit}             from "@kwUiStat/kwUiStInit";
import {kwStMsg}              from "@kwStat/kwStMsg";
import {kwStVal}              from "@kwStat/kwStVal";
import {kwStView}             from "@kwUiStat/kwUiStView";



export abstract class kwUiCtrlPageMsgFltrUrl extends kwUiCtrlPageMsgFltr
{

    protected constructor(
        srvcAttrs: kwStVal,
        srvcDisp: kwStObj,
        srvcInit: kwStInit,
        srvcView: kwStView,
        srvcData: kwStArr,
        srvcFcty: kwFctyMsg,
        srvcMsg: kwStMsg  )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        this.retrieveFltrData();
    }

    protected abstract retrieveFltrData(): void;

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        return super.init();
    }

    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        super.destroy();
    }

    protected createPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createPage");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }

        this.page = new kwPageFltrUrl(this.type);
        if (!this.page.init())
        {
            console.error(log.errInit("page"));
            return false;
        }

        return true;
    }

}
*/
