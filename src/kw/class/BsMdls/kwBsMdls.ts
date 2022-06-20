/**********************************************************************
 *
 * kw/class/BsMdls/kwBsMdls.ts
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
import {kw}             from "@kw/kw";
import {kweMdl}         from "@kwClass/mdl/kweMdl";
import {kwLog}          from "@kw/kwLog";
import {kwMdl}          from "@kwClass/mdl/kwMdl";
import {kwMdlMap}       from "@kwClass/mdl/kwMdlMap";
import {kwMdlSrvc}      from "@kwClass/mdl/kwMdlSrvc";
import {kwMdlSub}       from "@kwClass/mdl/kwMdlSub";
import {kwtMdl}         from "@kwClass/mdl/kwtMdl";

const sPROP: string     = "mdls";

//@formatter:on


export class kwBsMdls
{
    protected sClass: string = this.constructor.name;

    mdls: kwMdlMap;

    constructor(
        private info: object  )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);

        const arr: object[] = this.info[sPROP];
        if (!kw.isArray(arr))
        {
            console.error(log.errLoad("arr"));
            return false;
        }
        //console.info(log.isObj("arr"), arr);

        const mdls: kwMdlMap = new kwMdlMap(arr);
        if (!mdls.init())
        {
            console.error(log.errCreate("mdls"));
            return false;
        }
        //console.info(log.isObj("mdls"), mdls);
        this.mdls = mdls;

        return true;
    }

    retrieve(sMdl): kwMdl
    {
        const log: kwLog = new kwLog(this.sClass, "retrieve");
        //console.log(log.called());

        if (!kw.isString(sMdl))
        {
            console.error(log.invalid("sMdl"));
            return;
        }
        //console.info(log.isObj("info"), this.info);

        if (kw.isNull(this.mdls))
        {
            console.error(log.invalid("mdls"));
            return;
        }
        //console.info(log.isObj("mdls"), this.mdls);

        const type: kwtMdl = this.mdls[sMdl];
        if (kw.isNull(type))
        {
            console.error(log.info("mdl for [" + sMdl + "] is not available."));
            return;
        }
        //console.info(log.isObj("type"), type);

        const sType = type.sType;
        if (!kw.isString(sType))
        {
            console.error(log.invalid("sType"));
            return;
        }
        //console.info(log.is("sType", sType));

        const nType: kweMdl = kwMdlSrvc.toEnum(sType);
        if (!kwMdlSrvc.in(nType))
        {
            console.error(log.invalid("nType"));
            return;
        }
        //console.info(log.is("nType", nType));

        if (nType !== kweMdl.sub)
        {
            console.error(log.invalid("nType"));
            return;
        }

        const mdl: kwMdl = new kwMdlSub(type);
        if (!mdl.init())
        {
            console.error(log.errCreate("mdl"));
            return;
        }

        return mdl;
    }

    getItem(sItem: string): kwtMdl
    {
        const log: kwLog = new kwLog(this.sClass, "getItem");
        //console.log(log.called());

        if (!kw.isString(sItem))
        {
            console.error(log.invalid("sItem"));
            return;
        }
        //console.info(log.isObj("sItem"), sItem);

        if (!kw.isValid(this.mdls))
        {
            console.error(log.invalid("mdls"));
            return;
        }
        //console.info(log.isObj("mdls"), this.mdls);

        return <kwtMdl>this.mdls.getByCode(sItem);
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBsMdls)
    }

}
