/**********************************************************************
 *
 * kw/stat/kwStMdl.ts
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

import {kw}               from '../kw';
import {kwLog}            from "@kw/kwLog";
import {kwMdl}            from "@kwClass/mdl/kwMdl";
import {kwMdlSrvc}        from "@kwClass/mdl/kwMdlSrvc";
import {kwSt}             from "./kwSt";
import {kwStTrace}         from "./kwStTrace";
import {kwInit} from "@kw/kw.init";
import {kwApiSrvc} from "@kwClass/api/kwApiSrvc";
import {kwApi} from "@kwClass/api/kwApi";
//@formatter:off

const sDATA_TYPE: string = "Mdl";

export abstract class kwStMdl extends kwSt
{
    protected constructor(
        srvcTrace: kwStTrace,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data        );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        if (!kw.isValid(data))
        {
            //console.info(log.empty("data"));
            this.subject.next(null);
            return;
        }


        if (!kwMdl.is(data))
        {
            console.error(log.invalid("data"));
            return
        }
        //console.info(log.isObj("data"), data);


        this.traceInt(data);

        // Notify the observers
        this.subject.next(data);
    }

    public set(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "set");
        //console.log(log.called());

        if (!kwMdl.is(data))
        {
            console.error(log.invalid("data"));
            return
        }
        super.set(data);
    }


    public createRec(): object
    {
        const log: kwLog = new kwLog(this.sClass, "createRec");
        //console.log(log.called());

        const data = this.get();
        if (kwMdl.is(data))
        {
            console.error(log.invalid("data"));
            return
        }

        const rec: object = data.createRecord();
        if (kw.isNull(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }

        return rec;
    }

    public get(): kwMdl
    {
        const log: kwLog = new kwLog(this.sClass, "get");
        //console.log(log.called());

        return <kwMdl>this.val;
    }

    public getFirst(): kwMdl
    {
        const log: kwLog = new kwLog(this.sClass, "getFirst");
        //console.log(log.called());

        return <kwMdl>super.getFirst();
    }

    public xExport(recs: object[]): object[]
    {
        const log: kwLog = new kwLog(this.sClass, "xExport");
        //console.log(log.called());

        let data = this.get();
        return kwMdlSrvc.xExport(data, recs);
    }

    public xExportRec(rec: object): object
    {
        const log: kwLog = new kwLog(this.sClass, "xExportRec");
        //console.log(log.called());

        let data = this.get();
        return kwMdlSrvc.xExportRec(data, rec);
    }

    public xImport(recs: object[]): object[]
    {
        const log: kwLog = new kwLog(this.sClass, "xImport");
        //console.log(log.called());

        let data = this.get();
        return kwMdlSrvc.xImport(data, recs);
    }

    public xImportRec(rec: object): object
    {
        const log: kwLog = new kwLog(this.sClass, "xImportRec");
        //console.log(log.called());

        let data = this.get();
        return kwMdlSrvc.xImportRec(data, rec);
    }

    public static is(val: object): boolean
    {
        return kw.is(val, kwStMdl);
    }
}
