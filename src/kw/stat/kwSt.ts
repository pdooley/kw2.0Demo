/**********************************************************************
 *
 * kw/stat/kwSt.ts
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
import {BehaviorSubject}                from 'rxjs';
import {Observable}                     from 'rxjs';
import * as _                           from "lodash";

import {kw}                           from "@kw/kw";
import {kwLog}                        from "@kw/kwLog";
import {kwStTrace}                    from "@kwStat/kwStTrace";


const sDATA_TYPE: string = "Data";

//@formatter:off


export abstract class kwSt
{
    protected sClass: string = this.constructor.name;


    protected subject: BehaviorSubject<any>;

    private static id: number = 0;

    protected nId: number;

    protected constructor(
        protected sDataType: string,
        protected srvcTrace?: kwStTrace,
        private data?: object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        this.nId = kwSt.id++;

        this.init();
    }

    protected abstract setValImpl(data: any): void;

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set and get the config
     */
    public set val(value: any)
    {
        const log: kwLog = new kwLog(this.sClass, "set Val");
        //console.log(log.called());

        // Notify the observers
        this.setValImpl(value);
    }

    public get val(): any | Observable<any>
    {
        const log: kwLog = new kwLog(this.sClass, "get Val");
        //console.log(log.called());

        return this.subject.asObservable();
    }

    /**
     * Get default
     *
     * @returns {any}
     */
    public get default(): any
    {
        const log: kwLog = new kwLog(this.sClass, "get default");
        //console.log(log.called());

        return this.data;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Initialize
     *
     * @private
     */
    public init(): void
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        this.loadDefault();
    }

    protected loadDefault(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDefault");
        //console.log(log.called());

        this.subject = new BehaviorSubject(_.cloneDeep(this.data));

        return true;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    public set(value): void
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        this.val = value;
    }

    public get(): any
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());

        //console.info(log.is("nId", this.nId));

        return this.subject.getValue();
    }

    public getFirst(): any
    {
        const log: kwLog = new kwLog(this.sClass, "getFirst");
        //console.log(log.called());

        return this.get();
    }

    public clear(): void
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        // Set the config from the default config
        this.subject.next(_.cloneDeep(this.data));
    }

    public trace(): void
    {
        const log: kwLog = new kwLog(this.sClass, "trace");
        //console.log(log.called());

        this.traceInt(this.get())
    }

    protected traceInt(data: any): void
    {
        if (!this.srvcTrace.bState) {return}

        const log: kwLog = new kwLog(this.sClass, "traceInt");
        //console.log(log.called());

        const sName = this.sDataType+ " [" + this.nId + "] ";
        if (true) console.info(log.isObj(sName), data);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwSt);
    }
}
