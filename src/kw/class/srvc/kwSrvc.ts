/**********************************************************************
 *
 * kw/class/srvc/kwSrvc.ts
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
import {kw }               from "@kw/kw";
import {kwLog }            from "@kw/kwLog";
import {kwtSrvc }          from "./kwtSrvc";



export class kwSrvc
{
    protected sClass: string = this.constructor.name;

    private type: kwtSrvc;

    private _nId: number;
    private _nPort: number;
    private _sCode: string;
    private _sHost: string;
    private _sProtocol: string;
    private _sSrvc: string;


    constructor(private info: object)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get nPort(): number { return this._nPort; }
    public get sCode(): string { return this._sCode; }
    public get sHost(): string { return this._sHost; }
    public get sProtocol(): string { return this._sProtocol; }


//@formatter:on


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", info));

        this.type = <kwtSrvc>this.info;

        const nPort: number = this.type.nPort;
        if (!kw.isNumber(nPort))
        {
            //console.info(log.empty("nPort"));
        }
        //console.info(log.is("nPort", nPort));
        this._nPort = nPort;


        const sCode: string = this.type.sCode;
        if (!kw.isString(sCode))
        {
            console.error(log.invalid("sCode"));
            return false;
        }
        //console.info(log.is("sCode", sCode));
        this._sCode = sCode;


        const sHost: string = this.type.sHost;
        if (!kw.isString(sHost))
        {
            //console.info(log.empty("sHost"));
        }
        //console.info(log.is("sHost", sHost));
        this._sHost = sHost;

        const sProtocol: string = this.type.sProtocol;
        if (!kw.isString(sProtocol))
        {
            //console.info(log.empty("sProtocol"));
        }
        //console.info(log.is("sProtocol", sProtocol));
        this._sProtocol = sProtocol;


        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwSrvc)
    }
}

