/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgAll.ts
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
import {kw}                         from "@kw/kw";
import {kwUiCtrlPageMsg}              from "./kwUiCtrlPageMsg";
import {kwFctyMsg}                  from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                      from "@kw/kwLog";
import {kwPageAll}                  from "@kwClass/page/kwPageAll";
import {kwStArr}                    from "@kwStat/kwStArr";
import {kwStObj}                    from "@kwStat/kwStObj";
import {kwStInit}                   from "@kwUiStat/kwUiStInit";
import {kwStMsg}                    from "@kwStat/kwStMsg";
import {kwStVal}                    from "@kwStat/kwStVal";
import {kwStView}                   from "@kwUiStat/kwUiStView";


export abstract class kwUiCtrlPageMsgAll extends kwUiCtrlPageMsg
{

    dataGrid: object[];


    protected constructor(
        srvcAttrs:  kwStVal,
        srvcDisp:   kwStObj,
        srvcInit:   kwStInit,
        srvcView:   kwStView,
        srvcData:   kwStArr,
        srvcFcty:   kwFctyMsg,
        srvcMsg:    kwStMsg    )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }

        return true;
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

        this.page = new kwPageAll(this.type);
        if (!this.page.init())
        {
            console.error(log.errInit("page"));
            return false;
        }

        return true;
    }

    protected updateElmt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "updateElmt");
        //console.log(log.called());

        //console.info(log.isObj("data"), data, "]");

        this.dataGrid = data;
        //console.info(log.isObj("dataGrid"), this.dataGrid, "]");

        super.updateElmt(data);
    }

}
*/
