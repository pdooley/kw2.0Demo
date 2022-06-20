/**********************************************************************
 *
 * kw/ctrl/kwCtrlPropSub
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
import {kwLog }            from "@kw/kwLog";
import {kwCtrlProp }       from "./kwCtrlProp";
import {kwSt }             from "@kwStat/kwSt";



export abstract class kwCtrlPropSub extends kwCtrlProp
{

    private _unsubscribeAll: Subject<any>;


    protected constructor(
        src: kwSt,
        dst: kwSt,
        sProp: string )
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

        if (!super.init())
        {
            console.error(this.sClass, "::init() error");
            return false;
        }

        this._unsubscribeAll = new Subject();

        this.src.val
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

    protected check(data: any): void
    {
        this.load(data);
    }
}
