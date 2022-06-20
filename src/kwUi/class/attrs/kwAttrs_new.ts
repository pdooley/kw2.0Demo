
/**********************************************************************
 *
 * kwUi/class/attr/kwAttrs.ts
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
import {kw }                from "@kw/kw";
import {kwAttr }            from "@kwClass/attr/kwAttr";
import {kwDisp }            from "@kwClass/disp/kwDisp";
import {kwLog }             from "@kw/kwLog";
import {kwtAttr }           from "@kwClass/attr/kwtAttr";
import {kwView }            from "@kwClass/view/kwView";



export class kwAttrs
{
    protected sClass: string = this.constructor.name;


    private _attrs:         kwAttr[];
    private _attrsCustom:   kwAttr[];

    private _arry:          kwAttr;
    private _fltr:          kwAttr;
    private _id:            kwAttr;
    private _link:          kwAttr;
    private _rec:           kwAttr;
    private _styl:          kwAttr;
    private _text:          kwAttr;

    private bInit: boolean          = false;
    private bCreate: boolean        = false;
    private bLoadInits: boolean     = false;


    constructor(
        private attrsIn:    kwtAttr[],
        private disp:       kwDisp,
        private view:       kwView  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get arry(): kwAttr
    { return this._arry; }

    public get attrs(): kwAttr[]
    { return this._attrs; }

    public get attrsCustom(): kwAttr[]
    { return this._attrsCustom; }

    public get fltr(): kwAttr
    { return this._fltr; }

    public get rec(): kwAttr
    { return this._rec; }

    public get sId(): string
    { if (kw.isValid(this._id)) { return this._id.val; } }

    public get sLink(): string
    { if (kw.isValid(this._link)) { return this._link.val; } }

    public get sStyl(): string
    { if (kw.isValid(this._styl)) { return this._styl.val; } }

    public get sText(): string
    { if (kw.isValid(this._text)) { return this._text.val; } }


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


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), this.view);


        if (!this.createAttrs())
        {
            console.error(log.errCreate("attrs"));
            return false;
        }

        return true;
    }

    private createAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createAttrs");
        //console.log(log.called());


        if (this.bCreate)
        {
            return;
        }

        this.bCreate = true;


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
        //console.info(log.is("disp", this.disp));


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view);


        for (let attr of attrsIn)
        {
            //console.info(log.isObj("attr"), attr, "]");

            const item = new kwAttr(attr, disp, view);
            if (!item.init())
            {
                console.error(log.errCreate("item"));
                return false;
            }
            //console.info(log.isObj("item"), item, "]");

            if (!this.loadVal(item))
            {
                console.error(log.errLoad("val"));
                return false;
            }

            if (!this.store(item))
            {
                console.error(log.info("error stroing item"));
                return false;
            }
        }

        //console.info(log.isObj("this"), this, "]");
    }


    public loadData(data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        const attrs = this.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");

        const attrsCustom = this.attrsCustom;
        if (!kw.isArray(attrsCustom))
        {
            console.error(log.invalid("attrsCustom"));
            return false;
        }
        //console.info(log.isObj("attrsCustom"), attrsCustom, "]");

        for (let attr of attrs)
        {
            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadData(data))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");
        }


        for (let attr of attrsCustom)
        {
            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadData(data))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");

            if (!this.loadVal(attr))
            {
                console.error(log.errLoad("val"));
                return false;
            }
        }

        //console.info(log.isObj("this"), this, "]");

        return true;
    }


    public loadInits(inits: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());

        if (this.bLoadInits)
        {
            return;
        }

        this.bLoadInits = true;

        if (!this.bCreate)
        {
            console.error(log.info("attrs not created"));
            return false;
        }

        if (!kw.isValid(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits, "]");

        const attrs = this.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs, "]");


        const attrsCustom = this.attrsCustom;
        if (!kw.isArray(attrsCustom))
        {
            console.error(log.invalid("attrsCustom"));
            return false;
        }
        //console.info(log.isObj("attrsCustom"), attrsCustom, "]");


        for (let attr of attrs)
        {
            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadInits(inits))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");
        }


        for (let attr of attrsCustom)
        {
            //console.info(log.isObj("attr"), attr, "]");

            if (!attr.loadInits(inits))
            {
                console.error(log.errLoad("attr"));
                return false;
            }
            //console.info(log.isObj("attr"), attr, "]");

            if (!this.loadVal(attr))
            {
                console.error(log.errLoad("val"));
                return false;
            }
        }

        //console.info(log.isObj("this"), this, "]");

        return true;
    }


    private loadVal(attr: kwAttr): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadVal");
        //console.log(log.called());


        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr, "]");

        const sTag = attr.sTag;
        if (!kw.isString(sTag))
        {
            //console.info(log.empty("sTag"));
            return true;
        }
        //console.info(log.is("sTag", sTag));

        const val = attr.val;
        if (kw.isValid(val))
        {
            //console.info(log.is("val", val));
        }

        this[sTag] = val;

        return true;
    }

    private store(attr: kwAttr): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "store");
        //console.log(log.called());


        if (!kw.isArray(this._attrs))
        {
            console.error(log.invalid("_attrs"));
            return false;
        }
        //console.info(log.isObj("_attrs"), this._attrs, "]");


        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr, "]");


        const sName = attr.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));

        switch (sName)
        {
            case "Arry":
            {
                this._arry = attr;
                this.attrs.push(attr);
                break;
            }

            case "Fltr":
            {
                this._fltr = attr;
                this.attrs.push(attr);
                break;
            }

            case "Id":
            {
                this._id = attr;
                this.attrs.push(attr);
                break;
            }

            case "Link":
            {
                this._link = attr;
                this.attrs.push(attr);
                break;
            }

            case "Rec":
            {
                this._rec = attr;
                this.attrs.push(attr);
                break;
            }

            case "Styl":
            {
                this._styl = attr;
                this.attrs.push(attr);
                break;
            }

            case "Text":
            {
                this._text = attr;
                this.attrs.push(attr);
                break;
            }

            default:
            {
                this._attrsCustom.push(attr);
            }

        }

        return true;
    }


}
*/
