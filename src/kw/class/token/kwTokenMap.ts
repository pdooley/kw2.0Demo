/**********************************************************************
 *
 * kw/class/token/kwTokenMap.ts
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

import {kwTokenType }              from "./kwTokenType";
import {kwStateX }                 from "@kwClass/kwStateX";
//@formatter:off


export class kwTokenMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwTokenMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwTokenMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwTokenMap::init() data is invalid");
            return false;
        }

        const theArr = <kwTokenType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwTokenMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    xImport(record: object): object
    {
        //console.log("kwLangMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwTokenMap::ximport() record is invalid.");
            return;
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwTokenMap::ximport() error creating x.");
            return;
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwTokenMap::xImport() sCode is invalid.");
            return;
        }

        const sVal: string = x.getString("sVal");
        if (!kw.isString(sVal))
        {
            console.error("kwTokenMap::xImport() sVal is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwTokenMap::xImport() nId is invalid.");
            return;
        }

        const type: kwTokenType = {
            sCode: sCode,
            sVal: sVal,
            nId: nId,
        }

        return type;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwTokenMap)
    }

}
