/**********************************************************************
 *
 * kw/class/kwMap.ts
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
import {kw}             from "@kw/kw"
import {kwIntf}         from "./kwIntf";
import {kwLog}          from "@kw/kwLog";
//@formatter:off


export abstract class kwMap implements kwIntf
{

    protected sClass: string = this.constructor.name;


    theMap: Map<string, object>;

    constructor(protected theArr: object[])
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    public abstract xImport(rec: object): object;
    protected abstract createMap(): boolean;

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.theArr))
        {
            console.error(log.invalid("theArr"));
            return false;
        }

        if (!this.createMap())
        {
            console.error(log.errCreate("map"));
            return false;
        }

        return true;
    }

    protected setMap(theMap: Map<string, object>): void
    {
        this.theMap = theMap;
    }

    public clear()
    {
        const log: kwLog = new kwLog(this.sClass, "clear");
        //console.log(log.called());

        this.theArr = null;
        this.theMap = null;
    }

    public retrieveArr(): object[]
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveArr");
        //console.log(log.called());

        return this.theArr;
    }

    public getMap(): Map<string, object>
    {
        const log: kwLog = new kwLog(this.sClass, "getMap");
        //console.log(log.called());

        return this.theMap;
    }

    public getByCode(sCode: string): object
    {
        const log: kwLog = new kwLog(this.sClass, "getByCode");
        //console.log(log.called());


        if (!kw.isValid(sCode))
        {
            console.error(log.invalid("sCode"));
            return;
        }


        if (!kw.isString(sCode))
        {
            console.error(log.invalid("sCode"));
            return;
        }
        //console.info(log.is("sCode", sCode));


        if (!kw.isMap(this.theMap))
        {
            console.error(log.invalid("theMap"));
            return;
        }
        //console.info(log.isObj("theMap"), this.theMap);


        const val: object = this.theMap.get(sCode);
        if (kw.isNull(val))
        {
            console.error(log.is("sCode", sCode));
            console.error(log.errLoad("val"));
            return;
        }
        //console.info(log.isObj("val"), val);


        return val;
    }

    public getById(nVal: number): object
    {
        const log: kwLog = new kwLog(this.sClass, "getById");
        //console.log(log.called());

        if (!kw.isNumber(nVal))
        {
            console.error(log.invalid("nVal"));
            return;
        }

        if (kw.isNull(this.theMap))
        {
            console.error(log.invalid("theMap"));
            return;
        }

        return this.theMap[nVal];
    }

    public toIndex(sVal: string): number
    {
        const log: kwLog = new kwLog(this.sClass, "toIndex");
        //console.log(log.called());

        if (!kw.isString(sVal))
        {
            console.error(log.invalid("sVal"));
            return -1;
        }

        if (kw.isNull(this.theMap))
        {
            console.error(log.invalid("theMap"));
            return -1;
        }

        return this.theMap[sVal];
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwMap)
    }

}
