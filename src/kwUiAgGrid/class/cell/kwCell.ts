/**********************************************************************
 *
 * kwUiAgGrid/class/cell/kwCell.ts
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
import * as _                   from "lodash";

import {ColDef}                 from 'ag-grid-community';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwtCellIn}              from "./kwtCellIn";
import {kwtCellDef}             from "@kwUiClass/cellDef/kwtCellDef";
import {kwtStateInfo}           from "@kwUiAgGrid/class/cols/kwtStateInfo";
//@formatter:on


const sARR: string              = "arr";


export class kwCell
{
    protected sClass: string = this.constructor.name;


    private _def:       ColDef;
    private _row:       object;
    private _sField:    string;
    private _sState:    string;
    private _state:     object;
    private _val:       kwtCellDef;


    public get def():       ColDef  { return this._def}
    public get row():       object  { return this._row}
    public get sField():    string  { return this._sField}
    public get sState():    string  { return this._sState}
    public get state():     object  { return this._state}
    public get val():       any     { return this._val}


    constructor(
        private cell: kwtCellIn,
        private stateMap: object,
        private stateInfo: kwtStateInfo[]  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (_.isNull(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        if (_.isNull(this.stateMap))
        {
            console.error(log.invalid("stateMap"));
            return false;
        }
        //console.info(log.isObj("stateMap"), this.stateMap);


        if (_.isNull(this.stateInfo))
        {
            console.error(log.invalid("stateInfo"));
            return false;
        }
        //console.info(log.isObj("stateInfo"), this.stateInfo);


        if (!this.retrieveDef())
        {
            console.error(log.errLoad("def"));
            return false;
        }


        if (!this.retrieveField())
        {
            console.error(log.errLoad("field"));
            return false;
        }


        if (!this.retrieveRow())
        {
            console.error(log.errLoad("row"));
            return false;
        }


        if (!this.retrieveState())
        {
            console.error(log.errLoad("state"));
            return false;
        }


        if (!this.retrieveVal())
        {
            console.error(log.errLoad("val"));
            return false;
        }


        return true;
    }


    private retrieveDef(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveDef");
        //console.log(log.called());

        if (_.isNull(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const def: ColDef = this.cell.def;
        if (!kw.isValid(def))
        {
            console.error(log.invalid("def"));
            return false;
        }
        //console.info(log.isObj("def"), def);
        this._def = def;


        return true;
    }


    private retrieveField(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveField");
        //console.log(log.called());

        if (!kw.isValid(this._def))
        {
            console.error(log.invalid("_def"));
            return false;
        }
        //console.info(log.isObj("_def"), this._def);


        const sField: string = this._def.field;
        if (!kw.isValid(sField))
        {
            console.error(log.errLoad("sField"));
            return false;
        }
        //console.info(log.isObj("sField"), sField);
        this._sField = sField;


        return true;
    }


    private retrieveRow(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveRow");
        //console.log(log.called());


        if (!kw.isValid(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const row: object = this.cell.row;
        if (!kw.isValid(row))
        {
            console.error(log.errLoad("row"));
            return false;
        }
        //console.info(log.isObj("row"), row);
        this._row = row;


        return true;
    }


    private retrieveState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveState");
        //console.log(log.called());


        if (!kw.isValid(this.stateMap))
        {
            console.error(log.invalid("stateMap"));
            return false;
        }
        //console.info(log.isObj("stateMap"), this.stateMap);


        if (!kw.isValid(this.stateInfo))
        {
            console.error(log.invalid("stateInfo"));
            return false;
        }
        //console.info(log.isObj("stateInfo"), this.stateInfo);


        if (!kw.isString(this.sField))
        {
            console.error(log.invalid("sField"));
            return false;
        }
        //console.info(log.isObj("sField"), this.sField);


        const sState: string = this.stateMap[this.sField];
        if (!kw.isValid(sState))
        {
            //console.info(log.empty("sState"));
            return true;
        }
        //console.info(log.isObj("sState"), sState);
        this._sState = sState;


        const data: any = this.row["data"];
        if (!kw.isValid(data))
        {
            //console.info(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        const state = data[sARR][sState];
        if (!kw.isValid(state))
        {
            //console.info(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), state);


        this._state = state;

        return true;
    }


    private retrieveVal(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveVal");
        //console.log(log.called());

        if (_.isNull(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const data: any = this.cell.data;
        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);


        let val: kwtCellDef = new kwtCellDef();

        if (kw.isNumber(data))
        {
            val.hours = data;
            val.name = "N/A";
            val.reason = "";
        }
        else
        {
            val = <kwtCellDef>data;
        }
        //console.info(log.isObj("val"), val);
        this._val = data;


        return true;
    }



    public toString(): string
    {
        return this.constructor.name;
    }


    public static is(obj: object): boolean
    {
        return kw.is(obj, kwCell)
    }

}

