/**********************************************************************
 *
 * kwUiAgGrid/class/col/kwColHour.ts
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

import {kw}                     from "@kw/kw";
import {kwCol}                  from "./kwCol";
import {kweCol}                 from "./kweCol";
import {kwLog}                  from "@kw/kwLog";
import {kwtColHour}             from "./kwtColHour";
import {kwtColIn}               from "./kwtColIn";
//@formatter:on


const sMAP: string              = "map";
const sNAME: string             = "name";

export class kwColHour extends kwCol
{
    constructor(private data: kwtColIn)
    {
        super(kweCol.hour, data);

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
        //console.info(log.isObj("colIn"), this.colIn);

        const sStateSt = this.colIn.sStateSt;
        if (!kw.isString(sStateSt))
        {
            console.error(log.invalid("sStateSt"));
            return;
        }
        //console.info(log.isObj("sStateSt"), sStateSt);

        const type: ColDef =
        {
            field: this.colIn.sField,
            headerName: this.colIn.sText,
            cellEditorParams: sStateSt,
            valueFormatter: (data) =>
            {
                const sMethod: string = "createType::valueFormatter()";
                const log: kwLog = new kwLog(this.sClass, sMethod);
                //console.log(log.called());


                if (!kw.isValid(data))
                {
                    console.error(log.invalid("data"));
                    return "Error!";
                }
                //console.info(log.isObj("data"), data);

                const colDef = data.colDef;
                if (!kw.isValid(colDef))
                {
                    console.error(log.invalid("colDef"));
                    return "Error!";
                }
                //console.info(log.isObj("colDef"), colDef);

                const rec = data.data;
                if (!kw.isValid(rec))
                {
                    console.error(log.invalid("rec"));
                    return "Error!";
                }
                //console.info(log.isObj("rec"), rec);


                const info = rec.data;
                if (!kw.isValid(info))
                {
                    console.error(log.invalid("info"));
                    return "Error!";
                }
                //console.info(log.isObj("info"), info);


                const sState = colDef.cellEditorParams;
                if (!kw.isString(sState))
                {
                    console.error(log.invalid("sState"));
                    return 0;
                }
                //console.info(log.isObj("sState"), sState);


                const maps: Map<string, object>[] = info[sMAP];
                if (!kw.isValid(maps))
                {
                    console.error(log.invalid("maps"));
                    return "Error!";
                }
                //console.info(log.isObj("maps"), maps);


                const map: Map<string, object> = maps[sState];
                if (!kw.isMap(map))
                {
                    console.error(log.invalid("map"));
                    return "Error!";
                }
                //console.info(log.isObj("map"), map);


                const val = data.value;
                if (!kw.isValid(val))
                {
                    return 0;
                }


                if (kw.isNumber(val))
                {
                    return val;
                }


                const type: kwtColHour = <kwtColHour>val;

                const nHours = type.hours;
                if (nHours > 0)
                {
                    return nHours;
                }


                const sName = type.name;
                if (!kw.isString(sName))
                {
                    console.error(log.invalid("sName"));
                    return 0;
                }


                const mapRec: object = map.get(sName);
                if (!kw.isValid(mapRec))
                {
                    console.error(log.invalid("mapRec"));
                    return 0;
                }


                const sVal = mapRec[sNAME];
                if (!kw.isString(sVal))
                {
                    console.error(log.invalid("sVal"));
                    return 0;
                }


                return sVal;
            }
        };

        return type;
    }

}

