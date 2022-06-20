
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

import { kw }                from "@kw/kw";
import { kwAttrSrvc }        from "./kwAttrSrvc";
import { kwDisp }            from "../disp/kwDisp";
import { kweAttr }           from "./kweAttr";
import { kwLog }             from "@kw/kwLog";
import { kwStore }           from "../store/kwStore";
import { kwtAttr }           from "./kwtAttr";
import { kwtAttrIn }         from "./kwtAttrIn";



export class kwAttr
{
    protected sClass: string = this.constructor.name;


    private _nType: kweAttr             = kweAttr.none;
    private _sId: string;
    private _sIdD: string;
    private _sName: string;
    private _val: any;


    private bDispAllAll: boolean        = false;
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


    private attrIn: kwtAttr;
    private dispIn: kwDisp;
    private viewIn: object;
    private sDefaultIn: string;


    private _sTag: string;


    constructor(
        private info : kwtAttrIn )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get sId(): string           { return this._sId; }
    get sIdD(): string          { return this._sIdD; }
    get sName(): string         { return this._sName; }
    get sTag(): string          { return this._sTag; }
    get nType(): kweAttr        { return this._nType; }
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
    set nType(nVal: kweAttr)    { this._nType = nVal; }
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

        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        const type: kwtAttrIn = <kwtAttrIn>this.info;


        const attrIn = type.attr;
        if (!kw.isValid(attrIn))
        {
            console.error(log.invalid("attrIn"));
            return false;
        }
        //console.info(log.isObj("attrIn"), attrIn);
        this.attrIn = attrIn;


        const dispIn = type.disp;
        if (!kw.isValid(dispIn))
        {
            console.error(log.invalid("dispIn"));
            return false;
        }
        //console.info(log.isObj("dispIn"), dispIn);
        this.dispIn = dispIn;


        if (!kw.isValid(type.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), type.view);


        const viewIn = type.view.view;
        if (!kw.isValid(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), viewIn);
        this.viewIn = viewIn;


        const sDefaultIn = type.sDefault;
        if (kw.isString(sDefaultIn))
        {
            //console.info(log.is("sDefaultIn", sDefaultIn));
            this.sDefaultIn = sDefaultIn;
        }


        this.loadAttr();
        this.loadDisp();
        this.loadId();
        this.loadIdD();
        this.loadView();
        this.loadDefault();


        this.bInit = true;

