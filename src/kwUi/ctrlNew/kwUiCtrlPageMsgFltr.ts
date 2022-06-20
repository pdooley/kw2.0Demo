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
/*
import {kw}                         from "@kw/kw"
import {kwUiCtrlPageMsg}              from "./kwUiCtrlPageMsg";
import {kwFctyMsg}                  from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                      from "@kw/kwLog";
import {kwStArr}                    from "@kwStat/kwStArr";
import {kwStObj}                    from "@kwStat/kwStObj";
import {kwStInit}                   from "@kwUiStat/kwUiStInit";
import {kwStMsg}                    from "@kwStat/kwStMsg";
import {kwStVal}                    from "@kwStat/kwStVal";
import {kwStView}                   from "@kwUiStat/kwUiStView";


export abstract class kwUiCtrlPageMsgFltr extends kwUiCtrlPageMsg
{



    protected constructor(
        srvcAttrs: kwStVal,
        srvcDisp: kwStObj,
        srvcInit: kwStInit,
        srvcView: kwStView,
        srvcData: kwStArr,
        srvcFcty: kwFctyMsg,
        srvcMsg:  kwStMsg   )
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg    );

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

}
*/
