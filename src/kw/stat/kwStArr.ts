/**********************************************************************
 *
 * kw/stat/kwStArr.ts
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
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";
import {kwApi} from "@kwClass/api/kwApi";
//@formatter:off


const sDATA_TYPE: string = "Arr";


export abstract class kwStArr extends kwSt
{

    public static is(val: object): boolean
    {
        return kw.is(val, kwStArr);
    }


    protected constructor(
        srvcTrace: kwStTrace,
        private sPropId: string,
        private sType?: string,
        data?: object    )
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

        if (kw.isValid(data))
        {
            if (!kw.isArray(data))
            {
                //console.info(log.isObj("data"),data);
                data = [data];
            }
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        data = kw.isArray(data) ? data : new Array(data);
        this.val = data;
    }

    public get(): any
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());

        if (!kw.isNull(this.sType))
        {
            if (!kw.isString(this.sType) || this.sType.length === 0)
            {
                console.error(log.invalid("length"));
                return null;
            }
        }

        let val = super.get();
        if (kw.isNull(val))
        {
            return val;
        }

        if (!kw.isNull(this.sType))
        {
            if (val.length !== 1)
            {
                console.error(log.invalid("length"));
                return null;
            }

            val = val[0][this.sType];
        }

        return val;
    }

    public getFirst(): any
    {
        const log: kwLog = new kwLog(this.sClass, "getFirst");
        //console.log(log.called());

        const data = this.get();
        if (kw.isNull(data))
        {
            return null;
        }

        if (!kw.isArray(data))
        {
            console.error(log.invalid("data"));
            return data;
        }

        if (data.length === 0)
        {
            return null;
        }

        return data[0];
    }

    public getId(): string
    {
        const log: kwLog = new kwLog(this.sClass, "getId");
        //console.log(log.called());

        if (!kw.isString(this.sPropId))
        {
            console.error(log.invalid("sPropId"));
            return null;
        }
        //console.info(log.is("sPropId", this.sPropId));

        const rec = this.getFirst();
        if (kw.isNull(rec))
        {
            console.error(log.invalid("rec"));
            return null;
        }
        //console.info(log.is("rec", rec));

        const sId = rec[this.sPropId];
        if (!kw.isString(sId))
        {
            console.error(log.invalid("sId"));
            return null;
        }
        //console.info(log.is("sId", sId));

        return sId;
    }
}
