/**********************************************************************
 *
 * kw/class/app/kwApp.ts
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
import {kw }                    from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwMode}                 from "@kwClass/mode/kwMode";
import {kwFctyMode}             from "@kwFcty/mode/kwFctyMode";
import {kwtBs}                  from "@kwClass/Bs/kwtBs";
import {kwtApp}                 from "./kwtApp";


const sAUTO_LOGIN:  string = "bAutoLogin";
const sREDIRECT:    string = "sRedirect";
const sProp:         string = "app";
//@formatter:on


export class kwApp
{
    protected sClass: string = this.constructor.name;

    private _bAutoLogin: boolean;
    private _sRedirect: string;
    private _mode: kwMode;

    private type: kwtApp;

    constructor(private info: kwtBs)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public get bAutoLogin(): boolean { return this._bAutoLogin;}
    public get mode(): kwMode { return this._mode;}
    public get sRedirect(): string { return this._sRedirect;}


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwFirebase::create() info is [", this.info, "]");

        const type: kwtApp = this.info[sProp];
        if (kw.isNull(type))
        {
            console.error(log.errLoad("type"));
            return false;
        }
        //console.info(log.isObj("type"), type);
        this.type = type;

        const bAutoLogin: boolean = type[sAUTO_LOGIN];
        if (!kw.isBoolean(bAutoLogin))
        {
            console.error(log.errLoad("bAutoLogin"));
            return false;
        }
        //console.info(log.is("bAutoLogin", bAutoLogin));
        this._bAutoLogin = bAutoLogin;


        const sRedirect: string = type[sREDIRECT];
        if (!kw.isString(sRedirect))
        {
            console.error(log.errLoad("sRedirect"));
            return false;
        }
        //console.info(log.is("sRedirect", sRedirect));
        this._sRedirect = sRedirect;

        if (!this.retrieveMode())
        {
            console.error(log.errLoad("mode"));
            return false;
        }

        return true;
    }

    retrieveMode(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveMode");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info("kwBsState::retrieveMode() type is ", this.type);

        const mode: kwMode = kwFctyMode.create(this.type);
        if (!mode.init())
        {
            console.error(log.errInit("mode"));
            return false;
        }
        //console.info(log.isObj("type"), type);
        this._mode = mode;

        return true;
    }


    toString(): string
    {
        return this.sClass
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwApp)
    }
}

