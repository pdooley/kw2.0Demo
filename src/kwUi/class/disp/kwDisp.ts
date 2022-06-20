/**********************************************************************
 *
 * kwUi/class/disp/kwDisp.ts
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
import {kwtBs }            from "@kwClass/Bs/kwtBs";
import {kwtDisp }          from "./kwtDisp";



export class kwDisp
{
    protected sClass: string = this.constructor.name;

    private _bDispAll: boolean;
    private _bDispData: boolean;
    private _bDispFltr: boolean;
    private _bDispId: boolean;
    private _bDispInits: boolean;
    private _bDispMaster: boolean;
    private _bDispTag: boolean;
    private _bDispView: boolean;

    private type: kwtDisp;


    constructor(private info: object)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public get bDispAll(): boolean      { return this._bDispAll; }
    public get bDispData(): boolean     { return this._bDispData; }
    public get bDispFltr(): boolean     { return this._bDispFltr;  }
    public get bDispId(): boolean       { return this._bDispId;  }
    public get bDispInits(): boolean    { return this._bDispInits; }
    public get bDispMaster(): boolean   { return this._bDispMaster; }
    public get bDispTag(): boolean      { return this._bDispTag; }
    public get bDispView(): boolean     { return this._bDispView; }


//@formatter:on


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        const info = this.info;
        if (kw.isNull(info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.is("info", info));

        const tBS = <kwtBs>info;
        const disp = tBS.display;
        if (!kw.isValid(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp, "]");

        this.type = <kwtDisp>disp;


        const bDispAll: boolean = this.type.bDispAll;
        if (!kw.isBoolean(bDispAll))
        {
            console.error(log.invalid("bDispAll"));
            return false;
        }
        //console.info(log.is("bDispAll", bDispAll));
        this._bDispAll = bDispAll;


        const bDispData: boolean = this.type.bDispData;
        if (!kw.isBoolean(bDispData))
        {
            console.error(log.invalid("bDispData"));
            return false;
        }
        //console.info(log.is("bDispData", bDispData));
        this._bDispData = bDispData;


        const bDispFltr: boolean = this.type.bDispFltr;
        if (!kw.isBoolean(bDispFltr))
        {
            console.error(log.invalid("bDispFltr"));
            return false;
        }
        //console.info(log.is("bDispFltr", bDispFltr));
        this._bDispFltr = bDispFltr;


        const bDispId: boolean = this.type.bDispId;
        if (!kw.isBoolean(bDispId))
        {
            console.error(log.invalid("bDispId"));
            return false;
        }
        //console.info(log.is("bDispId", bDispId));
        this._bDispId = bDispId;


        const bDispInits: boolean = this.type.bDispInits;
        if (!kw.isBoolean(bDispInits))
        {
            console.error(log.invalid("bDispInits"));
            return false;
        }
        //console.info(log.is("bDispInits", bDispInits));
        this._bDispInits = bDispInits;


        const bDispMaster: boolean = this.type.bDispMaster;
        if (!kw.isBoolean(bDispMaster))
        {
            console.error(log.invalid("bDispMaster"));
            return false;
        }
        //console.info(log.is("bDispMaster", bDispMaster));
        this._bDispMaster = bDispMaster;


        const bDispTag: boolean = this.type.bDispTag;
        if (!kw.isBoolean(bDispTag))
        {
            console.error(log.invalid("bDispTag"));
            return false;
        }
        //console.info(log.is("bDispTag", bDispTag));
        this._bDispTag = bDispTag;


        const bDispView: boolean = this.type.bDispView;
        if (!kw.isBoolean(bDispView))
        {
            console.error(log.invalid("bDispView"));
            return false;
        }
        //console.info(log.is("bDispView", bDispView));
        this._bDispView = bDispView;


        return true;
    }

    public dispData(val: any): void
    {
        if (kw.isNull(val)) { return; }
        if (!this.bDispData && !this.bDispAll) { return; }
        const log: kwLog = new kwLog(this.sClass, "dispData");
        //console.info(log.is("data",  val));
    }

    public dispFltr(val: any): void
    {
        if (kw.isNull(val)) { return; }
        if (!this.bDispFltr && !this.bDispAll) { return; }
        const log: kwLog = new kwLog(this.sClass, "dispFltr");
        //console.info(log.is("fltr",  val));
    }

    public dispId(val: any): void
    {
        if (kw.isNull(val)) { return; }
        if (!this.bDispId && !this.bDispAll) { return; }
        const log: kwLog = new kwLog(this.sClass, "dispId");
        //console.info(log.is("id",  val));
    }

    public dispInits(val: any): void
    {
        if (kw.isNull(val)) { return; }
        if (!this.bDispInits && !this.bDispAll) { return; }
        const log: kwLog = new kwLog(this.sClass, "dispInits");
        //console.info(log.is("inits",  val));
    }

    public dispView(val: any): void
    {
        if (kw.isNull(val)) { return; }
        if (!this.bDispView && !this.bDispAll) { return; }
        const log: kwLog = new kwLog(this.sClass, "dispView");
        //console.info(log.is("view",  val));
    }


    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwDisp)
    }

}
