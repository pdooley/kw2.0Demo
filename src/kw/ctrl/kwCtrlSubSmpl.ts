/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubSmpl
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
import {kw }               from "@kw/kw";
import {kwCtrlSub }        from "./kwCtrlSub";
import {kwLog }            from "@kw/kwLog";
import {kwStSmpl }         from "@kwStat/kwStSmpl";
import {kwStVal }          from "@kwStat/kwStVal";



export abstract class kwCtrlSubSmpl extends kwCtrlSub
{

    protected constructor(
        src: kwStVal,
        dst: kwStSmpl,
        private sProp: string )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on


    protected check(data: any): void
    {
        this.load(data);
    }

    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        if (!kw.isString(this.sProp))
        {
            console.error(log.invalid("sProp"));
            return false;
        }
        //console.info(log.is("sProp", this.sProp));


        const val: any = data[this.sProp];
        if (!kw.isValid(val))
        {
            //console.info(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);

        return this.load(val);
    }
}
