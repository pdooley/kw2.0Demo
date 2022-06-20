/**********************************************************************
 *
 * kwNgCView/list/col/kwUiListCol.ts
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


import {fuseAnimations}       from '@fuse/animations/index';
import {kwUitListCol}         from "./kwUitListCol";


const sTAG: string = "col";


@Component({
    selector     : 'kw-ui-list-col',
    templateUrl  : './kwUiListCol.html',
    styleUrls    : ['./kwUiListCol.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiListCol extends kwNgUiCtrlComp
{

    avatar: object;
    btns:   object;
    chkBox: object;
    email:  object;
    name:   object;
    phone:  object;
    str:    object;

    constructor()
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
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

        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwUitListCol = <kwUitListCol>view;

        const avatar = type.avatar;
        if (kw.isValid(avatar))
        {
            //console.info(log.isObj("avatar"), avatar);
            this.avatar = avatar;
            return;
        }

        const btns = type.btns;
        if (kw.isValid(btns))
        {
            //console.info(log.isObj("avatar"), btns);
            this.btns = btns;
            return;
        }

        const chkBox = type.chkBox;
        if (kw.isValid(chkBox))
        {
            //console.info(log.isObj("chkBox"), chkBox);
            this.chkBox = chkBox;
            return;
        }

        const email = type.email;
        if (kw.isValid(email))
        {
            //console.info(log.isObj("email"), email);
            this.email = email;
            return;
        }

        const name = type.name;
        if (kw.isValid(name))
        {
            //console.info(log.isObj("name"), name);
            this.name = name;
            return;
        }

        const phone = type.phone;
        if (kw.isValid(phone))
        {
            //console.info(log.isObj("phone"), phone);
            this.phone = phone;
            return;
        }

        const str = type.str;
        if (kw.isValid(str))
        {
            //console.info(log.isObj("str"), str);
            this.str = str;
            return;
        }


        console.error(log.invalid("type"));
        console.error(log.recognizes("avatar"));
        console.error(log.recognizes("btns"));
        console.error(log.recognizes("chkBox"));
        console.error(log.recognizes("email"));
        console.error(log.recognizes("name"));
        console.error(log.recognizes("phone"));
        console.error(log.recognizes("str"));

    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
