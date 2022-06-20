/**********************************************************************
 *
 * kw/class/trace/kwTrace.ts
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
import {kwLog} from "@kw/kwLog";
import {kw} from "@kw/kw";
import {kwtBs} from "@kwClass/Bs/kwtBs";
import {kwtDisp} from "@kwUiClass/disp/kwtDisp";
import {kwtTrace} from "@kwClass/trace/kwtTrace";

//@formatter:off

export class kwTrace
{

    protected sClass: string = this.constructor.name;

    private trace: kwtTrace;

    _bApp:      boolean = true;
    _bBs:       boolean = true;
    _bLoad:     boolean = false;
    _bPubSub:   boolean = false;
    _bRoutes:   boolean = false;
    _bState:    boolean = false;
    _bUi:       boolean = false;

    constructor(private info?: object)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    get bApp(): boolean { return this._bApp; }
    get bBs(): boolean { return this._bBs; }
    get bLoad(): boolean { return this._bLoad; }
    get bPubSub(): boolean { return this._bPubSub; }
    get bRoutes(): boolean { return this._bRoutes; }
    get bState(): boolean { return this._bState; }
    get bUi(): boolean { return this._bUi; }


    set bApp(val: boolean) { this._bApp = val; }
    set bBs(val: boolean) { this._bBs = val; }
    set bLoad(val: boolean) { this._bLoad = val; }
    set bPubSub(val: boolean) { this._bPubSub = val; }
    set bRoutes(val: boolean) { this._bRoutes = val; }
    set bState(val: boolean) { this._bState = val; }
    set bUi(val: boolean) { this._bUi = val; }


    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        const info = this.info;
        if (kw.isNull(info))
        {
            //console.info(log.empty("info"));
            return true;
        }
        //console.info(log.is("info", info));

        const tBS = <kwtBs>info;


        const trace: kwtTrace = tBS.trace;
        if (!kw.isValid(trace))
        {
            console.error(log.invalid("trace"));
            return false;
        }
        //console.info(log.isObj("trace"), trace, "]");
        this.trace = trace;


        const bApp: boolean = this.trace.bApp;
        if (!kw.isBoolean(bApp))
        {
            console.error(log.invalid("bApp"));
            return false;
        }
        //console.info(log.is("bApp", bApp));
        this._bApp = bApp;


        const bBs: boolean = this.trace.bBs;
        if (!kw.isBoolean(bBs))
        {
            console.error(log.invalid("bBs"));
            return false;
        }
        //console.info(log.is("bBs", bBs));
        this._bBs = bBs;


        const bLoad: boolean = this.trace.bLoad;
        if (!kw.isBoolean(bLoad))
        {
            console.error(log.invalid("bLoad"));
            return false;
        }
        //console.info(log.is("bLoad", bLoad));
        this._bLoad = bLoad;


        const bPubSub: boolean = this.trace.bPubSub;
        if (!kw.isBoolean(bPubSub))
        {
            console.error(log.invalid("bPubSub"));
            return false;
        }
        //console.info(log.is("bPubSub", bPubSub));
        this._bPubSub = bPubSub;


        const bRoutes: boolean = this.trace.bRoutes;
        if (!kw.isBoolean(bRoutes))
        {
            console.error(log.invalid("bRoutes"));
            return false;
        }
        //console.info(log.is("bRoutes", bRoutes));
        this._bRoutes = bRoutes;


        const bState: boolean = this.trace.bState;
        if (!kw.isBoolean(bState))
        {
            console.error(log.invalid("bState"));
            return false;
        }
        //console.info(log.is("bState", bState));
        this._bState = bState;


        const bUi: boolean = this.trace.bUi;
        if (!kw.isBoolean(bUi))
        {
            console.error(log.invalid("bUi"));
            return false;
        }
        //console.info(log.is("bState", bState));
        this._bUi = bUi;


        return true;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTrace);
    }

 }
