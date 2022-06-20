/**********************************************************************
 *
 * kwUiAgGrid/class/col/kwColDate.ts
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
import {ColDef}                 from 'ag-grid-community';

import * as moment              from 'moment';

import {kw}                     from "@kw/kw";
import {kwCol}                 from "./kwCol";
import {kweCol}                from "./kweCol";
import {kwLog}                  from "@kw/kwLog";
import {kwtColIn}              from "./kwtColIn";
//@formatter:on


export class kwColDate extends kwCol
{
    constructor(private data: kwtColIn)
    {
        super(kweCol.date, data);

        const log: kwLog = new kwLog(this.sClass, "constructor");
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

        const type: ColDef =
        {
            field: this.colIn.sField,
            headerName: this.colIn.sText,
            valueFormatter: (data) =>
            {
                const log: kwLog = new kwLog(this.sClass, "createType::valueFormatter()");
                //console.log(log.called());


                if (!kw.isValid(data))
                {
                    console.error(log.invalid("data"));
                    return "Error!";
                }
                //console.info(log.isObj("data"), data);


                const nVal = data.value;
                if (!kw.isNumber(nVal))
                {
                    console.error(log.invalid("nVal"));
                    return "Error";
                }
                //console.info(log.isObj("nVal"), nVal);


                const sVal = moment(nVal).format('LL');
                if (!kw.isString(sVal))
                {
                    console.error(log.invalid("sVal"));
                    return "Error";
                }
                //console.info(log.isObj("sVal"), sVal);

                return sVal;
            }

        };

        return type;
    }

}

/*
const col(data) => moment(data.value).format('LL'),
    filter: "agDateColumnFilter",
    filterParams: {
    comparator: function (filterLocalDateAtMidnight, cellValue)
    {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split("/");
        var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
        if (filterLocalDateAtMidnight.getTime() == cellDate.getTime())
        {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight)
        {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight)
        {
            return 1;
        }
    }
*/
