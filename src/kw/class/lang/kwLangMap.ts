/**********************************************************************
 *
 * kw/class/Lang/kwLangMap.ts
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

import {kwLangType }               from "./kwLangType";
//@formatter:off


export class kwLangMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwLangMap::constructor() called.");
    }

    createMap(): boolean
    {
        //console.log("kwLangMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwLangMap::init() data is invalid");
            return false;
        }

        const theArr = <kwLangType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwLangMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    xImport(record: object): object
    {
        //console.log("kwLangMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwLangMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwLangMap::ximport() error creating x.");
            return
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwLangMap::xImport() sCode is invalid.");
            return;
        }

        const sName: string = x.getString("sName");
        if (!kw.isString(sName))
        {
            console.error("kwLangMap::xImport() sName is invalid.");
            return;
        }

        const sNative: string = x.getString("sNative");
        if (!kw.isString(sNative))
        {
            console.error("kwLangMap::xImport() sNative is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwLangMap::xImport() nId is invalid.");
            return;
        }

        const type: kwLangType = {
            sCode: sCode,
            sName: sName,
            sNative: sNative,
            nId: nId
        }

        return type;
    }



}
