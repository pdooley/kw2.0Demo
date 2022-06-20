
/**********************************************************************
 *
 * kwUi/class/fltr/kwFltr.ts
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

import { kw}                from "@kw/kw";
import { kwAttr}            from "@kwUiClass/attr/kwAttr";
import { kwAttrs}           from "@kwUiClass/attrs/kwAttrs";
import { kwDisp}            from "@kwUiClass/disp/kwDisp";
import { kwLog}             from "@kw/kwLog";
import {kwtFltr}             from "./kwtFltr";
import { kwView}            from "../view/kwView";



export class kwFltr
{
    protected sClass: string = this.constructor.name;


    private bInit: boolean          = false;

    private _data: any;
    private _fltr: kwAttr;


    // passed values in constructor
    private attrsIn:    kwAttrs;
    private dispIn:     kwDisp;
    private initsIn:    object;
    private viewIn:     kwView;


    constructor(
        private type: kwtFltr )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
   }


    public get fltr(): any
    { if (kw.isValid(this._fltr)) { return this._fltr.val; } }


    public set data(val: any) { this._data = val; }

//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return;
        }

        if (!kw.isValid(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);

        this.attrsIn = this.type.attrs;
        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        this.dispIn = this.type.disp;
        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.is("dispIn", this.dispIn));


        this.initsIn = this.type.inits;
        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.is("initsIn", this.initsIn));


        this.viewIn = this.type.view;
        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.is("viewIn", this.viewIn));


        this.bInit = true;

        return true;
    }


    public load(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        const fltr = this.fltr;
        if (!kw.isValid(fltr))
        {
            console.error(log.invalid("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");

        if (!fltr.load(data))
        {
            console.error(log.errLoad("fltr"));
            return false;
        }
        //console.info(log.isObj("fltr"), fltr, "]");

        return true;
    }

}
