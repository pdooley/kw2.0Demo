/**********************************************************************
 *
 * kw/fcty/mdl/kwFctyMdl.ts
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
import {kweMdl }                from "@kwClass/mdl/kweMdl";
import {kwMap }                 from "@kwClass/kwMap";
import {kwMdl }                 from "@kwClass/mdl/kwMdl";
import {kwMdlFull }             from "@kwClass/mdl/kwMdlFull";
import {kwMdlSub }              from "@kwClass/mdl/kwMdlSub";
import {kwMdlSrvc }             from "@kwClass/mdl/kwMdlSrvc";
import {kwtMdl }                from "@kwClass/mdl/kwtMdl";
//@formatter:on


const sPARAMS: string = "params";
const sTYPE: string = "sType";

export class kwFctyMdl
{
    static create(
        info: kwtMdl,
        currs: kwMap,
        langs: kwMap,
        tZs: kwMap  ): kwMdl
    {
        //console.log("kwMdl::create() called");

        if (kw.isNull(info))
        {
            console.error("kwMdl::create() info is invalid");
            return;
        }
        //console.info("kwMdl::create() info is ", info);

        if (!kwMap.is(currs))
        {
            console.error("kwMdl::create() currs is invalid");
            return;
        }
        //console.info("kwMdl::create() currs is ", currs);

        if (!kwMap.is(langs))
        {
            console.error("kwMdl::create() langs is invalid");
            return;
        }
        //console.info("kwMdl::create() langs is ", langs);

        if (!kwMap.is(tZs))
        {
            console.error("kwMdl::create() tZs is invalid");
            return;
        }
        //console.info("kwMdl::create() tZs is ", tZs);

        const sMdl: string = info[sTYPE];
        if (!kw.isString(sMdl))
        {
            console.error("kwMdl()::create() sMdl is invalid.");
            return;
        }
        //console.info("kwMdl()::create() sMdl is ", sMdl);

        const params: object[] = info[sPARAMS];
        if (!kw.isArray(params))
        {
            console.error("kwMdl()::create() params is invalid.");
            return;
        }
        //console.info("kwMdl()::create() params is ", params);

        const nMdl: kweMdl = kwMdlSrvc.toEnum(sMdl);
        if (!kwMdlSrvc.in(nMdl))
        {
            console.error("kwMdl()::create() nMdl is invalid.");
            return;
        }

        let mdl: kwMdl;

        switch (nMdl)
        {
            case kweMdl.full:
            {
                mdl = new kwMdlFull(info, currs, tZs, langs);
                break;
            }

            case kweMdl.sub:
            {
                mdl = new kwMdlSub(info);
                break;
            }

            default:
            {
                console.error("kwMdl()::create() nMdl is invalid.");
                return;
            }
        }

        if (!kwMdl.is(mdl))
        {
            console.error("kwMdl()::create() error creating mdl.");
            return;
        }

        if (!mdl.init())
        {
            console.error("kwMdl()::create() error initializing mdl.");
            return;
        }
        //console.info("kwMdl()::create() mdl is ", mdl);

        return mdl;
    }
}

