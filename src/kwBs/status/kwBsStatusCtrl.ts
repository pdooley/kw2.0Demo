/**********************************************************************
 *
 * kwBs/stat/kwBsStatusCtrlStat.ts.ts
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
import {Component}              from "@angular/core";
import {OnDestroy}              from '@angular/core';
import {OnInit}                 from '@angular/core';
import {Subject}                from "rxjs";
import {takeUntil}              from "rxjs/operators";

import {AppInjector}            from "@app/appInjector";

import {kw}                     from "@kw/kw";
import {kwBsApisStObj}          from "@kwBsState/apis/kwBsApisSt";
import {kwBsCurrsStMap}         from "@kwBsState/currs/kwBsCurrsSt";
import {kwBsLangsStMap}         from "@kwBsState/langs/kwBsLangsSt";
import {kwBsMdlsStObj}          from "@kwBsState/mdls/kwBsMdlsSt";
import {kwBsSrvcsStObj}         from "@kwBsState/srvcs/kwBsSrvcsSt";
import {kwBsStatusStStatBs}     from "./kwBsStatusSt";
import {kwBsTokensStObj}        from "@kwBsState/tokens/kwBsTokensSt";
import {kwTraceStTrace}         from "@kwBsState/../trace/kwTraceSt";
import {kwBsTimeZonesStMap}     from "@kwBsState/timeZones/kwBsTimeZonesSt";
import {kwLog}                  from "@kw/kwLog";
import {kwStatusBs}             from "@kwClass/statusBs/kwStatusBs";
import {kwStatusBsBase}         from "@kwClass/statusBs/kwStatusBsBase";
import {kwStatusBsComplete}     from "@kwClass/statusBs/kwStatusBsComplete";
import {kwStatusBsMdls}         from "@kwClass/statusBs/kwStatusBsMdls";
import {kwStatusBsTrace}        from "@kwClass/statusBs/kwStatusBsTrace";


//@formatter:on

/*
    init = 0,
    trace,
    base,
    mdls,
    complete,
*/


