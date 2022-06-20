/**********************************************************************
 *
 * kw/ctrl/kwCtrlPropStat
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
import {kwCtrlProp }       from "./kwCtrlProp";
import {kwLog }            from "@kw/kwLog";
import {kwSt }             from "@kwStat/kwSt";
import {kwStStat}         from "@kwStat/kwStStat";



export abstract class kwCtrlPropStat extends kwCtrlProp
{

    private _unsubscribeAll: Subject<any>;


    protected constructor(
        src: kwSt,
        dst: kwSt,
        sProp: string,
        private nStat: number,
        private srvcStat: kwStStat  )
    {
        super(src, dst, sProp);

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
            console.error(log.errInit("page"));
            return false;
        }
        //console.info(this.sClass, "::init() nStat is ", this.nStat);

        if (!kw.isValid(this.srvcStat))
        {
            console.error(log.errInit("page"));
            return false;
        }

        if (!super.init())
        {
            console.error(log.errInit("page"));
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

        this.destroy();
    }

    protected check(stat: kwStStat): void
    {
        const log: kwLog = new kwLog(this.sClass, "check");
        //console.log(log.called());

        if (kw.isNull(stat))
        {
            //console.info(this.sClass, "::check() data is empty");
            return;
        }

        if (!kw.isNumber(this.nStat))
        {
            console.error(log.errInit("page"));
            return;
        }
        //console.info(this.sClass, "::check() nStat is ", this.nStat);

        if (!stat.matches(this.nStat))
        {
            //console.info(this.sClass, "::check() status incorrect");
            return;
        }
        //console.info(this.sClass, "::check() status correct");


        this.load(stat);
    }


}
