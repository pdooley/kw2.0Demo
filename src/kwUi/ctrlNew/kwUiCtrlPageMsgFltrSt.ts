/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgSt.ts
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
import {kw}                         from "@kw/kw"
import {kwUiCtrlPageMsgFltr}          from "./kwUiCtrlPageMsgFltr";
import {kwFctyMsg}                  from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                      from "@kw/kwLog";
import {kwStArr}                    from "@kwStat/kwStArr";
import {kwStObj}                    from "@kwStat/kwStObj";
import {kwStInit}                   from "@kwUiStat/kwUiStInit";
import {kwStMsg}                    from "@kwStat/kwStMsg";
import {kwStVal}                    from "@kwStat/kwStVal";
import {kwStView}                   from "@kwUiStat/kwUiStView";
import {kwPageFltrSt}               from "@kwClass/page/kwPageFltrSt";


export abstract class kwUiCtrlPageMsgFltrSt extends kwUiCtrlPageMsgFltr
{



    protected constructor(
        srvcAttrs:  kwStVal,
        srvcDisp:   kwStObj,
        srvcInit:   kwStInit,
        srvcView:   kwStView,
        srvcData:   kwStArr,
        srvcFcty:   kwFctyMsg,
        srvcMsg:    kwStMsg,
        private srvcFltr:   kwStVal)
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView,
            srvcData,
            srvcFcty,
            srvcMsg  );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return false;
        }

        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }

        return true;
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

        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return false;
        }

        this.page = new kwPageFltrSt(this.type, this.srvcFltr);
        if (!this.page.init())
        {
            console.error(log.errInit("page"));
            return false;
        }

        return true;
    }

}
*/
