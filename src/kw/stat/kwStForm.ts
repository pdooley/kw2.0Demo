/**********************************************************************
 *
 * kw/stat/kwStForm.ts
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
import * as _               from "lodash";

import {kw}               from "@kw/kw";
import {kwFctyMsg}        from "@kwFcty/msg/kwFctyMsg";
import {kwFormEnum}       from "@kwClass/form/kwFormEnum";
import {kwFormSrvc}       from "@kwClass/form/kwFormSrvc";
import {kwLog}            from "@kw/kwLog";
import {kwMsg}            from "@kwClass/msg/kwMsg";
import {kwSt}             from "@kwStat/kwSt";
import {kwStMdl}          from "@kwStat/kwStMdl";
import {kwStMsg}          from "@kwStat/kwStMsg";
import {kwStTrace}         from "./kwStTrace";
import {kwBs} from "@kwClass/Bs/kwBs";
//@formatter:off

const sDATA_TYPE: string = "Form";


export abstract class kwStForm extends kwSt
{
    protected constructor(
        srvcTrace: kwStTrace,
        protected srvcFcty: kwFctyMsg,
        protected srvcMdl: kwStMdl,
        protected srvcMsg: kwStMsg,
        data?: object   )
    {
        super(
            sDATA_TYPE,
            srvcTrace,
            data    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    protected abstract loadRec(record: object): object;


    protected setValImpl(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setValImpl");
        //console.log(log.called());

        this.traceInt(data);

         // Notify the observers
        this.subject.next(data);
    }

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return false;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(log.invalid("srvcMdl"));
            return false;
        }

        if (!kwStMsg.is(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }

        return true;
    }

    public createRec(nForm: kwFormEnum, obj: object): object
    {
        const log: kwLog = new kwLog(this.sClass, "createRec");
        //console.log(log.called());

        if (!kwFormSrvc.in(nForm))
        {
            console.error(log.invalid("nForm"));
            return;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(log.invalid("srvcMdl"));
            return;
        }

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return;
        }

        let rec: object;

        switch (nForm)
        {
            case kwFormEnum.add:
            {
                const recAdd: object = this.srvcMdl.createRec();
                if (kw.isNull(recAdd))
                {
                    console.error(log.invalid("recAdd"));
                    return;
                }

                rec = this.loadRec(recAdd);
                break;
            }

            case kwFormEnum.edit:
            {
                rec = this.loadRec(obj);
                break;
            }

            case kwFormEnum.view:
            {
                rec = _.cloneDeep(obj);
                break;
            }

            default:
            {
                console.error(log.invalid("nForm"));
            }

        }

        if (kw.isNull(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }

        return rec;
    }

    public saveRec(nForm: kwFormEnum, obj: object): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "saveRec");
        //console.log(log.called());

        if (!kwFormSrvc.in(nForm))
        {
            console.error(log.invalid("nForm"));
            return false;
        }

        if (kw.isNull(obj))
        {
            console.error(log.invalid("obj"));
            return;
        }

        if (!kwStMdl.is(this.srvcMdl))
        {
            console.error(log.invalid("srvcMdl"));
            return false;
        }

        if (!kwStMsg.is(this.srvcMsg))
        {
            console.error(log.invalid("srvcMsg"));
            return false;
        }

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(log.invalid("srvcFcty"));
            return;
        }

        const objX = this.srvcMdl.xExportRec(obj);
        if (kw.isNull(objX))
        {
            console.error(log.invalid("objX"));
            return false;
        }

        let msg: kwMsg;

        switch (nForm)
        {
            case kwFormEnum.add:
            {
                msg = this.srvcFcty.add(objX);
                break;
            }

            case kwFormEnum.edit:
            {
                const nId = objX["id"];
                if (!kw.isNumber(nId))
                {
                    console.error(log.invalid("nId"));
                    return false;
                }

                msg = this.srvcFcty.edit(objX);
                break;
            }

            default:
            {
                console.error(log.invalid("nForm"));
            }

        }

        if (!kwMsg.is(msg))
        {
            console.error(log.invalid("msg"));
            return;
        }

        this.srvcMsg.val = msg;

        return true;
    }

}




