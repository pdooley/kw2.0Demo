/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPage.ts
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

import {kwLog}              from "@kw/kwLog";
import {kwStArr}            from "@kwStat/kwStArr";
import {kwUiStInit}           from "@kwUiStat/kwUiStInit";
import {kwStObj}            from "@kwStat/kwStObj";
import {kwUiStView}           from "@kwUiStat/kwUiStView";
import {kwUiCtrlPage}       from "./kwUiCtrlPage";


export abstract class kwUiCtrlPageSmpl extends kwUiCtrlPage
{

    protected constructor(
        srvcAttrs: kwStArr,
        srvcDisp: kwStObj,
        srvcInit: kwUiStInit,
        srvcView: kwUiStView )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected initPage(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initPage");
        //console.log(log.called());

        return true;
    }

    protected loadData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());
        return true;
    }

    protected parseData(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected subscribeData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeData");
        //console.log(log.called());
        this.bSubData = true;
        return true;
    }

    protected unSubscribeData(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeData");
        //console.log(log.called());
    }

}
