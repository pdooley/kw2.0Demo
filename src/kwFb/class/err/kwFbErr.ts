/**********************************************************************
 *
 * kwFb/class/err/kwFbErr.ts
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
import {kwFbtErr}         from "./kwFbtErr";


const sCODE: string                         = "code";
const sMSG: string                          = "message";


export class kwFbErr
{
    protected sClass: string = this.constructor.name;

    private _sCode: string;
    private _sMsg: string;


    constructor(
        private err: kwFbtErr    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get sCode(): string { return this._sCode;}
    public get sMsg():  string { return this._sMsg;}

//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (!kw.isValid(this.err))
        {
            console.error(log.invalid("err"));
            return false;
        }
        //console.info(log.is("err", this.err));

        const sCode = this.err[sCODE];
        if (!kw.isString(sCode))
        {
            console.error(log.invalid("sCode"));
            return false;
        }
        //console.info(log.is("sCode", sCode));
        this._sCode = sCode;

        const sMsg = this.err[sMSG];
        if (!kw.isString(sMsg))
        {
            console.error(log.invalid("sMsg"));
            return false;
        }
        //console.info(log.is("sMsg", sMsg));
        this._sMsg = sMsg;

        return true;
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwFbErr);
    }
}

