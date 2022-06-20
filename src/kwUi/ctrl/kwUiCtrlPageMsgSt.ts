/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsgSt.ts
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
import {Subject}                from "rxjs";
import {takeUntil}              from "rxjs/operators";

import {kw}                     from "@kw/kw"
import {kwFctyMsg}              from "@kwFcty/msg/kwFctyMsg";
import {kwLog}                  from "@kw/kwLog";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwStMsg}                from "@kwStat/kwStMsg";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwUiStInit}               from "@kwUiStat/kwUiStInit";
import {kwUiStView}               from "@kwUiStat/kwUiStView";
import {kwUiCtrlPageMsg}        from "./kwUiCtrlPageMsg";
import {kwStVal} from "@kwStat/kwStVal";


export abstract class kwUiCtrlPageMsgSt extends kwUiCtrlPageMsg
{

    private unSubFltr: Subject<any>;


    protected constructor(
        srvcAttrs:  kwStArr,
        srvcDisp:   kwStObj,
        srvcInit:   kwUiStInit,
        srvcView:   kwUiStView,
        srvcData:   kwStArr,
        srvcFcty:   kwFctyMsg,
        srvcMsg:    kwStMsg,
        private srvcFltr:   kwStVal )
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
        const log: kwLog = new kwLog(this.sClass, "initPage");
        //console.log(log.called());

        if (!this.subscribeFltr())
        {
            console.error(log.errSub("fltr"));
            return false;
        }

        return super.init();
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        this.unSubscribeFltr();

        super.destroy();
    }


    protected loadData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        this.bLoadData = true;

        return true;
    }

    protected subscribeFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeFltr");
        //console.log(log.called());

        if (this.bSubFltr)
        {
            return true;
        }

        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return;
        }

        const sMsg = "!!!!DEPENDANCY WARNING!!!! - fltr is not loaded."
            + "You may wait a long time "
            + "until somebody decides to retrieve it for you.";
        //console.log(log.info(sMsg));
        //console.warn(log.info(sMsg));
        console.error(log.info(sMsg));


        this.unSubFltr = new Subject();

        this.srvcFltr.val
            .pipe(takeUntil(this.unSubFltr))
            .subscribe( (val) => {
                this.createMsg(val)
            });

        this.bSubFltr = true;

        return true;
    }

    protected unSubscribeFltr(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubscribeFltr");
        //console.log(log.called());

        if (kw.isValid(this.unSubFltr))
        {
            this.unSubFltr.next();
            this.unSubFltr.complete();
        }
    }


}
