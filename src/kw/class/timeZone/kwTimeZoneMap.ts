/**********************************************************************
 *
 * kw/class/timeZone/kwTimeZoneMap.ts
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
import {kw }                       from "@kw/kw";
import {kwMap }                    from "@kwClass/kwMap";
import {kwStateX }                 from "@kwClass/kwStateX";

import {kwTimeZoneType }                 from "./kwTimeZoneType";
//@formatter:off


export class kwTimeZoneMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwTimeZoneMap::constructor() called.");
    }

    createMap(): boolean
    {
        //console.log("kwTimeZoneMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwTimeZoneMap::init() data is invalid");
            return false;
        }

        const theArr = <kwTimeZoneType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwTimeZoneMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    xImport(rec: object): object
    {
        //console.log("kwTimeZoneMap::ximport() called.");

        if (kw.isNull(rec))
        {
            console.error("kwTimeZoneMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(rec);
        if (!x.init())
        {
            console.error("kwMdlMap::ximport() error creating x.");
            return
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwTimeZoneMap::xImport() sCode is invalid.");
            return;
        }

        const sName: string = x.getString("sName");
        if (!kw.isString(sName))
        {
            console.error("kwTimeZoneMap::xImport() sName is invalid.");
            return;
        }

        const sNative: string = x.getString("sNative");
        if (!kw.isString(sNative))
        {
            console.error("kwTimeZoneMap::xImport() sNative is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwTimeZoneMap::xImport() nId is invalid.");
            return;
        }

        const type: kwTimeZoneType = {
            sCode: sCode,
            sName: sName,
            nId: nId
        }

        return type;
    }



}
