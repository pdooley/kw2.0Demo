/**********************************************************************
 *
 * kwUi/class/mdl/kwMdls.ts
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
import {kw}           from "@kw/kw";
import {kwMdl}        from "@kwClass/mdl/kwMdl";
import {kweMdl}       from "@kwClass/mdl/kweMdl";
import {kwMdlSrvc}    from "@kwClass/mdl/kwMdlSrvc";
import {kwMdlSub}     from "@kwClass/mdl/kwMdlSub";
import {kwtMdl}       from "@kwClass/mdl/kwtMdl";
//@formatter:on

export class kwViews
{
    constructor(
        private mdls: object  )
    {
        //console.log("kwMdls::constructor() is called.");
    }

    init(): boolean
    {
        //console.log("kwMdls::init() called.");

        if (kw.isNull(this.mdls))
        {
            console.error("kwMdls::init() mdls is invalid.");
            return false;
        }
        //console.info("kwMdls::init() mdls is ", this.mdls);

        return true;
    }

    retrieve(sMdl): kwMdl
    {
        //console.log("kwMdls::retrieve() called.");

        if (!kw.isString(sMdl))
        {
            console.error("kwMdl::retrieve() sMdl is invalid.");
            return;
        }
        //console.info("kwMdl::retrieve() mdls is ", this.mdls);

        if (kw.isNull(this.mdls))
        {
            console.error("kwMdl::retrieve() mdls is invalid.");
            return;
        }
        //console.info("kwMdl::retrieve() mdls is ", this.mdls);

        const type: kwtMdl     = this.mdls[sMdl];
        if (kw.isNull(type))
        {
            console.error("kwMdl::retrieve() mdl for [", sMdl, "] is not available.");
            return;
        }
        //console.info("kwMdl::retrieve() type is ", type);

        const sType = type.sType;
        if (!kw.isString(sType))
        {
            console.error("kwMdl::retrieve() sType is invalid.");
            return;
        }
        //console.info("kwMdl::retrieve() sType is ", sType);

        const nType: kweMdl     = kwMdlSrvc.toEnum(sType);
        if (!kwMdlSrvc.in(nType))
        {
            console.error("kwMdl::retrieve() nType is invalid.");
            return;
        }

        if (nType !== kweMdl    .sub)
        {
            console.error("kwMdl::retrieve() nType is invalid.");
            return;
        }

        const mdl: kwMdl = new kwMdlSub(type);
        if (!mdl.init())
        {
            console.error("kwMdl::get() error initialising mdl.");
            return;
        }

        return mdl;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwViews)
    }

}
