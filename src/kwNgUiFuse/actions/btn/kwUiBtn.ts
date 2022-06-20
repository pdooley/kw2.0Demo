/**********************************************************************
 *
 * kwNgUiFuse/btn/kwUiBtn.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@btnatter:off

import {Component}              from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import * as _                   from "lodash";

import {kw}                     from "@kw/kw";
import {kwBtn}                  from "../../../kwUi/class/btn/kwBtn";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "../../../kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwNgPubSub}             from "../../../kwNg/pubSub/kwNgPubSub";
import {kwUitBtn}               from "./kwUitBtn";


const sBTN: string              = "Btn";


@Component({
    selector     : 'kw-ui-actions-btn',
    templateUrl  : './kwUiBtn.html',
    styleUrls    : ['./kwUiBtn.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiBtn extends kwNgUiCtrlComp
{

    public sType: string;
    public sTopic: string;

    constructor(
        private pubSub: kwNgPubSub   )
    {
        super();

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public onClick(): void
    {
        const log: kwLog = new kwLog(this.sClass, "onClick");
        //console.log(log.called());


        if (!_.isString(this.sText))
        {
            console.error(log.invalid("sText"));
            return;
        }
        //console.info(log.is("sText", this.sText));


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

        this.pubSub.pub(this.sTopic, this.sText);
    }


    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());


        if (!this.createTopic())
        {
            console.error(log.errCreate("topic"));
            return;
        }
    }

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
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
        //console.info(log.isObj("view"), view);


        const type: kwUitBtn = <kwUitBtn>view;


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }


        if (kw.isNull(this.sText))
        {
            console.error(log.requires("sText"));
            return;
        }


        const sType: string = type.sType;
        if (kw.isString(sType))
        {
            //console.info(log.isObj("sType"), sType);
            this.sType = sType;
        }
        else
        {
            console.error(log.requires("sType"));
            return;
        }

    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


    protected createTopic(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopic");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        if (!kw.isString(this.sType))
        {
            console.error(log.invalid("sType"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopic = kwBtn.createTopic(this.sState, this.sType);
        if (!kw.isString(sTopic))
        {
            console.error(log.errCreate("sTopic"));
            return false;
        }
        //console.info(log.is("sTopic", sTopic));
        this.sTopic = sTopic;

        return true;
    }

}
