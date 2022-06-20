/**********************************************************************
 *
 * kwUiAgGrid/class/defaultCol/kwDefaultCol.ts
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

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwtDefaultCol}          from "./kwtDefaultCol";
//@formatter:on


export class kwDefaultCol
{
    protected sClass: string = this.constructor.name;


    private _editable:          boolean;
    private _filter:            boolean;
    private _resizable:         boolean;


    public get editable():      boolean     {return this._editable}
    public get filter():        boolean     {return this._filter}
    public get resizable():     boolean     {return this._resizable}


    constructor(
        private info: object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

     }


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        const type = <kwtDefaultCol>this.info;


        const bEditable = type.bEditable;
        if (!_.isBoolean(bEditable))
        {
            console.error(log.requires("bEditable"));
            return false;
        }
        //console.info(log.isObj("bEditable"), bEditable);
        this._editable = bEditable;


        const bFilter = type.bFilter;
        if (!_.isBoolean(bFilter))
        {
            console.error(log.requires("bFilter"));
            return false;
        }
        //console.info(log.isObj("bFilter"), bFilter);
        this._filter = bFilter;


        const bResizable = type.bResizable;
        if (!_.isBoolean(bResizable))
        {
            console.error(log.requires("bResizable"));
            return false;
        }
        //console.info(log.isObj("bResizable"), bResizable);
        this._resizable = bResizable;

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwDefaultCol)
    }

}