        return true;
    }

    public loadData(data: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());

        //console.info(log.is("nType", this.nType));

        if (this.nType !== kweAttr.data)
        {
            //console.info(log.info("nType is not data"));
            return true;
        }
        //console.info(log.info("nType is data"));

        const sIdD = this.sIdD;
        if (!kw.isString(sIdD))
        {
            console.error(log.invalid("sIdD"));
            return false;
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
                return false;
            }
            //console.info(log.isObj("val"), val);
        }

        this.setVal(sIdD, val);

        return true;
    }


    public loadInits(inits: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        //console.log(log.called());


        if (this.nType !== kweAttr.inits)
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
        //console.info(log.isObj("inits"), inits, "]");

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
        //console.info(log.isObj("val"), val, "]");


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


        if (!kw.isValid(this.attrIn))
        {
            console.error(log.invalid("attrIn"));
            return false;
        }
        //console.info(log.is("attrIn", this.attrIn));


        const sName = this.attrIn.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));
        this._sName = sName;


        const bDispAll = this.attrIn.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this._bDispAll = bDispAll;


        const bDispId = this.attrIn.bDispId;
        if (!kw.isBoolean(bDispId))
        {
            console.error(log.invalid("bDispId"));
            return false;
        }
        //console.info(log.is("bDispId", bDispId));
        this._bDispId = bDispId;


        const bDispIdD = this.attrIn.bDispIdD;
        if (!kw.isBoolean(bDispIdD))
        {
            console.error(log.invalid("bDispIdD"));
            return false;
        }
        //console.info(log.is("bDispIdD", bDispIdD));
        this._bDispIdD = bDispIdD;


        const bDispTmpl = this.attrIn.bDispTmpl;
        if (!kw.isBoolean(bDispTmpl))
        {
            console.error(log.invalid("bDispTmpl"));
            return false;
        }
        //console.info(log.is("bDispTmpl", bDispTmpl));
        this._bDispTmpl = bDispTmpl;


        const bDispVal = this.attrIn.bDispVal;
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


        if (!kw.isValid(this.dispIn))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.is("dispIn", this.dispIn));


        const bDispAllAll = this.dispIn.bDispAll;
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

        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.is("viewIn", this.viewIn));


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));


        const sTag = "s" + sName + "Id";
        //console.info(log.is("sTag", sTag));


        const sId = this.viewIn[sTag];
        if (!kw.isValid(sId))
        {
            //console.info(log.empty("sId"));
            return true;
        }
        //console.info(log.is("sId", sId));


        this.setId(sId);
        this.setType(sTag, kweAttr.inits);

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


        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        //console.info(log.isObj("viewIn"), this.viewIn);


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.is("sName", sName));


        const sTagIdD = "s" + sName + "IdD";
        //console.info(log.is("sTagIdD", sTagIdD));


        const sIdD = this.viewIn[sTagIdD];
        if (!kw.isString(sIdD))
        {
            //console.info(log.empty("sIdD"));
            return true;
        }
        //console.info(log.is("sIdD", sIdD));


        this.setIdD(sIdD);
        this.setType(sTagIdD, kweAttr.data);


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


        if ( this.nType !== kweAttr.none)
        {
            //console.info(log.is("type", type));
            return true;
        }
        //console.info(log.info("type is not set"));


        if (!kw.isString(this.sDefaultIn))
        {
            //console.info(log.empty("sDefault"));
            return true;
        }
        //console.info(log.is("sDefault", this.sDefaultIn));


        this.setVal("default", this.sDefaultIn);
        this.setType("default", kweAttr.default);


        return true;
    }


    private loadView(): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadValView");
        //console.log(log.called());


        if (this.bLoadView)
        {
            return;
        }


        this.bLoadView = true;


        if (!kw.isValid(this.viewIn))
        {
            console.error(log.invalid("viewIn"));
            return;
        }
        //console.info(log.is("viewIn", this.viewIn));


        const sName = this.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return;
        }
        //console.info(log.is("sName", sName));


        const sTag = "s" + sName;
        //console.info(log.is("sTag", sTag));


        const val = this.viewIn[sTag];
        if (!kw.isValid(val))
        {
            return;
        }
        //console.info(log.is("val", val));


        this.setVal(sTag, val);
        this.setType(sTag, kweAttr.view);


    }


    protected extractData(info: any, sKey: string): any
    {
        const log: kwLog = new kwLog(this.sClass, "extractData");
        //console.log(log.called());


        if (!kw.isValid(info))
        {
            console.error(log.invalid(info));
        }
        //console.info(log.is("info", info));


        if (!kw.isString(sKey))
        {
            console.error(log.invalid(sKey));
        }
        //console.info(log.is("sKey", sKey));


        const data = new kwStore(info, sKey);
        if (!data.init())
        {
            console.error(log.errCreate("data"));
        }

        return data.result;
    }


    private dispId()
    {
        const log: kwLog = new kwLog(this.sClass, "dispId");
        if ( !this.bDispAll && !this.bDispAllAll && !this.bDispId ) {return;}
        const val = this.sId;
        if (kw.isValid(val)) {console.info(log.is("sId", val));}
    }


    private dispIdD()
    {
        const log: kwLog = new kwLog(this.sClass, "dispId");
        if ( !this.bDispAll && !this.bDispAllAll && !this.bDispIdD ) {return;}
        const val = this.sIdD;
        if (kw.isValid(val)) {console.info(log.is("sIdD", val));}
    }


    private dispVal()
    {
        const log: kwLog = new kwLog(this.sClass, "dispVal");
        if ( !this.bDispAll && !this.bDispAllAll && !this.bDispVal) {return;}
        const val = this.val;
        if (kw.isValid(val)) {console.info(log.isObj("val"), val, "]");}
    }


    private setId(sId: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "setId");
        //console.log(log.called());


        if (!kw.isString(sId))
        {
            console.error(log.invalid("sId"));
            return;
        }
        //console.info(log.is("sId", sId));


        this._sId = sId;
    }


    private setIdD(sIdD: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "setIdD");
        //console.log(log.called());


        if (!kw.isString(sIdD))
        {
            console.error(log.invalid("sIdD"));
            return;
        }
        //console.info(log.is("sIdD", sIdD));


        this._sIdD = sIdD;
    }


    private setType(sTag: string, nType: kweAttr): void
    {
        const log: kwLog = new kwLog(this.sClass, "setType");
        //console.log(log.called());


        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return;
        }
        //console.info(log.is("sTag", sTag));


        if (!kw.isNumber(nType))
        {
            console.error(log.invalid("nType"));
            return;
        }


        if (!kwAttrSrvc.in(nType))
        {
            console.error(log.invalid("nType"));
            return;
        }
        //console.info(log.is("nType", nType));


        this._nType = nType;

        const sType = this.toString();
        if (!kw.isString(sType))
        {
            console.error(log.invalid("sType"));
            return;
        }
        //console.info(log.is("sType for " + sTag, sType));
    }


    private setVal(sTag: string, val: any)
    {
        const log: kwLog = new kwLog(this.sClass, "setVal");
        //console.log(log.called());


        if (!kw.isString(sTag))
        {
            console.error(log.invalid("sTag"));
            return;
        }
        //console.info(log.is("sTag", sTag));


        if (!kw.isValid(val))
        {
            //console.info(log.empty("val"));
        }
        //console.info(log.isObj("val for (" + sTag + ")"), val);


        this._val = val;
    }


    public toString(): string
    {
        return kw.toString(this.nType, kweAttr);
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwAttr)
    }

}
