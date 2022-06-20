/**********************************************************************
 *
 * kwUi/class/subState/kwSubState.ts
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
import {kw}                 from "@kw/kw";
import {kweSubState}        from "./kweSubState";
import {kwLog}              from "@kw/kwLog";
import {kwState}            from "@kwClass/state/kwState";
import {kwtSubState}        from "./kwtSubState";


//@formatter:on

export abstract class kwSubState
{
    protected sClass: string = this.constructor.name;


    private     sDst:       string;
    protected   sPubBase:   string;
    protected   sSubBase:   string;



    private     _bIsLoaded: boolean;
    private     _sName:     string;
    private     _sParam:    string;
    private     _sPub:      string;
    private     _sSub:      string;

    private     _data:      any;


    protected constructor(
        private _nType: kweSubState,
        private info:   kwtSubState )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    get bIsLoaded():    boolean     {return this._bIsLoaded;}
    get data():         any         {return this._data;}
    get nType():        kweSubState {return this._nType;}
    get sName():        string      {return this._sName;}
    get sParam():       string      {return this._sParam;}
    get sPub():         string      {return this._sPub;}
    get sSub():         string      {return this._sSub;}


    public      abstract build(row: any): boolean;

    protected   abstract chkData(data: any): boolean;
    protected   abstract createDst(): string;
    protected   abstract createPubBase(): string
    protected   abstract createSub(): string;
    protected   abstract createSubBase(): string;



    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        if (!this.retrieveName())
        {
            console.error(log.errLoad("name"));
            return false;
        }

        if (!this.retrieveParam())
        {
            console.error(log.errLoad("param"));
            return false;
        }


        const sDst = this.createDst();
        if (!kw.isString(sDst))
        {
            console.error(log.errCreate("sDst"));
            return false;
        }
        //console.info(log.isObj("sDst"), sDst);
        this.sDst = sDst;


        const sPubBase = this.createPubBase();
        if (!kw.isString(sPubBase))
        {
            console.error(log.errCreate("sPubBase"));
            return false;
        }
        //console.info(log.isObj("sPubBase"), sPubBase);
        this.sPubBase = sPubBase;


        const sSubBase = this.createSubBase();
        if (!kw.isString(sSubBase))
        {
            console.error(log.errCreate("sSubBase"));
            return false;
        }
        //console.info(log.isObj("sSubBase"), sSubBase);
        this.sSubBase = sSubBase;


        const sSub = this.createSub();
        if (!kw.isString(sSub))
        {
            console.error(log.errCreate("sSub"));
            return false;
        }
        //console.info(log.isObj("sSub"), sSub);
        this._sSub = sSub;


        const sPub = this.createPub();
        if (!kw.isString(sPub))
        {
            console.error(log.errCreate("sPub"));
            return false;
        }
        //console.info(log.isObj("sPub"), sPub);
        this._sPub = sPub;


        this.setIsLoaded(false);

        return true;
    }


    public load(sTopic: string, data: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if (!kw.isString(this.sSub))
        {
            console.error(log.invalid("sSub"));
            return false;
        }
        //console.info(log.isObj("sSub"), this.sSub);


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }
        //console.info(log.isObj("sTopic"), sTopic);


        if (sTopic !== this.sSub)
        {
            //console.info(log.info("sTopic is not mine"));
            return true;
        }


        if (!this.chkData(data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj(sTopic), data);


        this._data = data;
        //console.info(log.isObj("data"), this._data);


        this.setIsLoaded(true);

        return true;
    }


    private createPub(): string
    {
        const log: kwLog = new kwLog(this.sClass, "createPub");
        //console.log(log.called());


        if (!kw.isString(this.sPubBase))
        {
            console.error(log.invalid("sPubBase"));
            return;
        }
        //console.info(log.isObj("sPubBase"), this.sPubBase);


        const sPub = kwState.createTopicAll(this.sPubBase);
        if (!kw.isString(sPub))
        {
            console.error(log.invalid("sPub"));
            return;
        }
        //console.info(log.isObj("sPub"), sPub);


        return sPub;
    }


    protected loadSrc(src: any, dst: any): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());



        if (!kw.isValid(src))
        {
            console.error(log.invalid("src"));
            return false;
        }
        //console.info(log.isObj("src"), src);


        if (!kw.isValid(dst))
        {
            console.error(log.invalid("dst"));
            return false;
        }
        //console.info(log.isObj("dst"), dst);


        if (!kw.isString(this.sPubBase))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), this.sPubBase);


        let root = dst["_"];
        if (!kw.isValid(root))
        {
            dst["_"] = {};
            root = dst["_"];
        }
        //console.info(log.isObj("root"), root);


        root[this.sPubBase] = src;
        //console.info(log.isObj("dst"), dst);


        this.setIsLoaded(true);


        return true;
    }


    private retrieveName(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveName");
        //console.log(log.called());


        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        const sName = this.info.sName;
        if (!kw.isString(sName))
        {
            console.error(log.invalid("sName"));
            return false;
        }
        //console.info(log.isObj("sName"), sName);
        this._sName = sName;


        return true;
    }


    private retrieveParam(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveParam");
        //console.log(log.called());


        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        const sParam = this.info.sParam;
        if (!kw.isString(sParam))
        {
            //console.info(log.empty("sParam"));
            return true;
        }
        //console.info(log.isObj("sParam"), sParam);
        this._sParam = sParam;


        return true;
    }

    private setIsLoaded(bIsLoaded: boolean): void
    {
        const log: kwLog = new kwLog(this.sClass, "setIsLoaded");
        //console.log(log.called());


        if (!kw.isBoolean(bIsLoaded))
        {
            console.error(log.invalid("bIsLoaded"));
            return;
        }
        //console.info(log.isObj("bIsLoaded"), bIsLoaded);

        this._bIsLoaded = bIsLoaded;
    }


    toString(): string
    {
        return kw.toString(this.nType, kweSubState);
    }


    static is(obj: object): boolean
    {
        return kw.is(obj, kwSubState)
    }

}
