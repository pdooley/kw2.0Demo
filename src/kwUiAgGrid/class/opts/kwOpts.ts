/**********************************************************************
 *
 * kwUiAgGrid/class/opts/kwOpts.ts
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
import {kw}                         from "@kw/kw";
import {kwLog}                      from "@kw/kwLog";
import {kwtOptsIn}                  from "./kwtOptsIn";

//@formatter:on

export class kwOpts
{
    protected sClass:                       string = this.constructor.name;

    private _enableFilter:                  boolean = false;
    private _enableSorting:                 boolean = false;
    private _suppressRowClickSelection:     boolean = false;


    constructor(
        private info: object )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get enableFilter():                 boolean {return this._enableFilter;}
    get enableSorting():                boolean {return this._enableSorting;}
    get suppressRowClickSelection():    boolean {return this._suppressRowClickSelection}



    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }

        const type: kwtOptsIn = <kwtOptsIn>this.info;


        const bEnableFltr = type.bEnableFltr;
        if (!kw.isBoolean(bEnableFltr))
        {
            console.error(log.invalid("bEnableFltr"));
            this._enableFilter = false;
        }
        else
        {
            this._enableFilter = bEnableFltr;
        }
        //console.info(log.isObj("bEnableFltr"), this._enableFilter);


        const bEnableSort = type.bEnableSort;
        if (!kw.isBoolean(bEnableSort))
        {
            console.error(log.invalid("bEnableSort"));
            this._enableSorting = false;
        }
        else
        {
            this._enableSorting = bEnableSort;
        }
        //console.info(log.isObj("bEnableSort"), this._enableSorting);


        const bEnableRowSel = type.bEnableRowSel;
        if (!kw.isBoolean(bEnableRowSel))
        {
            console.error(log.invalid("bEnableRowSel"));
            this._suppressRowClickSelection = false;
        }
        else
        {
            this._suppressRowClickSelection = !bEnableRowSel;
        }
        //console.info(log.isObj("bEnableRowSel"), this._suppressRowClickSelection);

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwOpts)
    }
}

