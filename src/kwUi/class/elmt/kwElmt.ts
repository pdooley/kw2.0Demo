
/**********************************************************************
 *
 * kwUi/class/elmt/kwElmt.ts
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
import { kwAttrs}           from "@kwUiClass/attrs/kwAttrs";
import { kwDisp}            from "@kwUiClass/disp/kwDisp";
import { kwFltr}            from "@kwUiClass/fltr/kwFltr";
import { kwInits}           from "@kwUiClass/inits/kwInits";
import { kwLog}             from "@kw/kwLog";
import { kwTag}             from "@kwUiClass/tag/kwTag";
import {kwtAttr}            from "@kwUiClass/attr/kwtAttr";
import {kwtElmt}            from "./kwtElmt";
import {kwtFltr}            from "@kwUiClass/fltr/kwtFltr";
import {kwtInits}           from "@kwUiClass/inits/kwtInits";
import {kwtView}            from "@kwUiClass/view/kwtView";
import { kwView}            from "@kwUiClass/view/kwView";


const sSTATE:       string        = "sState";
const sSTATE_ST:    string        = "sStateSt";


export class kwElmt
{

    protected sClass: string = this.constructor.name;


    private _attrs:         kwAttrs;
    private _data:          any;
    private _fltr:          kwFltr;
    private _inits:         kwInits;
    private _tag:           kwTag;
    private _view:          kwView;

    private _sState:        string;
    private _sStateSt:      string;


    private bInit:          boolean     = false;
    private bCreateAttrs:   boolean     = false;
    private bCreateFltr:    boolean     = false;
    private bCreateInits:   boolean     = false;
    private bCreateTag:     boolean     = false;
    private bCreateView:    boolean     = false;


    // passed values in constructor
    private attrsIn:        kwtAttr[];
    private dispIn:         kwDisp;
    private initsIn:        object;
    private sTagIn:         string;
    private viewIn:         object;



    constructor(
        private type: kwtElmt  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get arry(): any
    { if (kw.isValid(this._attrs)) { return this._attrs.arry; } }

    public get attrs(): kwAttrs
    { return this._attrs; }

    public get data(): any
    { return this._data; }

    public get fltr(): kwFltr
    { return this._fltr; }

    public get inits(): kwInits
    { if (kw.isValid(this._inits)) { return this._inits; } }

    public get rec(): any
    { if (kw.isValid(this._attrs)) { return this._attrs.rec; } }

    public get sId(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sId; } }

    public get sComp(): string
    { if (kw.isValid(this._tag)) { return this._tag.sTag; } }

    public get sLink(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sLink; } }

    public get sState(): string { return this._sState; }

    public get sStateSt(): string { return this._sStateSt; }

    public get sStyl(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sText; } }

    public get view(): any
    { if (kw.isValid(this._view)) { return this._view.view; } }


    public set data(val: any) { this._data = val; }

    public set dataFltr(val: any)
    { if (kw.isValid(this._fltr)) { this._fltr.data = val; } }


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
        //console.info(log.isObj("dispIn"), this.dispIn);


        this.initsIn = this.type.inits;
        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        this.sTagIn = this.type.sTag;
        if (!kw.isString(this.sTagIn))
        {
            console.error(log.invalid("sTagIn"));
            return false;
        }
        //console.info(log.is("sTagIn", this.sTagIn));


        this.viewIn = this.type.view;
        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn);


        if (!this.createView())
        {
            console.error(log.errCreate("view"));
            return false;
        }


        if (!this.createAttrs())
        {
            console.error(log.errCreate("attrs"));
            return false;
        }


        if (!this.createInits())
        {
            console.error(log.errCreate("inits"));
            return false;
        }


        if (!this.createTag())
        {
            console.error(log.errCreate("tag"));
            return false;
        }


        if (!this.createFltr())
        {
            console.error(log.errCreate("fltr"));
            return false;
        }


        this.bInit = true;

        return true;
    }


    private createAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createAttrs");
        //console.log(log.called());


        if (this.bCreateAttrs)
        {
            return;
        }


        if (!kw.isArray(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("disp"), this.dispIn);


        if (!kw.isValid(this._view))
        {
            console.error(log.invalid("_view"));
            return false;
        }
        //console.info(log.isObj("view"), this._view);


        const attrs = new kwAttrs(
                            this.attrsIn,
                            this.dispIn,
                            this._view  );
        if (!attrs.init())
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs);
        this._attrs = attrs;


        this.bCreateAttrs = true;

        return true;
    }


    private createFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createFltr");
        //console.log(log.called());

        if (this.bCreateFltr)
        {
            return true;
        }


        if (kw.isNull(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), this.attrs);


        if (kw.isNull(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        if (kw.isNull(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), this.view);


        const type: kwtFltr = {
            attrs: this.attrs,
            disp: this.dispIn,
            inits: this.initsIn,
            view: this.view
        };


        const fltrObj = new kwFltr(type);
        if (!fltrObj.init())
        {
            console.error(log.errCreate("fltrObj"));
            return false;
        }
        //console.info(log.isObj("fltrObj"), fltrObj, "]");
        this._fltr = fltrObj;


        this.bCreateFltr = true;

        return true;
    }


    private createInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createInits");
        //console.log(log.called());

        if (this.bCreateInits)
        {
            return true;
        }


        if (kw.isNull(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), this.attrs);


        if (kw.isNull(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        if (kw.isNull(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        const type: kwtInits = {
            attrs: this.attrs,
            disp: this.dispIn,
            inits: this.initsIn
        };


        const initsObj = new kwInits(type);
        if (!initsObj.init())
        {
            console.error(log.errCreate("initsObj"));
            return false;
        }
        //console.info(log.isObj("initsObj"), initsObj);

        const inits = initsObj.inits;
        if (!kw.isValid(inits))
        {
            console.error(log.errCreate("initsObj"));
            return false;
        }
        this._inits = inits;

        this.bCreateInits = true;

        return true;
    }


    private createTag(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTag");
        //console.log(log.called());

        if (this.bCreateTag)
        {
            return true;
        }


        if (kw.isNull(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        if (!kw.isString(this.sTagIn))
        {
            console.error(log.invalid("sTagIn"));
            return false;
        }
        //console.info(log.is("sTagIn", this.sTagIn));


        const tag = new kwTag(this.dispIn, this.sTagIn);
        if (!tag.init())
        {
            console.error(log.errCreate("tag"));
            return false;
        }
        //console.info(log.isObj("tag"), tag);
        this._tag = tag;


        this.bCreateTag = true;

        return true;
    }


    private createView(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createView");
        //console.log(log.called());

        if (this.bCreateView)
        {
            return;
        }


        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn);


        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), this.dispIn);


        if (!kw.isString(this.sTagIn))
        {
            console.error(log.invalid("sTagIn"));
            return false;
        }
        //console.info(log.is("sTagIn", this.sTagIn));


        const type: kwtView = {
            disp: this.dispIn,
            sTag: this.sTagIn,
            view: this.viewIn
        };


        const viewObj = new kwView(type);
        if (!viewObj.init())
        {
            console.error(log.errCreate("viewObj"));
            return false;
        }
        //console.info(log.isObj("viewObj"), viewObj);
        this._view = viewObj;


        this._sState = this.view[sSTATE];
        if (kw.isString(this._sState))
        {
            //console.info(log.is(sSTATE, this._sState));
        }
        else
        {
            //console.info(log.empty(sSTATE));
        }

        this._sStateSt = this.view[sSTATE_ST];
        if (kw.isString(this._sState))
        {
            //console.info(log.is(sSTATE, this._sState));
        }
        else
        {
            //console.info(log.empty(sSTATE));
        }

        this.bCreateView = true;

        return true;
    }


    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        if (!kw.isValid(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), this.attrs);

        if (!this.attrs.loadData(data))
        {
            console.error(log.errLoad("data"));
            return false;
        }
        //console.info(log.isObj("data"), data);

        const arry = this.arry;
        if (kw.isValid(arry))
        {
            if (kw.isValid(arry.val))
            {
                this._data = arry.val;
                return true;
            }
        }

        const rec = this.rec;
        if (kw.isValid(rec))
        {
            if (kw.isValid(rec.val))
            {
                this._data = rec.val;
                return true;
            }
        }

        //console.info(log.isObj("data"), data);
        this._data = data;

        return true;
    }

}
