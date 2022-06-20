
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
import { kw }                from "@kw/kw";
import { kwDisp }            from "@kwClass/disp/kwDisp";
import { kweAttr }           from "./kweAttr";
import { kwLog }             from "@kw/kwLog";
import { kwStore }           from "@kwClass/store/kwStore";
import { kwtAttr }           from "./kwtAttr";



export class kwAttr
{
    protected sClass: string = this.constructor.name;

    private _type: kweAttr              = kweAttr.none;

    private _sId: string;
    private _sIdD: string;
    private _sName: string;
    private _val: any;

    private bInit: boolean              = false;
    private bLoadAttr: boolean          = false;
    private bLoadDefault: boolean       = false;
    private bLoadDisp: boolean          = false;
    private bLoadId: boolean            = false;
    private bLoadIdD: boolean           = false;
    private bLoadInits: boolean         = false;
    private bLoadView: boolean          = false;

    private _bDispAll: boolean          = false;
    private _bDispId: boolean           = false;
    private _bDispIdD: boolean          = false;
    private _bDispTmpl: boolean         = false;
    private _bDispVal: boolean          = false;

    private bDispAllAll: boolean        = false;

    private _sTag: string;


    constructor(
        private attr: kwtAttr,
        private disp: kwDisp,
        private view: object,
        private sDefault?: string )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get sId(): string           { return this._sId; }
    get sIdD(): string          { return this._sIdD; }
    get sName(): string         { return this._sName; }
    get sTag(): string          { return this._sTag; }
    get type(): kweAttr         { return this._type; }
    get val(): any              { return this._val; }

    get bDispAll(): boolean     { return this._bDispAll; }
    get bDispId(): boolean      { return this._bDispId; }
    get bDispIdD(): boolean     { return this._bDispIdD; }
    get bDispTmpl(): boolean    { return this._bDispTmpl; }
    get bDispVal(): boolean     { return this._bDispVal; }

    set sId(val: string)        { this._sId = val; this.dispId(); }
    set sIdD(val: string)       { this._sIdD = val; this.dispIdD(); }
    set sName(val: string)      { this._sName = val; }
    set sTag(val: string)       { this._sTag = val; }
    set type(val: kweAttr)      { this._val = val; }
    set val(val: any)           { this._val = val; this.dispVal(); }


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


