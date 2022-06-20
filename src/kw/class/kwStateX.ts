/**********************************************************************
 *
 * kw/class/kwStateX.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {kw }                       from "@kw/kw";
//@formatter:on


const bINVALID            = undefined;


export class kwStateX
{


    public static xExport(srvc, records)
    {
        //console.log("kwStateX::xExport() called.");

        const recordsNew = [];

        if (!kw.isFunction(srvc))
        {
            console.error("kwStateX::xExport() srvc is invalid.");
            return
        }
        records = kw.isArray(records) ? records : new Array(records);

        if (kw.isNull(records))
        {
            console.error("kwStateX::xExport() records is invalid.");
            return
        }

        for (let i=0; i<records.length; i++)
        {
            const rec = records[i];
            if (!srvc.isValid(rec))
            {
                console.error("kwStateX::xExport() rec is invalid.");
                return
            }

            const recNew = srvc.xExport(rec);
            if (kw.isNull(rec))
            {
                console.error("kwStateX::xExport() rec is invalid.");
                continue;
            }
            recordsNew.push(rec);
        }
        //console.debug("kwStateX::xExport() recordsNew is ", recordsNew);

        return recordsNew;
    }

    public static xImport(srvc, records)
    {
        //console.log("kwStateX::xImport() called.");

        const recordsNew = [];

        if (kw.isNull(srvc))
        {
            console.error("kwStateX::xImport() srvc is invalid.");
            return
        }
        records = kw.isArray(records) ? records : new Array(records);

        for (let i=0; i<records.length; i++)
        {
            const rec = records[i];
            if (kw.isNull(rec))
            {
                console.error("kwStateX::xImport() rec is invalid.");
                continue;
            }

            const recNew = srvc.xImport(rec);
            if (!srvc.isValid(recNew))
            {
                console.error("kwStateX::xImport() recNew is invalid.");
                return
            }

            recordsNew.push(recNew);
        }
        //console.debug("kwStateX::xImport() recordsNew is ", recordsNew);

        return recordsNew;
    }

    constructor(private rec: object)
    {
        //console.log("kwStateX::constructor() called.");
    }

    public init(): boolean
    {
        //console.log("kwStateX::init() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::init() rec is invalid.");
            return false;
        }

        return true;
    }

    public getArray(
        sField: string,
        bIsRequired: boolean = true ): object[]

    {
        //console.log("kwStateX::getArray() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::getArray() rec is invalid.");
            return undefined;
        }

        if (!kw.isString(sField))
        {
            console.error("kwStateX::getArray() sField is invalid.");
            return undefined;
        }

        if (!this.rec.hasOwnProperty(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getArray() field [" + sField + "] is missing.");
                return undefined;
            }
            else
            {
                return undefined;
            }
        }

        const val = this.rec[sField];
        if (!kw.isArray(val))
        {
            console.error("kwStateX::getArray() field [" + sField + "] is undefined.");
        }

        return val;
    }

    public getBoolean(
        sField: string,
        bIsRequired: boolean = true ): boolean
    {
        //console.log("kwStateX::getBoolean() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::getBoolean() rec is invalid.");
            return bINVALID;
        }

        if (!kw.isString(sField))
        {
            console.error("kwStateX::getBoolean() sField is invalid.");
            return bINVALID;
        }

        if (!this.rec.hasOwnProperty(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getBoolean() field [" + sField + "] is missing.");
                return bINVALID;
            }
            else
            {
                return bINVALID;
            }
        }

        let bVal = this.rec[sField];
        if (kw.isBoolean(bVal))
        {
            return bVal;
        }

        if (kw.isString(bVal))
        {
            bVal = parseInt(bVal, 10);
        }

        const bVal2 = kw.toBool(bVal);
        if (kw.isNull(bVal2))
        {
            console.error("kwStateX::getBoolean() sField is invalid.");
            return bINVALID;
        }

        return bVal2;
    }

    public getNumber(
        sField: string,
        bIsRequired: boolean = true ): number
    {
        //console.log("kwStateX::getNumber() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::getNumber() rec is invalid.");
            return undefined;
        }

        if (!kw.isString(sField))
        {
            console.error("kwStateX::getNumber() sField is invalid.");
            return undefined;
        }

        if (!this.rec.hasOwnProperty(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getNumber() field [" + sField + "] is missing.");
                return undefined;
            }
            else
            {
                return undefined;
            }
        }

        const nVal = this.rec[sField];
        if (kw.isNumber(nVal))
        {
            return nVal;
        }

        if (kw.isBoolean(nVal))
        {
            return nVal ? 1 : 0;
        }

        if (kw.isString(nVal))
        {
            return parseInt(nVal, 10);
        }

        console.error("kwStateX::getNumber() field [" + sField + "] is invalid.");
        return undefined;
    }

    public getObject(
        sField: string,
        bIsRequired: boolean = true ): object
    {
        //console.log("kwStateX::getObject() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::getObject() rec is invalid.");
            return undefined;
        }

        if (!kw.isString(sField))
        {
            console.error("kwStateX::getObject() sField is invalid.");
            return undefined;
        }

        if (!this.rec.hasOwnProperty(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getObject() field [" + sField + "] is missing.");
                return undefined;
            }
            else
            {
                return undefined;
            }
        }

        const val = this.rec[sField];
        if (kw.isNull(val))
        {
            console.error("kwStateX::getObject() field [" + sField + "] is undefined.");
        }

        return val;
    }

    public getString(
        sField: string,
        bIsRequired: boolean = true ): string
    {
        //console.log("kwStateX::getString() called.");

        if (kw.isNull(this.rec))
        {
            console.error("kwStateX::getString() rec is invalid.");
            return undefined;
        }

        if (!kw.isString(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getString() sField is invalid.");
            }
            return undefined;
        }

        if (!this.rec.hasOwnProperty(sField))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getString() field [" + sField + "] is missing.");
            }
            return undefined;
        }

        const sVal = this.rec[sField];
        if (!kw.isString(sVal))
        {
            if (bIsRequired)
            {
                console.error("kwStateX::getString() field [" + sField + "] is invalid.");
            }
            return undefined;
        }

        return sVal;
    }

    public getTime(
        sField: string,
        bIsRequired: boolean = true ): string
    {
        //console.log("kwStateX::getTime() called.");

        const sTime = this.getString(sField, bIsRequired);
        if (!kw.isString(sTime))
        {
            console.error("kwStateX::getTime() sTime is invalid.");
            return undefined;
        }

        if (sTime.length === 0)
        {
            return sTime;
        }

        if (sTime[0] === 'e')
        {
            return undefined;
        }

        return sTime;
    }

}




