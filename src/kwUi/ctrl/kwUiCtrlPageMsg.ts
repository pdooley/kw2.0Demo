/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPageMsg.ts
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
import {kwMsg}                  from "@kwClass/msg/kwMsg";
import {kwUiCtrlPage}           from "./kwUiCtrlPage";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwStVal}                from "@kwStat/kwStVal";
import {kwUiStInit}             from "@kwUiStat/kwUiStInit";
import {kwStMsg}                from "@kwStat/kwStMsg";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwUiStView}             from "@kwUiStat/kwUiStView";


const sID: string = "id";


export abstract class kwUiCtrlPageMsg extends kwUiCtrlPage
{

    private unSub: Subject<any>;


    protected bSubFltr: boolean      = false;

    protected constructor(
        srvcAttrs: kwStArr,
        srvcDisp: kwStObj,
        srvcInit: kwUiStInit,
        srvcView: kwUiStView,
        private srvcData: kwStArr,
        private srvcFcty: kwFctyMsg,
        private srvcMsg: kwStMsg,)
    {
        super(
            srvcAttrs,
            srvcDisp,
            srvcInit,
            srvcView);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        console.log(log.called());
    }


    protected abstract subscribeFltr(): boolean;
    protected abstract unSubscribeFltr(): void;


//@formatter:on


    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        console.log(log.called());

        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return false;
        }

        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }

        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }

        if (!this.subscribeFltr())
        {
            return false;
        }

        return super.init();
    }

    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        console.log(log.called());

        this.unSubscribeFltr();

        super.destroy();
    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        console.log(log.called());
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        console.log(log.called());
    }

    protected createMsg(fltr?: kwStVal): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createMsg");
        console.log(log.called());

        if (kw.isNull(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }

        if (kw.isNull(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }

        let msg: kwMsg;
        if (kw.isNull(fltr))
        {
            console.info(log.empty("fltr"));
            msg = this.srvcFcty.all();
        }
        else
        {
            console.info(log.isObj("fltr"), fltr);

            const val:any  = fltr[sID];
            if (!kw.isValid(val))
            {
                console.error(log.invalid("val"));
                return false;
            }
            console.info(log.is("val", val));

            msg = this.srvcFcty.get(val);
        }

        if (!kw.isValid(msg))
        {
            console.error(log.errCreate("msg"));
            return false;
        }
        console.info(log.is("msg", msg));

        this.srvcMsg.val = msg;

        return true;

    }

    protected subscribeData(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeData");
        console.log(log.called());

        if (this.bSubData)
        {
            return true;
        }

        if (kw.isNull(this.srvcData))
        {
            console.error(log.invalid("srvcData"));
            return false;
        }


        this.unSub = new Subject();

        this.srvcData.val
            .pipe(takeUntil(this.unSub))
            .subscribe( (val) => {
                this.updateElmt(val)
            });

        this.bSubData = true;

        return true;
    }

    protected unSubscribeData(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubscribeData");
        console.log(log.called());

        if (kw.isValid(this.unSub))
        {
            this.unSub.next();
            this.unSub.complete();
        }
    }

}
