/**********************************************************************
 *
 * kwNgUi/ctrl/kwNgUiCtrlComp.ts
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
import {EventEmitter}           from '@angular/core';
import {Input}                  from '@angular/core';
import {OnDestroy}              from '@angular/core';
import {OnChanges}              from '@angular/core';
import {OnInit}                 from '@angular/core';
import {Output}                 from '@angular/core';
import {Router}                 from '@angular/router';
import {SimpleChange}           from '@angular/core';
import {SimpleChanges}          from '@angular/core';

import {AppInjector}            from '@app/appInjector';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiAttrsStArr}       from "@kwNgUiState/attrs/kwNgUiAttrsSt";
import {kwNgUiDispStObj}        from "@kwNgUiState/disp/kwNgUiDispSt";
import {kwUiCtrlComp}           from "@kwUiCtrl/kwUiCtrlComp";



export abstract class kwNgUiCtrlComp    extends kwUiCtrlComp
                                        implements OnInit, OnDestroy, OnChanges
{

    @Input() dataIn: any;
    @Input() fltrIn: any;
    @Input() initsIn: any;
    @Input() viewIn: any;


    @Output() changed: EventEmitter<any> = new EventEmitter();

    router;

    protected constructor(
        sTag: string = "" )
    {
        super(
            AppInjector.get(kwNgUiAttrsStArr),
            AppInjector.get(kwNgUiDispStObj),
            AppInjector.get(kwNgPubSub),
            sTag    );

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


//@formatter:on

    protected getDataIn(): any { return this.dataIn;}


    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());

        this.init();
    }


    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this.destroy();
    }


    ngOnChanges(changes: SimpleChanges)
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnChanges");
        //console.log(log.called());

        if (kw.isNull(changes))
        {
            console.error(this.sClass, "::ngOnChanges() changes is invalid");
            return;
        }

        const dataIn: SimpleChange = changes.dataIn;
        if (kw.isValid(dataIn))
        {
            this.processDataIn(dataIn);
        }

        const fltrIn: SimpleChange = changes.fltrIn;
        if (kw.isValid(fltrIn))
        {
            this.processFltrIn(fltrIn);
        }

        const initsIn: SimpleChange = changes.initsIn;
        if (kw.isValid(initsIn))
        {
            this.processInitsIn(initsIn);
        }

        const viewIn: SimpleChange = changes.viewIn;
        if (kw.isValid(viewIn))
        {
            this.processViewIn(viewIn);
        }

    }

    protected navigate(sLink: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());

        if (kw.isNull(this.router))
        {
            this.router = AppInjector.get(Router);
        }

        if (!kw.isString(sLink))
        {
            console.error(this.sClass, "::navigate() sLink is invalid");
            return;
        }
        this.router.navigate([sLink]);
    }

    protected publish($event: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());

        if (kw.isNull($event))
        {
            console.error(this.sClass, "::publish() $event is invalid");
            return;
        }
        //console.info(log.isObj("$event"), $event);

        this.changed.emit($event);
    }

    processDataIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processDataIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
             return;
        }

        //console.info(this.sClass, "::processDataIn() change is [", change, "]");

        const dataIn = change.currentValue;
        //console.info(this.sClass, "::processDataIn() dataIn is [", dataIn, "]");

        this.storeData(dataIn);
    }

    processFltrIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processFltrIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processFltrIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processFltrIn() not initialized");
            return;
        }

        const fltrIn = change.currentValue;
        //console.info(this.sClass, "::processFltrIn() fltrIn is [", fltrIn, "]");

        this.storeFltr(fltrIn);

    }

    processInitsIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processInitsIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

        //console.info(this.sClass, "::processInitsIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processInitsIn() not initialized");
            return;
        }

        const initsIn = change.currentValue;
        //console.info(this.sClass, "::processInitsIn() initsIn is [", initsIn, "]");

        this.storeInit(initsIn);

    }

    processViewIn(change: SimpleChange)
    {
        const log: kwLog = new kwLog(this.sClass, "processViewIn");
        //console.log(log.called());

        if (kw.isNull(change))
        {
            return;
        }

       //console.info(this.sClass, "::processViewIn() change is [", change, "]");
        if (!change.isFirstChange())
        {
            console.error(this.sClass, "::processViewIn() not initialized");
            return;
        }

        const viewIn = change.currentValue;
        //console.info(this.sClass, "::processViewIn() viewIn is [", viewIn, "]");

        this.storeView(viewIn);
    }

    onChanged($event)
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        if (kw.isNull($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        //console.info(log.isObj("$event"), $event);

        this.changed.emit($event);
    }

}
