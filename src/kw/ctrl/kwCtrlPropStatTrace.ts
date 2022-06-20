/**********************************************************************
 *
 * kw/ctrl/kwCtrlPropStatTrace
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

import {kwCtrlPropStat}     from "./kwCtrlPropStat";
import {kwLog }             from "@kw/kwLog";
import {kwStBs}             from "@kwStat/kwStBs";
import {kwStStat}           from "@kwStat/kwStStat";
import {kwStTrace}          from "@kwStat/kwStTrace";



export abstract class kwCtrlPropStatTrace extends kwCtrlPropStat
{


    protected constructor(
        src: kwStBs,
        dst: kwStTrace,
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
