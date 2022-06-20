/**********************************************************************
 *
 * kw/ctrl/kwCtrlSub.ts
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
import {Subject }      from "rxjs";
import {takeUntil }    from "rxjs/operators";

import {kw }           from "@kw/kw";
import {kwCtrl }       from "@kwCtrl/kwCtrl";
import {kwLog }        from "@kw/kwLog";
import {kwSt }         from "@kwStat/kwSt";
import {kwMsg} from "@kwClass/msg/kwMsg";


export abstract class kwCtrlSub extends kwCtrl
{

    private _unsubscribeAll: Subject<any>;


    protected constructor(
        protected src: kwSt,
        protected dst: kwSt    )
    {
        super(
            src,
            dst );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract preLoad(data: any): boolean;

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


        if (kw.isNull(this.src))
        {
            console.error(log.errInit("src"));
            return;
        }
        //console.info(log.isObj("srvSrc"), this.src);


        this._unsubscribeAll = new Subject();

        this.src.val
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe( (val) => {
                this.handle(val)
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

        this.destroy();
    }

    private handle(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "handle");
        //console.log(log.called());


        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            this.load(null);
            return;
        }
        //console.info(log.isObj("data"), data);


        return this.preLoad(data);
    }
}
