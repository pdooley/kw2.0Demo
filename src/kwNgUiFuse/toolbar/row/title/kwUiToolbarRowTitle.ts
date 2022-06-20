/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/title/kwUiToolbarRowTitle.ts
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
import {ViewEncapsulation}      from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwBtn}                  from "../../../../kwUi/class/btn/kwBtn";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwNgPubSub}             from "../../../../kwNg/pubSub/kwNgPubSub";
import {kwUitToolbarRowTitle}   from "./kwUitToolbarRowTitle";


const sTAG: string              = "title";
const sTYPE: string             = "cancel";


@Component({
    selector     : 'kw-ui-toolbar-row-title',
    templateUrl  : './kwUiToolbarRowTitle.html',
    styleUrls    : ['./kwUiToolbarRowTitle.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiToolbarRowTitle extends kwNgUiCtrlComp
{

    public sTopic: string;


    constructor(
        private pubSub: kwNgPubSub   )
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


    protected initCmp(): void
    {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());

        this.createTopic();
    }


    public onClick(): void
    {
        const log = new kwLog(this.sClass, "onClick");
        //console.info(log.called());

        if (!kw.isString(this.sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", this.sTopic));

        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        this.pubSub.pub(this.sTopic, {})
    }


    protected parseData(data: any): void {
        const log = new kwLog(this.sClass, "parseData");
        //console.info(log.called());
    }

    protected parseInits(inits: object): void {
        const log = new kwLog(this.sClass, "parseInits");
        //console.info(log.called());
    }

    protected parseView(view: object): void
    {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        const type: kwUitToolbarRowTitle = <kwUitToolbarRowTitle>(view);


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"), this.sState);
            return;
        }


        if (!kw.isString(this.sText))
        {
            //console.error(log.requires("sText"), this.sText);
            return;
        }

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


        const sTopic = kwBtn.createTopic(this.sState, sTYPE);
        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return false;
        }
        //console.info(log.is("sTopic", sTopic));
        this.sTopic = sTopic;

        return true;
    }

}
