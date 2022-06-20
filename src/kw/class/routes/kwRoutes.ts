/**********************************************************************
 *
 * kw/class/routes/kwRoutes.ts
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
import {kw}               from "@kw/kw";
import {kwLog}            from "@kw/kwLog";
import {kwtRoutes}        from "@kwClass/routes/kwtRoutes";



export class kwRoutes
{
    protected sClass: string = this.constructor.name;

    private _sLogin:    string;
    private _sLogout:   string;
    private _sMain:     string;
    private _sRegister: string;
    private _sReset:    string;

    type:      kwtRoutes;


    constructor(private data: object)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get sLogin(): string             { return this._sLogin;}
    public get sLogout(): string            { return this._sLogout;}
    public get sMain(): string              { return this._sMain;}
    public get sRegister(): string          { return this._sRegister;}
    public get sReset(): string             { return this._sReset;}


//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.data))
        {
            console.error(log.invalid("data"));
            return false;
        }
        //console.info(log.isObj("data"), this.data, "]");

        this.type = <kwtRoutes>this.data;

        const sLogin: string = this.type.sLogin;
        if (!kw.isString(sLogin) || sLogin.length === 0)
        {
            console.error(log.invalid("sLogin"));
            return false;
        }
        //console.info(log.is("sLogin", sLogin));
        this._sLogin = sLogin;


        const sLogout: string = this.type.sLogout;
        if (!kw.isString(sLogout) || sLogout.length === 0)
        {
            console.error(log.invalid("sLogout"));
            return false;
        }
        //console.info(log.is("sLogout", sLogout));
        this._sLogout = sLogout;


        const sMain: string = this.type.sMain;
        if (!kw.isString(sMain))
        {
            console.error(log.invalid("sMain"));
            return false;
        }
        //console.info(log.is("sMain", sMain));
        this._sMain = sMain;


        const sRegister: string = this.type.sRegister;
        if (!kw.isString(sRegister) || sRegister.length === 0)
        {
            console.error(log.invalid("sRegister"));
            return false;
        }
        //console.info(log.is("sRegister", sRegister));
        this._sRegister = sRegister;


        const sReset: string = this.type.sReset;
        if (!kw.isString(sReset) || sReset.length === 0)
        {
            console.error(log.invalid("sReset"));
            return false;
        }
        //console.info(log.is("sReset", sReset));
        this._sReset = sReset;

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwRoutes)
    }
}

