/**********************************************************************
 *
 * kw/ctrl/kwCtrllPropSubApi
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
import {kwApi }            from "@kwClass/api/kwApi";
import {kwApiType}         from "@kwClass/api/kwApiType";
import {kwCtrlPropSub }    from "./kwCtrlPropSub";
import {kwLog }            from "@kw/kwLog";
import {kwStApi }          from "@kwStat/kwStApi";
import {kwStObj }          from "@kwStat/kwStObj";



export abstract class kwCtrlPropSubApi extends kwCtrlPropSub
{

    protected constructor(
        src: kwStObj,
        dst: kwStApi,
        sProp: string )
    {
        super(src, dst, sProp);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected createObj(data: object): any
    {
        const log: kwLog = new kwLog(this.sClass, "createObj");
        //console.log(log.called());

        if (kw.isNull(data))
        {
            console.error(log.errInit("page"));
            return;
        }
        //console.info(this.sClass, "::createObj() data is [", data, "]");

        const obj: kwApi = new kwApi(<kwApiType>data);
        if (!obj.init())
        {
            console.error(this.sClass, "::createObj() error creating");
            return null;
        }
        //console.info(this.sClass, "::createObj() obj is [", obj, "]");

        return obj;

    }

}
