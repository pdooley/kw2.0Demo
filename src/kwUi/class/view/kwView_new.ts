
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
/*
import { kw}                from "@kw/kw";
import { kwDisp}            from "@kwClass/disp/kwDisp";
import { kwLog}             from "@kw/kwLog";



export class kwView
{
    protected sClass: string = this.constructor.name;

    private _view: any;

    private bInit: boolean              = false;


    constructor(
        private disp: kwDisp,
        private sTag: string,
        private viewIn: object )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get view(): any             { return this._view; }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return true;
        }

        this.bInit = true;

        if (kw.isNull(this.disp))
        {
            console.error(log.empty("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp, "]");

        if (!kw.isString(this.sTag))
        {
            console.error(log.empty("sTag"));
            return false;
        }
        //console.info(log.is("sTag", this.sTag));

        if (kw.isNull(this.viewIn))
        {
            console.error(log.empty("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn, "]");

        let view;

        if (this.sTag.length === 0)
        {
            //console.i(this.sClass, "::loadView() sTag is empty - using viewParent");
            view = this.viewIn;
        }
        else
        {
            //console.info(this.sClass, "::loadView() sTag is [", this.sTag, "]");
            view = this.viewIn[this.sTag];
        }

        if (kw.isNull(view))
        {
            console.error(log.errLoad("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");

        this.disp.dispView(view);

        this._view = view;

        return true;
    }


}
*/
