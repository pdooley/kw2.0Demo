/**********************************************************************
 *
 * kw/class/mdl/kwMdlSrvc.ts
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
import {kw }                    from "@kw/kw";

import {kweMdl }                from "./kweMdl";
import {kwtMdl }                from "./kwtMdl";
//@formatter:on


export class kwMdlSrvc
{

    static isType(obj: object): boolean
    {
        return kw.is(obj, kwtMdl);
    }

    static in(nVal: number): boolean
    {
        return kw.in(nVal, kweMdl);
    }

    static toEnum(sVal: string): number
    {
        return kw.toEnum(sVal, kweMdl);
    }

    static xExport(srvc, recs)
    {
        //console.log("kwMdlSrvc::xExport() called.");

        if (kw.isNull(srvc))
        {
            console.error("kwMdlSrvc::xExport() srvc is invalid.");
            return;
        }

        if (!kw.isArray(recs))
        {
            console.error("kwMdlSrvc::xExport() recs is invalid.");
            return;
        }

        const recsX = srvc.xExport(recs);
        if (!kw.isArray(recsX))
        {
            console.error("kwMdlSrvc::xExport() recsX is invalid.");
            return;
        }

        return recsX;
    }

    static xExportRec(srvc, record)
    {
        //console.log("kwMdlSrvc::xExportRec() called.");

        if (kw.isNull(srvc))
        {
            console.error("kwMdlSrvc::xExportRec() srvc is invalid.");
            return;
        }

        if (kw.isNull(record))
        {
            console.error("kwMdlSrvc::xExportRec() record is invalid.");
            return;
        }

        const recX = srvc.xExportRec(record);
        if (kw.isNull(recX))
        {
            console.error("kwMdlSrvc::xExportRec() recX is invalid.");
            return;
        }

        return recX;
    }

    static xImport(srvc, recs)
    {
        //console.log("kwMdlSrvc::xImport() called.");

        if (kw.isNull(srvc))
        {
            console.error("kwMdlSrvc::xImport() srvc is invalid.");
            return false;
        }

        if (!kw.isArray(recs))
        {
            console.error("kwMdlSrvc::xImport() recs is invalid.");
            return false;
        }

        const recsX = srvc.xImport(recs);
        if (!kw.isArray(recsX))
        {
            console.error("kwMdlSrvc::xImport() recsX is invalid.");
            return;
        }

        return recsX;
    }

    static xImportRec(srvc, rec)
    {
        //console.log("kwMdlSrvc::xImportRec() called.");

        if (kw.isNull(srvc))
        {
            console.error("kwMdlSrvc::xImportRec() srvc is invalid.");
            return false;
        }

        if (kw.isNull(rec))
        {
            console.error("kwMdlSrvc::xImportRec() rec is invalid.");
            return false;
        }

        const recX = srvc.xImportRec(rec);
        if (kw.isNull(recX))
        {
            console.error("kwMdlSrvc::xImportRec() recX is invalid.");
            return;
        }

        return recX;
    }


}

