/**********************************************************************
 *
 * kw/class/page/kwPageFltrSt.ts
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
import {Subject}                    from "rxjs";
import {takeUntil}                  from "rxjs/operators";

import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwPageEnum}                 from "@kwClass/page/kwPageEnum";
import {kwPageFltr}                 from "./kwPageFltr";
import {kwPageType}                 from "@kwClass/page/kwPageType";
import {kwStVal}                    from "@kwStat/kwStVal";


const nTYPE: kwPageEnum = kwPageEnum.fltrSt;



export class kwPageFltrSt extends kwPageFltr
{


    private unSubFltr: Subject<any>;



    public constructor(
        type:               kwPageType,
        private srvcFltr:   kwStVal     )
    {
        super(
            nTYPE,
            type     );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return false;
        }
        //console.info(log.isObj("srvcFltr"), this.srvcFltr);


        return super.init();
    }

    public destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());


        this.unSubscribeFltr();

        super.destroy();
    }

    protected loadFltr(val?: kwStVal): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        return this.subscribeFltr();
    }

    public subscribeFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "subscribeFltr");
        //console.log(log.called());

        if (kw.isNull(this.srvcFltr))
        {
            console.error(log.invalid("srvcFltr"));
            return false;
        }
        //console.info(log.isObj("srvcFltr"), this.srvcFltr);


        this.unSubFltr = new Subject();

        this.srvcFltr.val
            .pipe(takeUntil(this.unSubFltr))
            .subscribe( (val) => {
                this.createMsg(val);
            });

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
