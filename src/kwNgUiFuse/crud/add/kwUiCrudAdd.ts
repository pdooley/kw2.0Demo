/**********************************************************************
 *
 * kwNgUiFuse/crud/add/kwUiCrudAdd.ts
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

import * as _                       from "lodash";

import {fuseAnimations}             from "@fuse/animations/index";

import {kw}                         from "@kw/kw";
import {kwDlg}                      from "@kwUiClass/dlg/kwDlg";
import {kwLog}                      from "@kw/kwLog";
import {kwNgPubSub}                 from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}             from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitCrudAdd}               from "./kwUitCrudAdd";


const sTAG: string                  = "add";


@Component({
    selector:       'kw-ui-crud-add',
    templateUrl:    'kwUiCrudAdd.html',
    styleUrls:      ['kwUiCrudAdd.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiCrudAdd extends kwNgUiCtrlComp
{
    
    public sIcon:        string;

    public sTopic:      string;

    
    constructor(
        private pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on

    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());


        this.createTopics();

        return true;
    }

    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
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


        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitCrudAdd = <kwUitCrudAdd>view;


        const sIcon: string = type.sIcon;
        if (kw.isString(sIcon))
        {
            //console.info(log.isObj("sIcon"), sIcon);
            this.sIcon = sIcon;
        }
        else
        {
            console.error(log.requires("sIcon"));
            return;
        }


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }

    }


    private createTopics(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());


        if (!_.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopic = kwDlg.createTopicAdd(this.sState);
        if (!_.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", sTopic));
        this.sTopic = sTopic;
    }


    onAdd(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onAdd");
        //console.log(log.called());


        if (!_.isString(this.sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", this.sTopic));


        if (_.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }


        this.pubSub.pub(this.sTopic, "add");
    }

}
