/**********************************************************************
 *
 * kwNgUiFuse/grp/kwUiGrp.ts
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

import {Component}              from '@angular/core';
import {FormControl}            from '@angular/forms';
import {FormGroup}              from '@angular/forms';
import {ViewEncapsulation}      from '@angular/core';

import * as _                   from "lodash";

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwState}                from "@kwClass/state/kwState";
import {kwUitFld}               from "./fld/kwUitFld";
import {kwUitGrp}               from "./kwUitGrp";


const sTAG: string              = "grp";

@Component({
    selector     : 'kw-ui-content-grp',
    templateUrl  : './kwUiGrp.html',
    styleUrls    : ['./kwUiGrp.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiGrp extends kwNgUiCtrlComp
{

    public flds: kwUitFld[];
    public grp: FormGroup;

    public sTopicStateAdd: string;
    public sTopicStateEdt: string;



    constructor(
        private pubSub: kwNgPubSub)
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());


        this.createTopics();


        this.pubSub.sub(this.sTopicStateEdt, this.save, this);
    }


    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());

        //console.info(log.isObj("$event"), $event);

        if (!kw.isValid(this.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), this.data);

        const data = _.merge(this.data,$event);
        //console.info(log.isObj("data"), data);

        this.storeData(data);
    }


    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
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


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitGrp = <kwUitGrp>view;


        const flds = <kwUitFld[]>type.flds;
        if (kw.isArray(flds))
        {
            //console.info(log.isObj("flds"), flds);
            this.flds = flds;
        }
        else
        {
            console.error(log.requires("flds"));
            return;
        }


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }



    private createTopics(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicAdd = kwState.createTopicAdd(this.sState);
        if (!kw.isString(sTopicAdd))
        {
            console.error(log.invalid("sTopicAdd"));
            return;
        }
        //console.info(log.is("sTopicAdd", sTopicAdd));
        this.sTopicStateAdd = sTopicAdd;


        const sTopicEdt = kwState.createTopicEdt(this.sState);
        if (!kw.isString(sTopicEdt))
        {
            console.error(log.invalid("sTopicEdt"));
            return;
        }
        //console.info(log.is("sTopicEdt", sTopicEdt));
        this.sTopicStateEdt = sTopicEdt;
    }


    private save(): void
    {
        const log: kwLog = new kwLog(this.sClass, "save");
        //console.log(log.called());

        if (!kw.isString(this.sTopicStateEdt))
        {
            console.error(log.invalid("sTopicStateEdt"));
            return;
        }
        //console.info(log.is("sTopicStateEdt", this.sTopicStateEdt));


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        this.pubSub.pub(this.sTopicStateEdt, this.data);
    }

}
