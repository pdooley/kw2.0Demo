/**********************************************************************
 *
 * kwNgUiFuse/formDlg/content/grp/fld/slctCombo/kwUiFldSlctCombo.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@fldatter:off

import {Component}              from '@angular/core';
import {OnInit}                 from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';


import * as _                   from "lodash";

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}         from "@kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwState}                from "@kw/class/state/kwState";
import {kwUitFldSlctCombo}      from "./kwUitFldSlctCombo";


const sTAG: string              = "slctCombo";


@Component({
    selector     : 'kw-ui-form-fld-slct-combo',
    templateUrl  : './kwUiFldSlctCombo.html',
    styleUrls    : ['./kwUiFldSlctCombo.scss'],
    encapsulation: ViewEncapsulation.None
})


export class kwUiFldSlctCombo   extends kwNgUiCtrlComp
                                implements OnInit
{

    private params: string[];

    public sRecIdD: string;

    public bIsReadOnly: boolean;


    public sTopicStateAll: string;
    public sTopicStateRdy: string;

    public opts: object[];


    constructor(
        private pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }

        if (!this.createTopics())
        {
            console.error(log.errCreate("topics"));
            return;
        }



        this.sub();

        this.pub();
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.unSub();

        super.destroy();
    }


    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());


        if (!kw.isValid($event))
        {
            console.error(log.invalid($event));
            return;
        }
        //console.info(log.is("$event", $event));


        const sVal = $event.value;
        if (!kw.isString(sVal))
        {
            console.error(log.invalid("sVal"));
            return;
        }
        //console.info(log.is("sVal", sVal));


        if (!kw.isString(this.sRecIdD))
        {
            console.error(log.invalid("sRecIdD"));
            return;
        }
        //console.info(log.is("sRecId", this.sRecIdD));


        const data = {};
        data[this.sRecIdD] = sVal;
        //console.info(log.isObj("data"), data);

        this.changed.emit(data);
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

        if (kw.isNull(data))
        {
            //console.info(log.empty("data"));
            return;
        }
        //console.info(log.isObj("data"), data);
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


        const type: kwUitFldSlctCombo = <kwUitFldSlctCombo>view;


        if (!kw.isString(this.sText))
        {
            console.error(log.requires("sText"));
            return;
        }
        //console.info(log.isObj("sText"), this.sText);


        if (!kw.isValid(this.sStateSt))
        {
            console.error(log.requires("sStateSt"));
            return;
        }
        //console.info(log.isObj("sStateSt"), this.sStateSt);


        const params: string[] = type.params;
        if (kw.isArray(params))
        {
            //console.info(log.is("params", params));
            this.params = params;
        }
        else
        {
            console.error(log.requires("params - array of strings"));
            return
        }

        const sRecIdD: string = type.sRecIdD;
        if (kw.isString(sRecIdD))
        {
            //console.info(log.is("sRecIdD", sRecIdD));
            this.sRecIdD = sRecIdD;
        }
        else
        {
            console.error(log.requires("sRecIdD"))
            return
        }

    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


    protected createTopics(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopics");
        //console.log(log.called());


        if (!kw.isString(this.sStateSt))
        {
            console.error(log.invalid("sStateSt"));
            return false;
        }
        //console.info(log.is("sStateSt", this.sStateSt));


        const sTopicAll = kwState.createTopicAll(this.sStateSt);
        if (!kw.isString(sTopicAll))
        {
            console.error(log.errCreate("sTopicAll"));
            return false;
        }
        //console.info(log.is("sTopicAll", sTopicAll));
        this.sTopicStateAll = sTopicAll;


        const sTopicRdy = kwState.createTopicRdy(this.sStateSt);
        if (!kw.isString(sTopicRdy))
        {
            console.error(log.errCreate("sTopicRdy"));
            return false;
        }
        //console.info(log.is("sTopicRdy", sTopicRdy));
        this.sTopicStateRdy = sTopicRdy;

        return true;
    }


    protected load(sTopic: string, data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "load");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj(sTopic), data);


        this.opts = data;

    }


    protected pub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "pub");
        //console.log(log.called());


        if (!kw.isString(this.sTopicStateAll))
        {
            console.error(log.invalid("sTopicStateAll"));
            return false;
        }
        //console.info(log.is("sTopicStateAll", this.sTopicStateAll));


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.is("pubSub", this.pubSub));


        this.pubSub.pub(this.sTopicStateAll);

        return true;
    }


    protected sub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "sub");
        //console.log(log.called());


        if (!kw.isString(this.sTopicStateRdy))
        {
            console.error(log.invalid("sTopicStateRdy"));
            return false;
        }
        //console.info(log.is("sTopicStateRdy", this.sTopicStateRdy));


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        this.pubSub.sub(this.sTopicStateRdy, this.load, this);

        return true;
    }


    protected unSub(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "unSub");
        //console.log(log.called());


        if (!kw.isString(this.sTopicStateRdy))
        {
            console.error(log.invalid("sTopicStateRdy"));
            return false;
        }
        //console.info(log.is("sTopicStateRdy", this.sTopicStateRdy));


        if (!kw.isValid(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return false;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        this.pubSub.unSub(this.sTopicStateRdy, this.load, this);

        return true;
    }


}
