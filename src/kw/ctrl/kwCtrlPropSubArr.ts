/**********************************************************************
 *
 * kw/ctrl/kwCtrllPropSubArr
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
import {kw }                from "@kw/kw";
import {kwCtrlPropSub }     from "./kwCtrlPropSub";
import {kwLog }             from "@kw/kwLog";
import {kwSt }              from "@kwStat/kwSt";
import {kwStArr}            from "@kwStat/kwStArr";



export abstract class kwCtrlPropSubArr extends kwCtrlPropSub
{

    protected constructor(
        src: kwSt,
        dst: kwStArr,
        sProp: string )
    {
        super(src, dst, sProp);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected check(data: kwSt): void
    {
        const log: kwLog = new kwLog(this.sClass, "check");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            //console.info(this.sClass, "::check() data is empty");
            super.check(data);
            return;
        }

        const row = data.getFirst();
        if (!kw.isValid(row))
        {
            //console.info(this.sClass, "::check() row is empty");
            super.check(data);
            return;
        }

        super.check(row);
    }
}
