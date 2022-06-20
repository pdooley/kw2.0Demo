/**********************************************************************
 *
 * kw/class/curr/kwCurrMap.ts
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

import {kwCurrType }               from "./kwCurrType";
//@formatter:off


export class kwCurrMap extends kwMap
{

    constructor(data: object[])
    {
        super(data);
        //console.log("kwCurrMap::constructor() called.");
    }

    protected createMap(): boolean
    {
        //console.log("kwCurrMap::createMap() called.");

        if (kw.isNull(this.theArr))
        {
            console.error("kwCurrMap::init() data is invalid");
            return false;
        }

        const theArr = <kwCurrType[]>this.theArr;

        const theMap = new Map(
            theArr.map(x => [x.sCode, x] as [string, object] )
        );
        //console.info("kwCurrMap::createMap() theMap is ", theMap);

        this.setMap(theMap);

        return true;
    }

    public xImport(record: object): object
    {
        //console.log("kwCurrMap::ximport() called.");

        if (kw.isNull(record))
        {
            console.error("kwCurrMap::ximport() record is invalid.");
            return
        }

        const x: kwStateX = new kwStateX(record);
        if (!x.init())
        {
            console.error("kwCurrMap::ximport() error creating x.");
            return
        }

        const sCode: string = x.getString("sCode");
        if (!kw.isString(sCode))
        {
            console.error("kwCurrMap::xImport() sCode is invalid.");
            return;
        }

        const sName: string = x.getString("sName");
        if (!kw.isString(sName))
        {
            console.error("kwCurrMap::xImport() sName is invalid.");
            return;
        }

        const sNamePlural: string = x.getString("sNamePlural");
        if (!kw.isString(sName))
        {
            console.error("kwCurrMap::xImport() sName is invalid.");
            return;
        }

        const sSymbol: string = x.getString("sSymbol");
        if (!kw.isString(sName))
        {
            console.error("kwCurrMap::xImport() sSymbol is invalid.");
            return;
        }

        const nId: number = x.getNumber("nId");
        if (!kw.isNumber(nId))
        {
            console.error("kwCurrMap::xImport() nId is invalid.");
            return;
        }

        const nDecimalDigits: number = x.getNumber("nDecimalDigits");
        if (!kw.isNumber(nDecimalDigits))
        {
            console.error("kwCurrMap::xImport() nDecimalDigits is invalid.");
            return;
        }

        const nRounding: number = x.getNumber("nRounding");
        if (!kw.isNumber(nRounding))
        {
            console.error("kwCurrMap::xImport() nRounding is invalid.");
            return;
        }

        const type: kwCurrType = {
            sCode: sCode,
            sName: sName,
            sNamePlural: sNamePlural,
            sSymbol: sSymbol,
            nId: nId,
            nDecimalDigits: nDecimalDigits,
            nRounding: nRounding
        }

        return type;
    }



}
