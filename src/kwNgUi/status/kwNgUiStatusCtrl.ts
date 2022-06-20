/**********************************************************************
 *
 * kwNgUi/status/kwNgUiStatusCtrl.ts
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
import {NgZone}                 from "@angular/core";
import {OnInit}                 from '@angular/core';
import {OnDestroy}              from '@angular/core';
import {Subject}                from "rxjs";
import {takeUntil}              from "rxjs/operators";

import {kw}                     from "@kw/kw"
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiAttrsStArr}       from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}        from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwNgUiInitsStMap}       from "@kwNgUiState/inits/kwNgUiInitsSt";
import {kwNgUiStatusStStat}     from "@kwNgUiStatus/kwNgUiStatusSt";
import {kwNgUiViewsStMap}       from "@kwNgUiState/views/kwNgUiViewsSt";
import {kwStatusApp}            from "@kwClass/statusApp/kwStatusApp";
import {kwStatusStStatApp}      from "@kwNgStatus/kwStatusSt";
import {kwTraceStTrace}         from "@kwBs/trace/kwTraceSt";
import {kwUiStatus}             from "@kwUiClass/status/kwUiStatus";
import {kwUiStatusState}        from "@kwUiClass/status/kwUiStatusState";
import {kwUiStatusComplete}     from "@kwUiClass/status/kwUiStatusComplete";


//@formatter:on

/*
    app = 0,
    state,
    complete,
*/

@Component({selector: 'kw-ng-ui-status-ctrl-stat', template: ``})
export class kwNgUiStatusCtrlStat implements OnInit, OnDestroy
{
    protected sClass: string = this.constructor.name;


    _unSubAttrs:        Subject<any>;
    _unSubDisp:         Subject<any>;
    _unSubInits:        Subject<any>;
    _unSubStatApp:      Subject<any>;
    _unSubViews:        Subject<any>;


    constructor(
        private srvcAttrs:      kwNgUiAttrsStArr,
        private srvcDisp:       kwNgUiDispStObj,
        private srvcInits:      kwNgUiInitsStMap,
        private srvcStat:       kwNgUiStatusStStat,
        private srvcStatApp:    kwStatusStStatApp,
        private srvcTrace:      kwTraceStTrace,
        private srvcViews:      kwNgUiViewsStMap,
        private zone:           NgZone    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.subUi();
    }


    ngOnDestroy()
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

    }


    protected loadApp(stat: kwStatusApp): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadApp");
        //console.log(log.called());


        if (kw.isNull(stat))
        {
            //console.info(log.info("[stat] is not set - remaining in Ui App phase."));
            return;
        }


        if (!stat.isLoggedIn())
        {
            if (this.srvcTrace.bUi){console.info(log.info("app is not complete - remaining in Ui App phase."));}
            return;
        }
        if (this.srvcTrace.bUi){console.info(log.info("app is complete - moving to Ui State phase"));}


        this.unSubUi();
        this.subState();


        const statState: kwUiStatus = new kwUiStatusState();
        if (!kwUiStatus.is(statState))
        {
            console.error(log.errCreate("statState"));
            return;
        }


        if (!statState.init())
        {
            console.error(log.errInit("statState"));
            return;
        }


        this.srvcStat.val = statState;
    }


    protected loadState(info: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "loadState");
        //console.log(log.called());


        if (kw.isNull(info))
        {
            //console.info(log.info("[info] is not set - remaining in Ui State phase."));
            return;
        }


        const attrs: Object = this.srvcAttrs.get();
        if (kw.isNull(attrs))
        {
            if (this.srvcTrace.bUi){console.info(log.info("[attrs] is not set - remaining in Ui State phase."));}
            return;
        }
        if (this.srvcTrace.bUi){console.info(log.isObj("attrs"), attrs);}


        const disp: Object = this.srvcDisp.get();
        if (kw.isNull(disp))
        {
            if (this.srvcTrace.bUi){console.info(log.info("[disp] is not set - remaining in Ui State phase."));}
            return;
        }
        if (this.srvcTrace.bUi){console.info(log.isObj("disp"), disp);}


        const inits: Object = this.srvcInits.get();
        if (kw.isNull(inits))
        {
            if (this.srvcTrace.bUi){console.info(log.info("[inits] is not set - remaining in Ui State phase."));}
            return;
        }
        if (this.srvcTrace.bUi){console.info(log.isObj("inits"), inits);}


        const views: Object = this.srvcViews.get();
        if (kw.isNull(views))
        {
            if (this.srvcTrace.bUi){console.info(log.info("[views] is not set - remaining in Ui State phase."));}
            return;
        }
        if (this.srvcTrace.bUi){console.info(log.isObj("views"), views);}


        if (this.srvcTrace.bUi){console.info(log.info("[attrs, inits, disp, views] loaded - moving to Ui Complete phase."));}


        this.unSubState();


        const stat: kwUiStatus = new kwUiStatusComplete();
        if (!stat.init())
        {
            console.error(log.errInit("stat"));
            return;
        }


        this.srvcStatApp.val = stat;
    }


    private subState()
    {
        const log: kwLog = new kwLog(this.sClass, "subState");
        //console.log(log.called());


        this._unSubAttrs        = new Subject();
        this._unSubDisp         = new Subject();
        this._unSubInits        = new Subject();
        this._unSubViews        = new Subject();


        this.srvcAttrs.val
            .pipe(takeUntil(this._unSubAttrs))
            .subscribe( (val) => {
                this.loadState(val);
            });


        this.srvcDisp.val
            .pipe(takeUntil(this._unSubDisp))
            .subscribe( (val) => {
                this.loadState(val);
            });


        this.srvcInits.val
            .pipe(takeUntil(this._unSubInits))
            .subscribe( (val) => {
                this.loadState(val);
            });


        this.srvcViews.val
            .pipe(takeUntil(this._unSubViews))
            .subscribe( (val) => {
                this.loadState(val);
            });

    };


    private subUi()
    {
        const log: kwLog = new kwLog(this.sClass, "subUi");
        //console.log(log.called());

        this._unSubStatApp    = new Subject();

        this.srvcStatApp.val
            .pipe(takeUntil(this._unSubStatApp))
            .subscribe( (val) => {
                this.loadApp(val);
            });
    };


    private unSubState(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubState");
        //console.log(log.called());


        if (kw.isValid(this._unSubAttrs)) {
            this._unSubAttrs.next();
            this._unSubAttrs.complete();
        }


        if (kw.isValid(this._unSubDisp)) {
            this._unSubDisp.next();
            this._unSubDisp.complete();
        }


        if (kw.isValid(this._unSubInits)) {
            this._unSubInits.next();
            this._unSubInits.complete();
        }


        if (kw.isValid(this._unSubViews)) {
            this._unSubViews.next();
            this._unSubViews.complete();
        }

    }


    private unSubUi(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubUi");
        //console.log(log.called());

        if (kw.isValid(this._unSubStatApp))
        {
            this._unSubStatApp.next();
            this._unSubStatApp.complete();
        }

    }


}
