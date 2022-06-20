
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
/*
import { kw}                from "@kw/kw";
import { kwtAttr}           from "@kwClass/attr/kwtAttr";
import { kwAttrs}           from "@kwClass/attrs/kwAttrs";
import { kwDisp}            from "@kwClass/disp/kwDisp";
import { kwFltr}            from "@kwClass/fltr/kwFltr";
import { kwInits}           from "@kwClass/inits/kwInits";
import { kwLog}             from "@kw/kwLog";
import { kwTag}             from "@kwClass/tag/kwTag";
import { kwView}            from "@kwClass/view/kwView";



export class kwElmt
{
    protected sClass: string = this.constructor.name;

    private _attrs:     kwAttrs;
    private _data:      any;
    private _fltr:      kwFltr;
    private _inits:     kwInits;
    private _tag:       kwTag;
    private _view:      kwView;

    private bInit: boolean          = false;
    private bCreateAttrs: boolean   = false;
    private bCreateFltr: boolean    = false;
    private bCreateInits: boolean   = false;
    private bCreateTag: boolean     = false;
    private bCreateView: boolean    = false;


    constructor(
        private attrsIn:    kwtAttr[],
        private disp:       kwDisp,
        private initsIn:    any,
        private sTag:       string,
        private viewIn:     object  )
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
    { if (kw.isValid(this._inits)) { return this._inits.inits; } }

    public get rec(): any
    { if (kw.isValid(this._attrs)) { return this._attrs.rec; } }

    public get sId(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sId; } }

    public get sComp(): string
    { if (kw.isValid(this._tag)) { return this._tag.sTag; } }

    public get sLink(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sLink; } }

    public get sStyl(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this._attrs)) { return this._attrs.sText; } }

    public get view(): any
    { if (kw.isValid(this._view)) { return this._view.view; } }



    public set dataFltr(val: any)
    { if (kw.isValid(this._fltr)) { this._fltr.data = val; } }


//@formatter:on


    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return;
        }

        this.bInit = true;

        if (!kw.isValid(this.attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), this.attrsIn);


        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp);


        if (!kw.isValid(this.initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), this.initsIn);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sProp", this.sProp));


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

        this.bCreateAttrs = true;


        const attrsIn: kwtAttr[] = this.attrsIn;
        if (!kw.isArray(attrsIn))
        {
            console.error(log.invalid("attrsIn"));
            return false;
        }
        //console.info(log.isObj("attrsIn"), attrsIn, "]");


        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp);


        const view: kwView = this._view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view);


        const attrs = new kwAttrs(attrsIn, disp, view);
        if (!attrs.init())
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs);

        this._attrs = attrs;

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

        this.bCreateFltr = true;


        const attrs = this.attrs;
        if (kw.isNull(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const disp = this.disp;
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");


        const inits = this.inits;
        if (kw.isNull(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view, "]");


        const fltrObj = new kwFltr(attrs, disp, inits, view);
        if (!fltrObj.init())
        {
            console.error(log.errCreate("fltrObj"));
            return false;
        }
        //console.info(log.isObj("fltrObj"), fltrObj, "]");


        this._fltr = fltrObj;

        return;
    }


    private createInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createInits");
        //console.log(log.called());

        if (this.bCreateInits)
        {
            return true;
        }

        this.bCreateInits = true;


        const attrs = this.attrs;
        if (kw.isNull(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const disp = this.disp;
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");


        const initsIn = this.initsIn;
        if (kw.isNull(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        //console.info(log.isObj("initsIn"), initsIn, "]");


        const initsObj = new kwInits(attrs, disp, initsIn);
        if (!initsObj.init())
        {
            console.error(log.errCreate("initsObj"));
            return false;
        }
        //console.info(log.isObj("initsObj"), initsObj, "]");

        this._inits = initsObj;

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

        this.bCreateTag = true;

        const disp = this.disp;
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }

        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }

        const tag = new kwTag(disp, sTag);
        if (!tag.init())
        {
            console.error(log.errCreate("tag"));
            return false;
        }
        //console.info(log.is("tag", tag));

        this._tag = tag;

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

        this.bCreateView = true;

        const viewIn = this.viewIn;
        if (!kw.isValid(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn);

        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp);

        const sTag = this.sTag;
        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        //console.info(log.is("sProp", sProp));

        const viewObj = new kwView(disp, sTag, viewIn);
        if (!viewObj.init())
        {
            console.error(log.errCreate("viewObj"));
            return false;
        }
        //console.info(log.isObj("viewObj"), viewObj);

        this._view = viewObj;

        return true;
    }

    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadData");
        //console.log(log.called());

        const attrs = this.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        if (!attrs.loadData(data))
        {
            console.error(log.errLoad("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        const arry = this.arry;
        if (kw.isValid(arry))
        {
            this._data = arry.val;
            return true;
        }

        const rec = this.rec;
        if (kw.isValid(rec))
        {
            this._data = rec.val;
            return true;
        }

        this._data = data;

        return true;
    }


}
*/
