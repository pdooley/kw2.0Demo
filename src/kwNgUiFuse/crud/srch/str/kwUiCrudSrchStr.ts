/**********************************************************************
 *
 * kwNgUiFuse/crud/srch/str/kwUiCrudSrchStr.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {Component}                  from '@angular/core';
import {ViewEncapsulation}          from '@angular/core';
import {FormControl}                from "@angular/forms";

import { debounceTime }             from 'rxjs/operators';
import { distinctUntilChanged }     from 'rxjs/operators';
import { takeUntil }                from 'rxjs/operators';
import { Subject }                  from 'rxjs';

import * as _                       from "lodash";

import {fuseAnimations}             from "@fuse/animations/index";

import {kw}                         from "@kw/kw";
import {kwGrid}                     from "../../../../kwUiAgGrid/class/grid/kwGrid";
import {kwLog}                      from "@kw/kwLog";
import {kwNgUiCtrlComp}             from "@kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwNgPubSub}                 from "../../../../kwNg/pubSub/kwNgPubSub";
import {kwState}                    from "../../../../kw/class/state/kwState";
import {kwUitCrudSrchStr}              from "./kwUitCrudSrchStr";


const sTAG: string = "str";

@Component({
    selector:       'kw-ui-crud-srch-str',
    templateUrl:    'kwUiCrudSrchStr.html',
    styleUrls:      ['kwUiCrudSrchStr.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwUiCrudSrchStr extends kwNgUiCtrlComp
{

    private sParam: string;
    private sTopicGridFltr: string;
    private sTopicStateAll: string;
    private sTopicStateGet: string;

    //searchInput: FormControl;

    public  sVal: string = "";


    // Private
    private _unsubscribeAll: Subject<any>;



    constructor(
        private pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());

        //this.searchInput = new FormControl('');
    }


//@formatter:on

    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.createTopicsGrid();
        this.createTopicsState();

        // Set the private defaults
        //this._unsubscribeAll = new Subject();

        //this.searchInput = new FormControl('');

/*        this.searchInput.valueChanges
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(searchText => {
                this.onChanged(searchText);
            });
*/
        return true;
    }

    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }


    public onSrchSrch(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onSrchSrch");
        //console.log(log.called());

        if (!kw.isString(this.sTopicGridFltr))
        {
            console.error(log.invalid("sTopicGridFltr"));
            return;
        }
        //console.info(log.isObj("sTopicGridFltr"), this.sTopicGridFltr);


        if (!kw.isString(this.sTopicStateAll))
        {
            console.error(log.invalid("sTopicStateAll"));
            return;
        }
        //console.info(log.isObj("sTopicStateAll"), this.sTopicStateAll);


        if (!kw.isString(this.sParam))
        {
            console.error(log.invalid("sParam"));
            return;
        }
        //console.info(log.isObj(this.sParam), this.sParam);


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }


        //console.info(log.isObj("sVal"), this.sVal);

        let fltr: string[] = [];
        fltr.push(this.sParam);
        fltr.push("==");
        fltr.push(this.sVal);


        this.pubSub.pub(this.sTopicStateAll, fltr);
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

    protected parseData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseData");
        //console.log(log.called());
    }

    protected parseInits(inits: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseInits");
        //console.log(log.called());
    }

    protected parseView(view: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());

        if (!_.isString(this.sText))
        {
            console.error(log.requires("sText"));
            return;
        }

        if (!_.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }

        if (!_.isString(this.sStateSt))
        {
            console.error(log.requires("sStateSt"));
            return;
        }

        if (!kw.isValid(view))
        {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwUitCrudSrchStr = <kwUitCrudSrchStr>(view);

        const sParam = type.sParam;
        if (!kw.isString(sParam))
        {
            console.error(log.requires("sParam"));
            return;
        }
        this.sParam = sParam;
        //console.info(log.isObj("sParam"), this.sParam);
    }


    private createTopicsGrid(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsGrid");
        //console.log(log.called());

        if (!_.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return;
        }

        const sTopicFltr = kwGrid.createTopicFltr(this.sState);
        if (!_.isString(sTopicFltr))
        {
            console.error(log.errCreate("sTopicFltr"));
            return;
        }
        //console.info(log.is("sTopicFltr", sTopicFltr));
        this.sTopicGridFltr = sTopicFltr;

    }

    private createTopicsState(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsState");
        //console.log(log.called());

        if (!_.isString(this.sStateSt))
        {
            console.error(log.invalid("sStateSt"));
            return;
        }


        const sTopicAll = kwState.createTopicAll(this.sStateSt);
        if (!_.isString(sTopicAll))
        {
            console.error(log.errCreate("sTopicAll"));
            return;
        }
        //console.info(log.is("sTopicAll", sTopicAll));
        this.sTopicStateAll = sTopicAll;


        const sTopicGet = kwState.createTopicGet(this.sStateSt);
        if (!_.isString(sTopicGet))
        {
            console.error(log.errCreate("sTopicGet"));
            return;
        }
        //console.info(log.is("sTopicGet", sTopicGet));
        this.sTopicStateGet = sTopicGet;

    }

}
