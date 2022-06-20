/**********************************************************************
 *
 * kw/class/bs/kwBsStateState.ts
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

import {kw }               from "@kw/kw";
import {kwApi }            from "@kwClass/api/kwApi";
import {kwBsApis }         from "@kwClass/BsApis/kwBsApis";
import {kwApp }            from "@kwClass/app/kwApp";
import {kwAutoLogin }      from "@kwClass/autoLogin/kwAutoLogin";
import {kwAWS }            from "@kwClass/aws/kwAWS";
import {kwBsMdls }         from "@kwClass/BsMdls/kwBsMdls";
import {kwCred }           from "@kwClass/cred/kwCred";
import {kwDisp }           from "@kwUiClass/disp/kwDisp";
import {kwFctyRoutes}      from "@kwFcty/routes/kwFctyRoutes";
import {kwFctySrvcs }      from "@kwFcty/srvcs/kwFctySrvcs";
import {kwFctyTokens }     from "@kwFcty/tokens/kwFctyTokens";
import {kwLog }            from "@kw/kwLog";
import {kwRedirect }       from "@kwClass/redirect/kwRedirect";
import {kwRoutes}          from "@kwClass/routes/kwRoutes";
import {kwSrvcs }          from "@kwClass/srvcs/kwSrvcs";
import {kwtBs }            from "./kwtBs";
import {kwtAttr}           from "@kwUiClass/attr/kwtAttr";
import {kwTokens }         from "@kwClass/tokens/kwTokens";
import {kwTrace }          from "@kwClass/trace/kwTrace";


const sBOOTSTRAP: string    = "bootstrap";

export class kwBs
{
    protected sClass: string = this.constructor.name;

    _apis: kwBsApis;
    _app: kwApp;
    _attrs: kwtAttr[];
    _autoLogin: kwAutoLogin;
    _aws: kwAWS;
    _BSApi: kwApi;
    _cred: kwCred;
    _disp: kwDisp;
    _mdls: kwBsMdls;
    _redirect: kwRedirect;
    _routes: kwRoutes;
    _srvcs: kwSrvcs;
    _trace: kwTrace;
    _tokens: kwTokens;
    _type: kwtBs;



    constructor(private info: kwtBs)
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    get apis(): kwBsApis { return this._apis; }
    get app(): kwApp { return this._app; }
    get attrs(): kwtAttr[] { return this._attrs; }
    get autoLogin(): kwAutoLogin { return this._autoLogin; }
    get aws(): kwAWS { return this._aws; }
    //get BSApi(): kwApi { return this._BSApi; }
    get cred(): kwCred { return this._cred; }
    get disp(): kwDisp { return this._disp; }
    get mdls(): kwBsMdls { return this._mdls; }
    get routes(): kwRoutes { return this._routes; }
    get srvcs(): kwSrvcs { return this._srvcs; }
    get tokens(): kwTokens { return this._tokens; }
    get trace(): kwTrace { return this._trace; }
    get redirect(): kwRedirect { return this._redirect; }
    get type(): kwtBs { return this._type; }

    set apis(val: kwBsApis) { this._apis = val; }
    set app(val: kwApp) { this._app = val; }
    set attrs(val: kwtAttr[]) { this._attrs = val; }
    set autoLogin(val: kwAutoLogin) { this._autoLogin = val; }
    set aws(val: kwAWS) { this._aws = val; }
    //set BSApi(val: kwApi) { this._BSApi = val; }
    set cred(val: kwCred) { this._cred = val; }
    set disp(val: kwDisp) { this._disp = val; }
    set mdls(val: kwBsMdls) { this._mdls = val; }
    set redirect(val: kwRedirect) { this._redirect = val; }
    set routes(val: kwRoutes) { this._routes = val; }
    set srvcs(val: kwSrvcs) { this._srvcs = val; }
    set tokens(val: kwTokens) { this._tokens = val; }
    set trace(val: kwTrace) { this._trace = val; }
    set type(val: kwtBs) { this._type = val; }

//@formatter:on

    init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info, "}");

        this.type = <kwtBs>this.info;

        const attrs: kwtAttr[] = this.type.attrs;
        if (!kw.isArray(attrs))
        {
            console.error(log.errLoad("attrs"));
            return false;
        }
        //console.info(log.is("attrs", attrs));
        this.attrs = attrs;

        if (!this.retrieveApis())
        {
            console.error(log.errLoad("API"));
            return false;
        }

        if (!this.retrieveApp())
        {
            console.error(log.errLoad("app"));
            return false;
        }

        if (!this.retrieveAWS())
        {
            console.error(log.errLoad("AWS"));
            return false;
        }

        //if (!this.retrieveBSApi())
        //{
        //    console.error(log.errLoad("bsApi"));
        //    return false;
        //}

        if (!this.retrieveCred())
        {
            console.error(log.errLoad("cred"));
            return false;
        }

        if (!this.retrieveDisp())
        {
            console.error(log.errLoad("disp"));
            return false;
        }

        if (!this.retrieveMdls())
        {
            console.error(log.errLoad("mdls"));
            return false;
        }

        if (!this.retrieveRoutes())
        {
            console.error(log.errLoad("routes"));
            return false;
        }

        if (!this.retrieveSrvcs())
        {
            console.error(log.errLoad("srvcs"));
            return false;
        }

        if (!this.retrieveTokens())
        {
            console.error(log.errLoad("tokens"));
            return false;
        }

        if (!this.retrieveTrace())
        {
            console.error(log.errLoad("trace"));
            return false;
        }

        return true;
    }

    retrieveApis(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveApis");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveApis() info is ", this.info);

        const apis: kwBsApis = new kwBsApis(this.info);
        if (!apis.init())
        {
            console.error(log.errInit("apis"));
            return false;
        }
        //console.info("kwBsState::retrieveApis() apis is ", apis);
        this.apis = apis;

        return true;
    }

    retrieveApp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveApp");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), info);

        const app: kwApp = new kwApp(this.info);
        if (!app.init())
        {
            console.error(log.errInit("app"));
            return false;
        }
        //console.info(log.isObj("app"), app);
        this.app = app;

        return true;
    }


    retrieveAWS(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveAWS");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveAWS() info is ", this.info);

        const aws: kwAWS = new kwAWS(this.info);
        if (!aws.init())
        {
            console.error("kwBs::retrieveAWS() error creating aws.");
            return false;
        }
        //console.info("kwBsState::retrieveAWS() aws is ", aws);
        this.aws = aws;

        return true;
    }

/*    retrieveBSApi(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveBSApi");
        //console.log(log.called());

        if (kw.isNull(this.apis))
        {
            console.error(log.invalid("apis"));
            return false;
        }
        //console.info("kwBsState::retrieveBSApi() apis is ", this.apis);

        const api: kwApi = this.apis.getApi(sBOOTSTRAP);
        if (!kwApi.is(api))
        {
            console.error("kwBs::retrieveBSApi() error creating api.");
            return false;
        }
        //console.info("kwBsState::retrieveBSApi() api is ", api);
        this.BSApi = api;

        return true;
    }
*/
    retrieveCred(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveCred");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveCred() info is ", this.info);

        const cred: kwCred = new kwCred(this.info);
        if (!cred.init())
        {
            console.error("kwBs::retrieveCred() error creating cred.");
            return false;
        }
        //console.info("kwBsState::retrieveCreds() creds is ", creds);
        this.cred = cred;

        return true;
    }

    retrieveDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveDisp");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveDisp() info is ", this.info);

        const disp: kwDisp = new kwDisp(this.info);
        if (!disp.init())
        {
            console.error("kwBs::retrieveDisp() error creating disp.");
            return false;
        }
        //console.info("kwBsState::retrieveDisp() disp is ", disp);
        this.disp = disp;

        return true;
    }

    retrieveMdls(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveMdls");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveMdls() info is ", this.info);

        const mdls: kwBsMdls = new kwBsMdls(this.info);
        if (!mdls.init())
        {
            console.error("kwBs::retrieveMdls() error creating mdls.");
            return false;
        }
        //console.info("kwBsState::retrieveMdls() mdls is ", mdls);
        this.mdls = mdls;

        return true;
    }

    retrieveRoutes(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveRoutes");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveRoutes() info is ", this.info);

        const routes: kwRoutes = kwFctyRoutes.create(this.info);
        if (!kwRoutes.is(routes))
        {
            console.error("kwBs::retrieveRoutes() error creating routes.");
            return false;
        }
        //console.info("kwBsState::retrieveRoutes() routes is ", routes);
        this.routes = routes;

        return true;
    }

    retrieveSrvcs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveSrvcs");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveSrvcs() info is ", this.info);

        const srvcs: kwSrvcs = kwFctySrvcs.create(this.info);
        if (!kwSrvcs.is(srvcs))
        {
            console.error("kwBs::retrieveSrvcs() error creating srvcs.");
            return false;
        }
        //console.info("kwBsState::retrieveSrvcs() srvcs is ", srvcs);
        this.srvcs = srvcs;

        return true;
    }

    retrieveTokens(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveTokens");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveTokens() info is ", this.info);

        const tokens: kwTokens = kwFctyTokens.create(this.info);
        if (!kwTokens.is(tokens))
        {
            console.error("kwBs::retrieveTokens() error creating tokens.");
            return false;
        }
        //console.info("kwBsState::retrieveTokens() tokens is ", tokens);
        this.tokens = tokens;

        return true;
    }

    retrieveTrace(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveTrace");
        //console.log(log.called());

        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info("kwBsState::retrieveTrace() info is ", this.info);

        const trace: kwTrace = new kwTrace(this.info);
        if (!trace.init())
        {
            console.error("kwBs::retrieveTrace() error creating trace.");
            return false;
        }
        //console.info("kwBsState::retrieveTrace() trace is ", trace);
        this._trace = trace;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwBs)
    }

}

