/**********************************************************************
 *
 * kw/ctrl/kwCtrlMsgSub.ts
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
import {kwCtrlMsg }        from "@kwCtrl/kwCtrlMsg";
import {kwFctyMsg }        from "@kwFcty/msg/kwFctyMsg";
import {kwLog }            from "@kw/kwLog";
import {kwStMsg }          from "@kwStat/kwStMsg";
import {kwStStat}         from "@kwStat/kwStStat";



export abstract class kwCtrlMsgStat extends kwCtrlMsg
{

    protected sClass: string = this.constructor.name;


    private _unsubscribeAll: Subject<any>;


    protected constructor(
        src: kwFctyMsg,
        dst: kwStMsg,
        private srvcStat: kwStStat,
        private nStat: number  )
    {
        super(
            src,
            dst );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isNumber(this.nStat))
        {
            console.error(log.invalid("nStat"));
            return;
        }
        //console.info(log.is("nStat", this.nStat));


        if(!super.init())
        {
            console.error(log.errInit("this"));
            return false;
        }


        this._unsubscribeAll = new Subject();

        this.srvcStat.val
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe( (val) => {
                this.check(val)
            });

        return true;
    }

    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());

        if (kw.isValid(this._unsubscribeAll))
        {
            this._unsubscribeAll.next();
            this._unsubscribeAll.complete();
        }

        super.destroy();
    }

    protected check(stat: kwStStat): void
    {
        const log: kwLog = new kwLog(this.sClass, "check");
        //console.log(log.called());


        if (kw.isNull(stat))
        {
            console.error(log.invalid("stat"));
            return;
        }
        //console.info(log.isObj("stat"), stat);


        if (!kw.isNumber(this.nStat))
        {
            console.error(log.invalid("nStat"));
            return;
        }
        //console.info(log.is("nStat", this.nStat));


        if (!stat.matches(this.nStat))
        {
            //console.info(log.invalid("nStat"));
            return;
        }
        //console.info(log.info("status correct"));


        this.load(stat);
    }

}
