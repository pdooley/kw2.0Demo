
/**********************************************************************
 *
 * kwUi/class/attr/kwView.ts
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

import { kw}               from "@kw/kw";
import { kwDisp}           from "@kwUiClass/disp/kwDisp";
import { kwLog}            from "@kw/kwLog";
import {kwtView}            from "@kwUiClass/view/kwtView";



export class kwView
{
    protected sClass: string = this.constructor.name;

    private _view: object;

    private bInit: boolean  = false;


    private dispIn: kwDisp;
    private sTagIn: string;
    private viewIn: object;


    constructor(
        private type: kwtView   )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get view(): object  { return this._view; }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return true;
        }


        if (!kw.isValid(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);


        this.dispIn = this.type.disp;
        if (kw.isNull(this.dispIn))
        {
            console.error(log.empty("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        this.sTagIn = this.type.sTag;
        if (!kw.isString(this.sTagIn))
        {
            console.error(log.empty("sTagIn"));
            return false;
        }
        //console.info(log.is("sTagIn", this.sTagIn));


        this.viewIn = this.type.view;
        if (kw.isNull(this.viewIn))
        {
            console.error(log.empty("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn, "]");

        let view;

        if (this.sTagIn.length === 0)
        {
            //console.info(this.sClass, "::loadView() sTagIn is empty - using viewParent");
            view = this.viewIn;
        }
        else
        {
            //console.info(this.sClass, "::loadView() sTagIn is [", this.sTagIn, "]");
            view = this.viewIn[this.sTagIn];
        }

        if (kw.isNull(view))
        {
            console.error(log.errLoad("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");
        this._view = view;

        this.dispIn.dispView(view);


        this.bInit = true;

        return true;
    }


}
