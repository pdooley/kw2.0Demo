/**********************************************************************
 *
 * kw/ctrl/kwCtrlPropStatSmpl
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

import {kwCtrlPropStat}   from "./kwCtrlPropStat";
import {kwLog }            from "@kw/kwLog";
import {kwSt}               from "@kwStat/kwSt";
import {kwStSmpl }         from "@kwStat/kwStSmpl";
import {kwStStat}          from "@kwStat/kwStStat";



export abstract class kwCtrlPropStatSmpl extends kwCtrlPropStat
{
    protected constructor(
        src: kwSt,
        dst: kwStSmpl,
        sProp: string,
        nStat: number,
        srvcStat: kwStStat  )
    {
        super(
            src,
            dst,
            sProp,
            nStat,
            srvcStat    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }
}
