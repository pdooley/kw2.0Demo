/**********************************************************************
 *
 * kw/class/route/kwRouteMap.ts
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

import {kwRouteType }              from "./kwRouteType";
import {kwStateX }                 from "@kwClass/kwStateX";
//@formatter:off


export class kwRouteMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwRouteMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwRouteMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwRouteMap::init() data is invalid");
            return false;
        }

        const theArr = <kwRouteType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwRouteMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    xImport(record: object): object
    {
        //console.log("kwLangMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwRouteMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwRouteMap::ximport() error creating x.");
            return
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwRouteMap::xImport() sCode is invalid.");
            return;
        }

        const sVal: string = x.getString("sVal");
        if (!kw.isString(sVal))
        {
            console.error("kwRouteMap::xImport() sVal is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwRouteMap::xImport() nId is invalid.");
            return;
        }

        const type: kwRouteType = {
            sCode: sCode,
            sVal: sVal,
            nId: nId,
        }

        return type;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwRouteMap)
    }

}
