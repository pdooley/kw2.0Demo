/**********************************************************************
 *
 * kw/stat/kwStParam.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off

import {kw}               from '../kw';
import {kwLog}            from "@kw/kwLog";
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";

const sDATA_TYPE: string = "Param";

//@formatter:off


export abstract class kwStParam extends kwSt
{
    protected constructor(
        srvcTrace: kwStTrace,
        sProp: string,
        data?: object)
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

        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStParam);
    }
}
