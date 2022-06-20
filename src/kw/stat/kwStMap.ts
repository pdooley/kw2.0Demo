/**********************************************************************
 *
 * kw/stat/kwStMap.ts
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
import {kw}               from "@kw/kw";
import {kwLog}            from "@kw/kwLog";
import {kwMap}            from "@kwClass/kwMap";
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";


const sDATA_TYPE: string = "Map";

//@formatter:off



export abstract class kwStMap extends kwSt
{
    protected constructor(
        srvcTrace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            //console.info(log.invalid("data"));
            this.subject.next(data);
            return
        }

        if (!kwMap.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: kwMap)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!kwMap.is(data))
        {
            console.error(log.invalid("data"));
            return;
        }

        super.set(data);
    }

    public getByCode(sCode: string): object
    {
        const log: kwLog = new kwLog(this.sClass, "getByCode");
        //console.log(log.called());

        if (!kw.isString(sCode))
        {
            console.error(log.invalid("sCode"));
            return;
        }
        //console.info(log.is("sCode", sCode));

        const val = this.val;
        if (!kwMap.is(val))
        {
            console.error(log.empty("sCode"));
            return;
        }

        return val.getByCode(sCode);
    }

    public getById(nId: number): object
    {
        const log: kwLog = new kwLog(this.sClass, "getById");
        //console.log(log.called());

        if (!kw.isNumber(nId))
        {
            console.error(log.invalid("nId"));
            return;
        }
        //console.info(log.is("nId", nId));

        const val = this.val;
        if (!kwMap.is(val)) {
            console.error(log.empty("val"));
        }

        return val.getById(nId);
    }

     public static is(val: object): boolean
    {
        return kw.is(val, kwStMap);
    }
}
