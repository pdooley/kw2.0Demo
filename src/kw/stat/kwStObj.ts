/**********************************************************************
 *
 * kw/stat/kwStObj.ts
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

import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwSt}               from "./kwSt";
import {kwStTrace}          from "./kwStTrace";


const sDATA_TYPE: string = "Obj";

//@formatter:off


export abstract class kwStObj extends kwSt
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

        if (kw.isValid(data))
        {
            //console.info(log.isObj("data"), data);
        }
        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
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



}
