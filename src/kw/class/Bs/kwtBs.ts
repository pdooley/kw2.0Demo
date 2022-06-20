/**********************************************************************
 *
 * kw/class/api/kwtBs.ts
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
import {kwtAutoLogin }         from "@kwClass/autoLogin/kwtAutoLogin";
import {kwtAttr }              from "@kwUiClass/attr/kwtAttr";
import {kwtCred }              from "@kwClass/cred/kwtCred";
import {kwtDisp }              from "@kwUiClass/disp/kwtDisp";
import {kwtRedirect }          from "@kwClass/redirect/kwtRedirect";
import {kwtRoutes }            from "@kwClass/routes/kwtRoutes";
import {kwtSrvc }              from "@kwClass/srvc/kwtSrvc";
import {kwTrace }              from "@kwClass/trace/kwTrace";
//@formatter:on


export class kwtBs
{
    apis: object;
    attrs: kwtAttr[];
    autoLogin: kwtAutoLogin;
    credentials: kwtCred;
    display: kwtDisp;
    mdls: object;
    sMode: string;
    redirect: kwtRedirect;
    routes: kwtRoutes;
    srvcs: kwtSrvc[];
    trace: kwTrace;
}
