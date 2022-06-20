/**********************************************************************
 *
 * kw/stat/kwStVal.ts
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
import * as _               from "lodash";

import {kw}               from "@kw/kw";
import {kwLog}            from "@kw/kwLog";
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";

const sDATA_TYPE: string = "Val";

//@formatter:off


export abstract class kwStVal extends kwSt
{
    protected constructor(
        srvcTrace: kwStTrace,
        data?: object )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        //console.info(log.isObj("data"), data);

        // Get the value from the behavior subject
        const valCurr = this.subject.value;
        //console.info(log.isObj("valCurr"), valCurr);

        // Merge the new config
        const valNew = _.merge(null, valCurr, data);

        this.traceInt(valNew);

        // Notify the observers
        this.subject.next(valNew);
    }

    public set(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            return super.set(data);
        }

        if (!kw.isArray(data))
        {
            return super.set(data);
        }

        //console.info(log.info("data is an array - storing only first item.");
        super.set(data[0]);
    }

    public setTag(data)
    {
        const log: kwLog = new kwLog(this.sClass, "setTag");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data);

        const item = this.val;
        if (kw.isNull(item))
        {
            console.error(log.invalid("item"));
            return;
        }
        //console.info(log.isObj("item"), item);

        const sProp = data.sProp;
        if (!kw.isString(sProp))
        {
            console.error(log.invalid("sProp"));
            return;
        }
        //console.info(log.isObj("sProp"), sProp);

        item[sProp] = data.val;
        //console.info(log.isObj("item"), item);

        super.set(item);
    }

}
