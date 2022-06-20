/**********************************************************************
 *
 * kw/class/url/kwUrl.ts
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
import {kwAjax}                 from "@kwClass/ajax/kwAjax";
import {kweUrl}                 from "@kwClass/url/kweUrl";
import {kwLog}                  from "@kw/kwLog";
import {kwSrvc }                from "@kwClass/srvc/kwSrvc";
import {kwSrvcs }               from "@kwClass/srvcs/kwSrvcs";
import {kwtUrl }                from "./kwtUrl";



export abstract class kwUrl
{
    protected sClass: string = this.constructor.name;


    private ajax: kwAjax;
    private srvc: kwSrvc;
    private srvcs: kwSrvcs;

    protected sHost: string;
    protected sPath: string;
    protected sProtocol: string;
    protected sTempl: string;

    protected nPort: number;

    protected _sUrl: string;
    protected _params: object[];


    static is(obj: object): boolean
    {
        return kw.is(obj, kwUrl);
    }


    protected constructor(
        private nType: kweUrl,
        private type: kwtUrl   )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get sUrl(): string { return this._sUrl; }
    public get params(): object[] { return this._params; }


    protected abstract createPath(): boolean;
    protected abstract createUrl(): boolean;


//@formatter:on

    init()
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.type))
        {
            console.error("kwUrl::init() type is not valid.");
            return false;
        }
        //console.info("kwUrl::init() type is ", this.type);

        const ajax: kwAjax = this.type.ajax;
        if (!kwAjax.is(ajax))
        {
            console.error("kwUrl::init() ajax is invalid");
            return false;
        }
        //console.info("kwUrl::init() ajax is ", ajax);
        this.ajax = ajax;

        const srvcs: kwSrvcs = this.type.srvcs;
        if (!kw.isValid(srvcs))
        {
            console.error("kwUrl::init() srvcs is invalid");
            return false;
        }
        //console.info("kwUrl::init() srvcs is ", srvcs);
        this.srvcs = srvcs;

        const params = this.type.params;
        if (kw.isNull(params))
        {
            //console.info("kwUrl::init() params is empty.");
        }
        //console.info("kwUrl::init() params is ", params);
        this._params = params;

        if (!kw.isArray(this.params))
        {
            //console.info("kwUrl::init() params is empty");
        }

        if (!this.retrieveSrvc())
        {
            console.error("kwUrl::init() error retrieving srvc");
            return false;
        }

        if (!this.retrieveHost())
        {
            console.error("kwUrl::init() error retrieving host");
            return false;
        }

        if (!this.retrievePort())
        {
            console.error("kwUrl::init() error retrieving port");
            return false;
        }

        if (!this.retrieveProtocol())
        {
            console.error("kwUrl::init() error retrieving protocol");
            return false;
        }

        if (!this.retrieveTemplate())
        {
            console.error("kwUrl::init() error retrieving template");
            return false;
        }

        if (!this.createPath())
        {
            console.error("kwUrl::init() error creating path");
            return false;
        }

        if (!this.createUrl())
        {
            console.error("kwUrl::init() error creating url");
            return false;
        }
        //console.info(log.is("sUrl", this._sUrl));


        return true;
    }


    retrieveHost(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveHost");
        //console.log(log.called());

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrieveHost() srvc is empty.");
            return true;
        }

        const sHost: string = this.srvc.sHost;
        if (!kw.isString(sHost))
        {
            //console.info("kwUrl::retrieveHost() sHost is empty.");
        }
        //console.info("kwUrl::retrieveHost() sHost is ", sHost);
        this.sHost = sHost;

        return true;
    }

    retrievePort(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrievePort");
        //console.log(log.called());

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrievePort() srvc is empty.");
            return true;
        }

        const nPort: number = this.srvc.nPort;
        if (!kw.isNumber(nPort))
        {
            //console.info("kwUrl::retrievePort() nPort is empty.");
        }
        //console.info("kwUrl::retrievePort() nPort is ", nPort);
        this.nPort = nPort;

        return true;
    }

    retrieveProtocol(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveProtocol");
        //console.log(log.called());

        if (!kwSrvc.is(this.srvc))
        {
            //console.info("kwUrl::retrieveProtocol() srvc is empty.");
            return true;
        }

        const sProtocol: string = this.srvc.sProtocol;
        if (!kw.isString(sProtocol))
        {
            //console.info("kwUrl::retrieveProtocol() sProtocol is empty.");
        }
        //console.info("kwUrl::retrieveProtocol() sProtocol is ", sProtocol);
        this.sProtocol = sProtocol;

        return true;
    }

    retrieveSrvc(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveSrvc");
        //console.log(log.called());

        if (kw.isNull(this.srvcs))
        {
            console.error("kwUrl::retrieveSrvc() ajax is not valid.");
            return false;
        }

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwUrl::retrieveSrvc() ajax is invalid");
            return false;
        }

        const sSrvc: string = this.ajax.sSrvc;
        if (!kw.isString(sSrvc))
        {
            //console.info("kwUrl::retrieveSrvc() sSrvc is empty");
            return true;
        }
        //console.info("kwUrl::retrieveSrvc() sSrvc is ", sSrvc);

        const info: object = this.srvcs.getByCode(sSrvc);
        if (kw.isNull(info))
        {
            console.error("kwUrl::retrieveSrvc() error retrieving info.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() info is ", info);

        const srvc: kwSrvc = new kwSrvc(info);
        if (!srvc.init())
        {
            console.error("kwUrl::retrieveSrvc() error creating srvc.");
            return false;
        }
        //console.info("kwUrl::retrieveSrvc() srvc is ", srvc);
        this.srvc = srvc;

        return true;
    }

    retrieveTemplate(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveTemplate");
        //console.log(log.called());

        if (!kwAjax.is(this.ajax))
        {
            console.error("kwUrl::retrieveTemplate() ajax is invalid.");
            return false;
        }

        const sTempl = this.ajax.sTmpl;
        if (!kw.isString(sTempl))
        {
            console.error("kwUrl::retrieveTemplate() sTempl is invalid");
            return false;
        }
        //console.info("kwUrl::retrieveTemplate() sTempl is ", sTempl);
        this.sTempl = sTempl;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

}
