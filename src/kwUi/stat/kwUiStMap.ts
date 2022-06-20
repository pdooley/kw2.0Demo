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
import * as _               from 'lodash';

import {kw}                 from "@kw/kw";
import {kwLog}              from "@kw/kwLog";
import {kwSt}               from "@kw/stat/kwSt";
import {kwStTrace}          from "@kw/stat/kwStTrace";


const sDATA_TYPE: string    = "Map";

//@formatter:off



export abstract class kwUiStMap extends kwSt
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

        if (!_.isMap(data))
        {
            //console.info(log.invalid("data"));
            this.subject.next(data);
            return
        }

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: Map<string, object>)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!_.isMap(data))
        {
            console.error(log.invalid("data"));
            return;
        }

        super.set(data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwUiStMap);
    }
}