        const attr = this.attr;
        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr);


        const disp = this.disp;
        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp);


        const view = this.view;
        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view);


        this.loadAttr();
        this.loadDisp();
        this.loadId();
        this.loadIdD();
        this.loadView();
        this.loadDefault();

        return true;
    }

    public loadData(data: object)
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        const type = this.type;
        if (type !== kweAttr.data)
        {
            //console.info(log.info("not data type"));
            return false;
        }
        //console.info(log.is("type", type));


        const sIdD = this.sIdD;
        if (!kw.isString(sIdD))
        {
            console.error(log.invalid("sIdD"));
            return;
        }
        //console.info(log.is("sIdD", sIdD));

        let val;

        if (kw.isValid(data))
        {
            //console.info(log.isObj("data"), data);

            val = this.extractData(data, sIdD);
            if (!kw.isValid(val))
            {
                //console.info(log.invalid("data"));
                return;
            }
            //console.info(log.isObj("val"), val);
        }

        this._val = val;
    }


    public loadInits(inits: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());


        const type = this.type;
        if (type !== kweAttr.inits)
        {
            return true;
        }


        if (this.bLoadInits)
        {
            return true;
        }

        this.bLoadInits = true;


        if (!kw.isValid(inits))
        {
            console.error(log.invalid("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits);

        const sId = this.sId;
        if (!kw.isString(sId))
        {
            console.error(log.empty("sId"));
            return false;
        }
        //console.info(log.is("sId", sId));


        const val = this.extractData(inits, sId);
        if (!kw.isValid(val))
        {
            console.error(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), val);


        this.val = val;

        return true;
    }


    private loadAttr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttr");
        //console.log(log.called());

        if (this.bLoadAttr)
        {
            return true;
        }

        this.bLoadAttr = true;


        const attr = this.attr;
        if (!kw.isValid(attr))
        {
            console.error(log.invalid("attr"));
            return false;
        }
        //console.info(log.isObj("attr"), attr);


        const sName = attr.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));
        this._sName = sName;


        const bDispAll = attr.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this._bDispAll = bDispAll;


        const bDispId = attr.bDispId;
        if (!kw.isBoolean(bDispId))
        {
            console.error(log.invalid("bDispId"));
            return false;
        }
        //console.info(log.is("bDispId", bDispId));
        this._bDispId = bDispId;


        const bDispIdD = attr.bDispIdD;
        if (!kw.isBoolean(bDispIdD))
        {
            console.error(log.invalid("bDispIdD"));
            return false;
        }
        //console.info(log.is("bDispIdD", bDispIdD));
        this._bDispIdD = bDispIdD;


        const bDispTmpl = attr.bDispTmpl;
        if (!kw.isBoolean(bDispTmpl))
        {
            console.error(log.invalid("bDispTmpl"));
            return false;
        }
        //console.info(log.is("bDispTmpl", bDispTmpl));
        this._bDispTmpl = bDispTmpl;


        const bDispVal = attr.bDispVal;
        if (!kw.isBoolean(bDispVal))
        {
            console.error(log.invalid("bDispVal"));
            return false;
        }
        //console.info(log.is("bDispVal", bDispVal));
        this._bDispVal = bDispVal;

        return true;
    }


    private loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        //console.log(log.called());

        if (this.bLoadDisp)
        {
            return true;
        }

        this.bLoadDisp = true;


        const disp = this.disp;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp);


        const bDispAllAll = disp.bDispAll;
        if (!kw.isBoolean(bDispAllAll))
        {
            console.error(log.invalid("bDispAllAll"));
            return false;
        }
        //console.info(log.is("bDispAllAll", bDispAllAll));
        this.bDispAllAll = bDispAllAll;

        return true;

    }


    private loadId(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadId");
        //console.log(log.called());

        if (this.bLoadId)
        {
            return true;
        }

        this.bLoadId = true;

        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.is("view", view));


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));


        const sTag = "s" + sName + "Id";
        //console.info(log.is("sTag", sTag));

        const sId = view[sTag];
        if (!kw.isValid(sId))
        {
            //console.info(log.empty("sId"));
            return true;
        }
        //console.info(log.is("sId", sId));
        this.sId = sId;

        this.type = kweAttr.inits;

        return true;
    }


    private loadIdD(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadIdD");
        //console.log(log.called());

        if (this.bLoadIdD)
        {
            return true;
        }

        this.bLoadIdD = true;

        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), view);


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));


        const sTagIdD = sName + "IdD";
        //console.info(log.is("sTagIdD", sTagIdD));

        const sIdD = view[sTagIdD];
        if (!kw.isString(sIdD))
        {
            //console.info(log.empty("sIdD"));
            return true;
        }
        //console.info(log.is("sIdD", sIdD));
        this.sIdD = sIdD;

        this.type = kweAttr.data;

        return true;
    }


    private loadDefault(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadType");
        //console.log(log.called());

        if (this.bLoadDefault)
        {
            return true;
        }

        this.bLoadDefault = true;

        if (    !this.bLoadId   ||
                !this.bLoadIdD  ||
                !this.bLoadView     )
        {
            console.error(log.info("id, idD, or View not loaded"));
            return false;
        }

        const type = this.type;
        if ( type !== kweAttr.none)
        {
            //console.info(log.isObj("type"), type);
            return true;
        }
        //console.info(log.info("type is not set"));


        const sDefault = this.sDefault;
        if (!kw.isString(sDefault))
        {
            //console.info(log.empty("sDefault"));
            return true;
        }
        //console.info(log.is("sDefault", sDefault));

        this.val = sDefault;

        this.type = kweAttr.default;

        return true;
    }


    private loadView()
    {
        const log: kwLog = new kwLog(this.sClass, "loadValView");
        //console.log(log.called());

        if (this.bLoadView)
        {
            return;
        }

        this.bLoadView = true;


        const view = this.view;
        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), view, "]");


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return;
        }
        //console.info(log.is("sName", sName));


        const sTag = "s" + sName;
        //console.info(log.is("sTag", sTag));

        const val = view[sTag];
        if (kw.isValid(val))
        {
            this.type = kweAttr.view;
        }
        //console.info(log.is("val", val));
        this.val = val;

        return;
    }


    protected extractData(info: any, sKey: string): any
    {
        const log: kwLog = new kwLog(this.sClass, "extractData");
        //console.log(log.called());


        if (!kw.isValid(info))
        {
            console.error(log.invalid(info));
            return
        }
        //console.info(log.isObj("info"), info);


        if (!kw.isString(sKey))
        {
            console.error(log.invalid(sKey));
            return
        }
        //console.info(log.is("sKey", sKey));


        const data = new kwStore(info, sKey);
        if (!data.init())
        {
            console.error(log.errCreate("data"));
        }

        return data.get();
    }


    private dispId()
    {
        const log: kwLog = new kwLog(this.sClass, "dispId");
        if (!this.bDispAll && !this.bDispAllAll && !this.bDispId ) {return;}
        const val = this.sId;
        if (kw.isValid(val)) {console.info(log.is("sId", val));}
    }

    private dispIdD()
    {
        const log: kwLog = new kwLog(this.sClass, "dispId");
        if (!this.bDispAll && !this.bDispAllAll && !this.bDispIdD ) {return;}
        const val = this.sIdD;
        if (kw.isValid(val)) {console.info(log.is("sIdD", val));}
    }

    private dispVal()
    {
        const log: kwLog = new kwLog(this.sClass, "dispVal");
        if (!this.bDispAll && !this.bDispAllAll && !this.bDispVal) {return;}
        const val = this.val;
        if (kw.isValid(val)) {console.info(log.isObj("val"), val, "]");}
    }


}
*/