@Component({selector: 'kw-bootstrap-status-ctrl-val', template: ``})
export class kwBsStatusCtrlStat implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;

    private srvcApis:   kwBsApisStObj;
    private srvcCurrs:  kwBsCurrsStMap;
    private srvcLangs:  kwBsLangsStMap;
    private srvcMdls:   kwBsMdlsStObj;
    private srvcSrvcs:  kwBsSrvcsStObj;
    private srvcStore:  kwBsStatusStStatBs;
    private srvcTokens: kwBsTokensStObj;
    private srvcTrace:  kwTraceStTrace;
    private srvcTzs:    kwBsTimeZonesStMap;


    _unSubApis:       Subject<any>;
    _unSubCurrs:      Subject<any>;
    _unSubLangs:      Subject<any>;
    _unSubMdls:       Subject<any>;
    _unSubSrvcs:      Subject<any>;
    _unSubTokens:     Subject<any>;
    _unSubTrace:      Subject<any>;
    _unSubTzs:        Subject<any>;


    constructor()
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        this.srvcApis = AppInjector.get(kwBsApisStObj);
        this.srvcCurrs = AppInjector.get(kwBsCurrsStMap);
        this.srvcLangs = AppInjector.get(kwBsLangsStMap);
        this.srvcMdls = AppInjector.get(kwBsMdlsStObj);
        this.srvcSrvcs = AppInjector.get(kwBsSrvcsStObj);
        this.srvcStore = AppInjector.get(kwBsStatusStStatBs);
        this.srvcTokens = AppInjector.get(kwBsTokensStObj);
        this.srvcTrace = AppInjector.get(kwTraceStTrace);
        this.srvcTzs = AppInjector.get(kwBsTimeZonesStMap);
    }

    ngOnInit()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        //console.info(log.is("srvcTrace.bBs", this.srvcTrace.bBs));

        const stat = this.srvcStore.get();
        //console.info(log.isObj("stat"), stat);

        this.subInit();
    };

    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

    }


    protected loadBase(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadBase");
        //console.log(log.called());

        if (kw.isNull(info))
        {
            //console.info(log.info("[info] is not set - remaining in BS base phase."));
            return;
        }

        const currs: Object = this.srvcCurrs.get();
        if (kw.isNull(currs))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[currs] is not set - remaining in BS base phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("currs"), currs);}

        const langs: Object = this.srvcLangs.get();
        if (kw.isNull(langs))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[langs] is not set - remaining in BS base phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("langs"), langs);}

        const tZs: Object = this.srvcTzs.get();
        if (kw.isNull(tZs))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[tZs] is not set - remaining in BS base phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("tZs"), tZs);}

        if (this.srvcTrace.bBs){console.info(log.info("[currs,langs,Tzs] loaded - moving to BS mdls phase."));}

        this.unSubBase();
        this.subMdls();

        const stat: kwStatusBs = new kwStatusBsMdls();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.errCreate("kwStatusBs"));
            return;
        }

        if (!stat.init())
        {
            console.error(log.errInit("kwStatusBs"));
            return;
        }

        this.srvcStore.val = stat;
    }


    protected loadInit(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadInit");
        //console.log(log.called());

        //console.log(log.is("srvcTrace.bBs", this.srvcTrace.bBs));

        if (kw.isNull(info))
        {
            //console.info(log.info("[trace] is not set - remaining in BS init phase."));
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("trace"), info);}


        if (this.srvcTrace.bBs){console.info(log.info("[trace] loaded - moving to BS Trace phase."));}

        this.unSubInit();
        this.subTrace();

        const stat: kwStatusBs = new kwStatusBsTrace();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.errCreate("stat"));
            return;
        }

        if (!stat.init())
        {
            console.error(log.errInit("stat"));
            return;
        }

        this.srvcStore.val = stat;
    }


    protected loadMdls(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadMdls");
        //console.log(log.called());

        //console.log(log.is("srvcTrace.bBs", this.srvcTrace.bBs));

        if (kw.isNull(info))
        {
            //console.info(log.info("[mdls] is not set - remaining in BS mdls phase."));
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("mdls"), info);}


        if (this.srvcTrace.bBs){console.info(log.info("[mdls] loaded - moving to BS Complete phase."));}

        this.unSubMdls();

        const stat: kwStatusBs = new kwStatusBsComplete();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.errCreate("stat"));
            return;
        }

        if (!stat.init())
        {
            console.error(log.errInit("stat"));
            return;
        }

        this.srvcStore.val = stat;
    }

    protected loadTrace(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadTrace");
        //console.log(log.called());

        //console.log(log.is("srvcTrace.bBs", this.srvcTrace.bBs));

        if (kw.isNull(info))
        {
            //console.info(log.info("[info] is not set - remaining in BS Trace phase."));
            return;
        }

        const apis: Object = this.srvcApis.get();
        if (kw.isNull(apis))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[apis] is not set - remaining in BS Trace phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("apis"), apis);}

        const srvcs: Object = this.srvcSrvcs.get();
        if (kw.isNull(srvcs))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[srvcs] is not set - remaining in BS Trace phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("srvcs"), srvcs);}

        const tokens: Object = this.srvcTokens.get();
        if (kw.isNull(tokens))
        {
            if (this.srvcTrace.bBs){console.info(log.info("[tokens] is not set - remaining in BS Trace phase."));}
            return;
        }
        if (this.srvcTrace.bBs){console.info(log.isObj("tokens"), tokens);}

        if (this.srvcTrace.bBs){console.info(log.info("[apis, srvcs,tokens] loaded - moving to BS Base phase."));}

        this.unSubTrace();
        this.subBase();

        const stat: kwStatusBs = new kwStatusBsBase();
        if (!kwStatusBs.is(stat))
        {
            console.error(log.errCreate("stat"));
            return;
        }

        if (!stat.init())
        {
            console.error(log.errInit("stat"));
            return;
        }

        this.srvcStore.val = stat;

    }

    private subBase(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subBase");
        //console.log(log.called());

        this._unSubCurrs      = new Subject();
        this._unSubLangs      = new Subject();
        this._unSubTzs        = new Subject();

        this.srvcCurrs.val
            .pipe(takeUntil(this._unSubCurrs))
            .subscribe( (val) => {
                this.loadBase(val);
            });

        this.srvcLangs.val
            .pipe(takeUntil(this._unSubLangs))
            .subscribe( (val) => {
                this.loadBase(val);
            });

        this.srvcTzs.val
            .pipe(takeUntil(this._unSubTzs))
            .subscribe( (val) => {
                this.loadBase(val);
            });

    };

    private subInit()
    {
        const log: kwLog = new kwLog(this.sClass, "subInit");
        //console.log(log.called());

        this._unSubTrace    = new Subject();

        this.srvcTrace.val
            .pipe(takeUntil(this._unSubTrace))
            .subscribe( (val) => {
                this.loadInit(val);
            });
    };


    private subMdls()
    {
        const log: kwLog = new kwLog(this.sClass, "subInit");
        //console.log(log.called());

        this._unSubMdls    = new Subject();

        this.srvcMdls.val
            .pipe(takeUntil(this._unSubMdls))
            .subscribe( (val) => {
                this.loadMdls(val);
            });
    };


    private subTrace()
    {
        const log: kwLog = new kwLog(this.sClass, "subTrace");
        //console.log(log.called());

        this._unSubApis         = new Subject();
        this._unSubSrvcs        = new Subject();
        this._unSubTokens       = new Subject();

        this.srvcApis.val
            .pipe(takeUntil(this._unSubApis))
            .subscribe( (val) => {
                this.loadTrace(val);
            });

        this.srvcSrvcs.val
            .pipe(takeUntil(this._unSubSrvcs))
            .subscribe( (val) => {
                this.loadTrace(val);
            });

        this.srvcTokens.val
            .pipe(takeUntil(this._unSubTokens))
            .subscribe( (val) => {
                this.loadTrace(val);
            });
    };

    private unSubBase(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubBase");
        //console.log(log.called());

        if (kw.isValid(this._unSubCurrs))
        {
            this._unSubCurrs.next();
            this._unSubCurrs.complete();
        }

        if (kw.isValid(this._unSubLangs))
        {
            this._unSubLangs.next();
            this._unSubLangs.complete();
        }

        if (kw.isValid(this._unSubTzs))
        {
            this._unSubTzs.next();
            this._unSubTzs.complete();
        }

    }


    private unSubInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubInit");
        //console.log(log.called());

        if (kw.isValid(this._unSubTrace))
        {
            this._unSubTrace.next();
            this._unSubTrace.complete();
        }
    }


    private unSubMdls(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubMdls");
        //console.log(log.called());

        if (kw.isValid(this._unSubMdls))
        {
            this._unSubMdls.next();
            this._unSubMdls.complete();
        }
    }


    private unSubTrace(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubTrace");
        //console.log(log.called());

        if (kw.isValid(this._unSubApis))
        {
            this._unSubApis.next();
            this._unSubApis.complete();
        }

        if (kw.isValid(this._unSubSrvcs))
        {
            this._unSubSrvcs.next();
            this._unSubSrvcs.complete();
        }

        if (kw.isValid(this._unSubTokens))
        {
            this._unSubTokens.next();
            this._unSubTokens.complete();
        }
    }


}
