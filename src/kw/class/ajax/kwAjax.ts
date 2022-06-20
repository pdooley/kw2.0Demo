/**********************************************************************
 *
 * kw/class/ajax/kwAjax.ts
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
import {kw }                        from "@kw/kw";
import {kwAjaxEnum }                from "./kwAjaxEnum";
import {kwAjaxSrvc }                from "./kwAjaxSrvc";
import {kwAjaxType }                from "./kwAjaxType";
import {kwLog}                      from "@kw/kwLog";
import {kwUrlSrvc}                  from "@kwClass/url/kwUrlSrvc";
//@formatter:on


export class kwAjax
{
    protected sClass: string = this.constructor.name;

    private _sSrvc: string;
    private _sTmpl: string;
    private _sToken: string;

    //private _nSrvc: number;

    constructor(
        private nType: kwAjaxEnum,
        private type: kwAjaxType  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    //get nSrvc(): number {return this._nSrvc;}
    get sSrvc(): string {return this._sSrvc;}
    get sTmpl(): string {return this._sTmpl;}
    get sToken(): string {return this._sToken;}



    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);

        if (!kwAjaxSrvc.in(this.nType))
        {
            console.error(log.invalid("nType"));
            return false;
        }
        //console.info(log.isObj("nType"), this.nType);

        const sTmpl: string = this.type.sTemplate;
        if (!kw.isString(sTmpl))
        {
            console.error(log.invalid("sTmpl"));
            return false;
        }
        //console.info(log.isObj("sTmpl"), sTmpl);
        this._sTmpl = sTmpl;

        const sToken: string = this.type.sToken;
        if (!kw.isString(sToken))
        {
            //console.info(log.empty("sToken"));
        }
        //console.info(log.isObj("sToken"), this.sToken);
        this._sToken = sToken;

        if (!this.retrieveSrvc())
        {
            console.error(log.errLoad("Srvc"));
            return false;
        }

        return true;
    }

    private retrieveSrvc(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveSrvc");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error(log.invalid("type"));
            return false;
        }
        //console.info(log.isObj("type"), this.type);

        if (!kwAjaxSrvc.in(this.nType))
        {
            console.error(log.invalid("nType"));
            return false;
        }
        //console.info(log.isObj("nType"), this.nType);

        const sSrvc: string = this.type.sService;
        if (!kw.isString(sSrvc))
        {
            console.error(log.invalid("sSrvc"));
            return false;
        }
        //console.info(log.isObj("sSrvc"), sSrvc);
        this._sSrvc = sSrvc;

        return true
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwAjax)
    }
}

