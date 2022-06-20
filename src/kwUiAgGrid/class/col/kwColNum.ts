/**********************************************************************
 *
 * kwUiAgGrid/class/col/kwColNum.ts
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
import {ColDef}             from 'ag-grid-community';

import {kw}                 from "@kw/kw";
import {kwCol}              from "./kwCol";
import {kweCol}             from "./kweCol";
import {kwLog}              from "@kw/kwLog";
import {kwtColIn}           from "./kwtColIn";
//@formatter:on


export class kwColNum extends kwCol
{
    constructor(private data: kwtColIn)
    {
        super(kweCol.num, data);

        const log: kwLog = new kwLog(this.sClass, "connumuctor");
        //console.log(log.called());
    }

    protected createType(): ColDef
    {
        const log: kwLog = new kwLog(this.sClass, "createType");
        //console.log(log.called());

        if (kw.isNull(this.colIn))
        {
            console.error(log.invalid("colIn"));
            return;
        }
        //console.info("kwCol::init() colIn is ", this.colIn);

       const type: ColDef = {
            field: this.colIn.sField,
            headerName: this.colIn.sText,
            filter: "agNumberColumnFilter"
       };

        return type;
    }

}


