/**********************************************************************
 *
 * kw/class/srvc/kwSrvcMap.ts
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
import {kwMap}            from "@kwClass/kwMap";

import {kwtSrvc}          from "./kwtSrvc";
import {kwStateX}         from "@kwClass/kwStateX";
//@formatter:off


export class kwSrvcMap extends kwMap
{
    protected sClass: string = this.constructor.name;

    constructor(data: object[])
    {
        super(data);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected createMap(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createMap");
        //console.log(log.called());

        const arr = this.theArr;
        if (kw.isNull(arr))
        {
            console.error(log.invalid("arr"));
            return false;
        }
        //console.info(log.isObj("arr"), arr, "]");

        const theArr = <kwtSrvc[]>arr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwSrvcMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    xImport(record: object): object
    {
        //console.log("kwSrvcMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwSrvcMap::ximport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwSrvcMap::ximport() error creating x.");
            return;
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwSrvcMap::xImport() sCode is invalid.");
            return;
        }

        const sHost: string = x.getString("sHost");
        if (!kw.isString(sHost))
        {
            console.error("kwSrvcMap::xImport() sHost is invalid.");
            return;
        }

        const sProtocol: string = x.getString("sProtocol");
        if (!kw.isString(sProtocol))
        {
            console.error("kwSrvcMap::xImport() sProtocol is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwSrvcMap::xImport() nId is invalid.");
            return;
        }

        const nPort: number = x.getNumber("nPort");
        if (!kw.isNumber(nPort))
        {
            console.error("kwSrvcMap::xImport() nPort is invalid.");
            return;
        }

        const type: kwtSrvc = {
            sCode: sCode,
            sHost: sHost,
            sProtocol: sProtocol,
            nId: nId,
            nPort: nPort
        };

        return type;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwSrvcMap);
    }

}
