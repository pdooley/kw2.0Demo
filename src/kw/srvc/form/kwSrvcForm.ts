/**********************************************************************
 *
 * kw/srvc/form/kwSrvcForm.ts
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

import {kw }               from "@kw/kw";
import {kwFctyMsg }        from "@kwFcty/msg/kwFctyMsg";
import {kwFormEnum }       from "@kwClass/form/kwFormEnum";
import {kwFormSrvc }       from "@kwClass/form/kwFormSrvc";
import {kwMsg }            from "@kwClass/msg/kwMsg";
import {kwStMdl }          from "@kwStat/kwStMdl";
import {kwStMsg }          from "@kwStat/kwStMsg";



export abstract class kwSrvcForm
{

    protected sClass: string = this.constructor.name;

    protected constructor(
        private src: kwStMdl,
        private srvcDst: kwStMsg,
        protected srvcFcty: kwFctyMsg  )
    {
        //console.log(this.sClass, "::constructor() called.");

        this.init();
    }

//@formatter:on

    protected abstract loadRec(record: object): object;

    protected init(): boolean
    {
        //console.log(this.sClass, "::init() called");

        if (!kwFctyMsg.is(this.srvcDst))
        {
            console.error(this.sClass, "::createRec() srvcDst is invalid.");
            return false;
        }

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(this.sClass, "::createRec() srvcFcty is invalid.");
            return false;
        }

        if (!kwFctyMsg.is(this.src))
        {
            console.error(this.sClass, "::createRec() src is invalid.");
            return false;
        }

        return true;
    }

    public createRec(nForm: kwFormEnum, obj: object): object
    {
        //console.log(this.sClass, "::createRec() called");

        if (!kwFormSrvc.in(nForm))
        {
            console.error(this.sClass, "::createRec() nForm is invalid.");
            return;
        }

        if (!kwStMdl.is(this.src))
        {
            console.error(this.sClass, "::createRec() srvcMdl is invalid.");
            return;
        }

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(this.sClass, "::createRec() srvcFcty is invalid.");
            return;
        }

        let rec: object;

        switch (nForm)
        {
            case kwFormEnum.add:
            {
                const recAdd: object = (<kwStMdl>this.src).createRec();
                if (kw.isNull(recAdd))
                {
                    console.error(this.sClass, "::createRec() error creating record.");
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

        }

        if (kw.isNull(rec))
        {
            console.error(this.sClass, "::createRec() error creating record.");
            return;
        }

        return rec;
    }

    public saveRec(nForm: kwFormEnum, obj: object): boolean
    {
        //console.log(this.sClass, "::saveRec() called");

        if (!kwFormSrvc.in(nForm))
        {
            console.error(this.sClass, "::saveRec() nForm is invalid.");
            return false;
        }

        if (kw.isNull(obj))
        {
            console.error(this.sClass, "::saveRec() obj is invalid.");
            return;
        }

        if (!kwStMdl.is(this.src))
        {
            console.error(this.sClass, "::saveRec() srvcMdl is invalid.");
            return false;
        }

        if (!kwFctyMsg.is(this.srvcFcty))
        {
            console.error(this.sClass, "::saveRec() srvcFcty is invalid.");
            return false;
        }

        const objX = (<kwStMdl>this.src).xExportRec(obj);
        if (kw.isNull(objX))
        {
            console.error(this.sClass, "::saveRec() objX is invalid");
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
                    console.error(this.sClass, "::saveRec() nId is invalid");
                    return false;
                }

                msg = this.srvcFcty.edit(objX);

                break;
            }

            default:
            {
                console.error(this.sClass, "::saveRec() nForm is invalid");
                return false;
            }

        }

        if (!kwMsg.is(msg))
        {
            console.error(this.sClass, "::saveRec() error creating msg");
            return;
        }

        //this.load(msg);

        return true;
    }

}




