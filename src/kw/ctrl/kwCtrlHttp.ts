/**********************************************************************
 *
 * kw/ctrl/kwCtrlHttp.ts
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
import {Subject }          from "rxjs";
import {takeUntil }        from "rxjs/operators";

import {kw }               from "@kw/kw";
import {kwCtrlSub }        from "./kwCtrlSub";
import {kwSt }             from "@kwStat/kwSt";
import {kwHttpMsg }        from "@kwNgHttp/kwHttpMsg";
import {kwLog }            from "@kw/kwLog";
import {kwMsg }            from "@kwClass/msg/kwMsg";
import {kwStMsg }          from "@kwStat/kwStMsg";



export abstract class kwCtrlHttp extends kwCtrlSub
{
    private _unsubscribeHttp: Subject<any>;


    protected constructor(
        src: kwSt,
        dst: kwSt,
        private srvcHttp: kwHttpMsg )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.srvcHttp))
        {
            console.error(log.invalid("srvcHttp"));
            return false;
        }
        //console.info(log.isObj("srvcHttp"), this.srvcHttp);


        if (!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }

        return true;
    }

    protected retrieveMsg(): kwStMsg
    {
        return <kwStMsg>this.src;
    }

    protected handleResult(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "handleResult");
        //console.log(log.called());

        if (!kw.isValid(info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), info);

        super.load(info);
    }

}
