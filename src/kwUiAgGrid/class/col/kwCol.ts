/**********************************************************************
 *
 * kwUiAgGrid/class/col/kwCol.ts
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
import {kweCol}                 from "./kweCol";
import {kwLog}                  from "@kw/kwLog";
import {kwtColIn}               from "./kwtColIn";
//@formatter:on


export abstract class kwCol
{
    protected sClass: string = this.constructor.name;


    private _sStateSt:  string;
    private _type:      ColDef;



    protected constructor(
        private nType: kweCol,
        protected colIn: kwtColIn)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get sStateSt():      string { return this._sStateSt};
    public get type():          ColDef { return this._type};


    protected abstract createType(): ColDef


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (_.isNull(this.colIn))
        {
            console.error(log.invalid("colIn"));
            return false;
        }
        //console.info(log.isObj("colIn"), this.colIn);


        const type = this.createType();
        if (_.isNull(type))
        {
            console.error(log.errCreate("type"));
            return false;
        }
        //console.info(log.isObj("type"), type);
        this._type = type;


        if (!this.retrieveState())
        {
            console.error(log.errLoad("sStateSt"));
            return false;
        }


        return true;
    }


    public retrieveState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveState");
        //console.log(log.called());


        if (!kw.isValid(this.colIn))
        {
            console.error(log.invalid("colIn"));
            return false;
        }
        //console.info(log.isObj("colIn"), this.colIn);


        const type: kwtColIn = <kwtColIn>this.colIn;


        const sStateSt = type.sStateSt;
        if (!kw.isString(sStateSt))
        {
            //console.info(log.empty("sStateSt"));
            return true;
        }
        //console.info(log.isObj("sStateSt"), sStateSt);


        this._sStateSt = sStateSt;


        return true;
    }


    public toString(): string
    {
        return this.constructor.name;
    }


    public static is(obj: object): boolean
    {
        return kw.is(obj, kwCol)
    }

}

