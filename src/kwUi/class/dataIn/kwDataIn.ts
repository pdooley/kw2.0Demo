
/**********************************************************************
 *
 * kwUi/class/dataIn/kwDataIn.ts
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
import { kwLog}             from "@kw/kwLog";
import { kwtDataIn}         from "./kwtDataIn";



export class kwDataIn
{
    protected sClass: string = this.constructor.name;


    private _rec: object;
    private _inits: object;
    private _view: object;


    constructor(
        private info: kwtDataIn )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get rec(): object       { return this._rec; }
    get inits(): object     { return this._inits; }
    get view(): object      { return this._view; }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", this.info));


        const type: kwtDataIn = <kwtDataIn> this.info;


        const inits = type.inits;
        if (!kw.isValid(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.is("inits", inits));
        this._inits = inits;


        const view = type.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.is("view", view));
        this._view = view;


        const rec = type.rec;
        if (!kw.isValid(rec))
        {
            console.error(log.invalid("rec"));
            return false;
        }
        //console.info(log.is("rec", rec));
        this._rec = rec;

        return true;
    }


}
