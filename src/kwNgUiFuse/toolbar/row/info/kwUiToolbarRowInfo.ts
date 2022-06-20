/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/info/kwUiToolbarRowInfo.ts
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
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUi/ctrl/kwNgUiCtrlComp";
import {kwUitToolbarRowInfo}    from "./kwUitToolbarRowInfo";


const sTAG: string              = "info";


@Component({
    selector     : 'kw-ui-toolbar-row-info',
    templateUrl  : './kwUiToolbarRowInfo.html',
    styleUrls    : ['./kwUiToolbarRowInfo.scss'],
    encapsulation: ViewEncapsulation.None
})
export class kwUiToolbarRowInfo extends kwNgUiCtrlComp
{

    public img:     object;

    public sSrc:    string  = "";
    public sText:   string  = "";


    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


    protected initCmp(): void
    {
        const log = new kwLog(this.sClass, "initCmp");
        //console.info(log.called());
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
        //console.info(log.isObj("view"), view);


        const type: kwUitToolbarRowInfo = <kwUitToolbarRowInfo>(view);


        const img: object = type.img;
        if (kw.isValid(img))
        {
            //console.info(log.isObj("img"), img);
            this.img = img;
        }
        else
        {
            console.error(log.requires("img"));
        }


        if (!kw.isString(this.sText))
        {
            console.error(log.requires("sText"));
        }
    }

}
