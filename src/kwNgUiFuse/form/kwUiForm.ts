/**********************************************************************
 *
 * kwNgUiFuse/form/kwUiForm.ts
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

import {Component}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {kw}                   from "@kw/kw";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitForm}            from "./kwUitForm";


const sTAG: string              = "form";


@Component({
    selector     : 'kw-ui-form',
    templateUrl  : './kwUiForm.html',
    styleUrls    : ['./kwUiForm.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiForm extends kwNgUiCtrlComp
{
    public actions: object;
    public content: object;
    public toolbar: object;

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    public initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());
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

        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwUitForm = <kwUitForm>view;


        const actions = type.actions;
        if (kw.isValid(actions))
        {
            //console.info(log.isObj("actions"), actions);
            this.actions = actions;
        }
        else
        {
            console.error(log.requires("actions"));
            return;
        }

        const content = type.content;
        if (kw.isValid(content))
        {
            //console.info(log.isObj("content"), content);
            this.content = content;
        }
        else
        {
            console.error(log.requires("content"));
            return;
        }

        const toolbar = type.toolbar;
        if (kw.isValid(toolbar))
        {
            //console.info(log.isObj("toolbar"), toolbar);
            this.toolbar = toolbar;
        }
        else
        {
            console.error(log.requires("toolbar"));
            return;
        }

    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }

}
