/**********************************************************************
 *
 * kw/ctrl/kwCtrlSubApi
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
import {kw}             from "@kw/kw";
import {kwApi}          from "@kwClass/api/kwApi";
import {kwBsApis}       from "@kwClass/BsApis/kwBsApis";
import {kwCtrlSub}      from "./kwCtrlSub";
import {kwLog}          from "@kw/kwLog";
import {kwStApi}        from "@kwStat/kwStApi";
import {kwStObj}        from "@kwStat/kwStObj";



export abstract class kwCtrlSubApi extends kwCtrlSub
{

    protected constructor(
        src: kwStObj,
        dst: kwStApi,
        private sProp: string )
    {
        super(src, dst);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on


    protected preLoad(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "preLoad");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        //const info: kwBsApis = <kwBsApis>data;
        //if (!kwBsApis.is(info))
        //{
        //    console.error(log.invalid("info"));
        //    return false;
        //}
        //console.info(log.isObj("info"), info);


        if (!kw.isString(this.sProp))
        {
            //console.info(log.invalid("sProp"));
            return false;
        }
        //console.info(log.isObj("sProp"), this.sProp);


        const val = data.getItem(this.sProp);
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);


        const api = new kwApi(val);
        if (!api.init())
        {
            console.error(log.errCreate("val"));
            return false;
        }
        //console.info(log.isObj("api"), api);


        return this.load(api);
    }
}
