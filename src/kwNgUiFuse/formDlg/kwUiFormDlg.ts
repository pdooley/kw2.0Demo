/**********************************************************************
 *
 * kwNgUiFuse/formDlg/kwUiFormDlg.ts
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
import {Inject}                 from '@angular/core';
import {OnDestroy}              from '@angular/core';
import {OnInit}                 from '@angular/core';
import {ViewEncapsulation}      from '@angular/core';

import {MAT_DIALOG_DATA}        from '@angular/material';
import {MatDialogRef}           from '@angular/material';

import * as _                   from 'lodash';

import {kw}                     from "@kw/kw";
import {kwBtn}                  from "@kwUiClass/btn/kwBtn";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwRec}                  from "@kwUiClass/rec/kwRec";
import {kwState}                from "@kwClass/state/kwState";
import {kwtDataIn}              from "@kwUiClass/dataIn/kwtDataIn";
import {kwUitCtrlComp}          from "@kwUiCtrl/kwUitCtrlComp";
import {kwUitFormDlg}           from "./kwUitFormDlg";


const sTAG: string              = "formDlg";


@Component({
    selector     : 'kw-ui-form-dlg',
    templateUrl  : './kwUiFormDlg.html',
    styleUrls    : ['./kwUiFormDlg.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiFormDlg    extends kwNgUiCtrlComp
                            implements OnInit, OnDestroy
{


    public actions:             object;
    public content:             object;
    public toolbar:             object;


    private bViewParsed:        boolean =  false;


    private sTopicBtnCancel:    string;
    private sTopicRecSave:      string;
    private sTopicStateAdd:     string;
    private sTopicStateEdt:     string;

    private topicsBtnEdit:      string[];


    private sAction:            string;



    constructor(
        public                              dlg:    MatDialogRef<kwUiFormDlg>,
        @Inject(MAT_DIALOG_DATA) public     info:   kwtDataIn,
        private                             pubSub: kwNgPubSub  )
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

    ngOnInit(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnInit");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), this.info);


        const sAction = this.info.action;
        if (!kw.isString(sAction))
        {
            console.error(log.invalid("sAction"));
            return;
        }
        //console.info(log.is("sAction", sAction));
        this.sAction = sAction;


        this.storeInfo();

        super.ngOnInit();
    }

    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        this.unSubRecs();
    }

    public initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.createTopicsBtn();
        this.createTopicsRec();
        this.createTopicsState();

        this.subRecs();
    }


    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");

        //console.info(log.isObj("$event"), $event);


        if (!kw.isValid($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        //console.info(log.isObj("$event"), $event);


        this.storeData($event);
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

        if (this.bViewParsed)
        {
            return;
        }


        if (kw.isNull(view))
        {
            console.error(log.invalid("view"));
            return;
        }


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }


        if (!kw.isString(this.sStateSt))
        {
            console.error(log.requires("sStateSt"));
            return;
        }


        const type: kwUitFormDlg = <kwUitFormDlg>view;


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

        this.bViewParsed = true;
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


    private addItem(): void
    {
        const log = new kwLog(this.sClass, "addItem");
        //console.info(log.called());


        if (kw.isNull(this.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), this.data);


        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicStateAdd))
        {
            console.error(log.invalid("sTopicStateAdd"));
            return;
        }
        //console.info(log.is("sTopicStateAdd", this.sTopicStateAdd));


        this.pubSub.pub(this.sTopicStateAdd, this.data);
    }


    private createTopicsBtn(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsBtn");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicCancel = kwBtn.createTopicCancel(this.sState);
        if (!kw.isString(sTopicCancel))
        {
            console.error(log.invalid("sTopicCancel"));
            return false;
        }
        //console.info(log.is("sTopicCancel", sTopicCancel));
        this.sTopicBtnCancel = sTopicCancel;

        return true;
    }


    private createTopicsRec(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsRec");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicSave = kwRec.createTopicSave(this.sState);
        if (!kw.isString(sTopicSave))
        {
            console.error(log.invalid("sTopicSave"));
            return false;
        }
        //console.info(log.is("sTopicSave", sTopicSave));
        this.sTopicRecSave = sTopicSave;

        return true;
    }


    private createTopicsState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsState");
        //console.log(log.called());


        if (!kw.isString(this.sStateSt))
        {
            console.error(log.invalid("sState"));
            return false;
        }
        //console.info(log.is("sStateSt", this.sStateSt));


        const sTopicAdd = kwState.createTopicAdd(this.sStateSt);
        if (!kw.isString(sTopicAdd))
        {
            console.error(log.invalid("sTopicAdd"));
            return false;
        }
        //console.info(log.is("sTopicAdd", sTopicAdd));
        this.sTopicStateAdd = sTopicAdd;


        const sTopicEdt = kwState.createTopicEdt(this.sStateSt);
        if (!kw.isString(sTopicEdt))
        {
            console.error(log.invalid("sTopicEdt"));
            return false;
        }
        //console.info(log.is("sTopicEdt", sTopicEdt));
        this.sTopicStateEdt = sTopicEdt;

        return true;
    }


    private editItem(): void
    {
        const log = new kwLog(this.sClass, "editItem");
        //console.info(log.called());


        if (kw.isNull(this.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), this.data);


        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicStateEdt))
        {
            console.error(log.invalid("sTopicStateEdt"));
            return;
        }
        //console.info(log.is("sTopicStateEdt", this.sTopicStateEdt));

        this.pubSub.pub(this.sTopicStateEdt, this.data);
    }


    private save(sTopic: string): void
    {
        const log = new kwLog(this.sClass, "save");
        //console.info(log.called());

        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.isObj("sTopic"), sTopic);


        if (kw.isNull(this.pubSub))
        {
            console.error(log.invalid("pubSub"));
            return;
        }
        //console.info(log.isObj("pubSub"), this.pubSub);


        if (!kw.isString(this.sTopicBtnCancel))
        {
            console.error(log.invalid("sTopicBtnCancel"));
            return;
        }
        //console.info(log.is("sTopicBtnCancel", this.sTopicBtnCancel));


        if (!kw.isString(this.sAction))
        {
            console.error(log.invalid("sAction"));
            return;
        }


        if (this.sAction === "add")
        {
            this.addItem();
        }
        else
        {
            this.editItem();
        }


        this.pubSub.pub(this.sTopicBtnCancel, {});
    }


    private subRecs(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subRecs");
        //console.log(log.called());

        if (!kw.isString(this.sTopicRecSave))
        {
            console.error(log.invalid("sTopicRecSave"));
            return;
        }
        //console.info(log.is("sTopicRecSave", this.sTopicRecSave));

        this.pubSub.sub(this.sTopicRecSave, this.save, this);
    }


    private storeInfo(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "storeInfo");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), this.info);


        const ctrl: kwUitCtrlComp = new kwUitCtrlComp();


        ctrl.data = this.info.rec;
        if (kw.isNull(ctrl.data))
        {
            console.error(log.invalid("data"));
            //return;
        }
        //console.info(log.isObj("data"), ctrl.data);


        ctrl.inits = this.info.inits;
        if (kw.isNull(ctrl.inits))
        {
            console.error(log.invalid("inits"));
            return;
        }
        //console.info(log.isObj("inits"), ctrl.inits);


        ctrl.view = this.info.view;
        if (kw.isNull(ctrl.view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), ctrl.view);


        this.storeAll(ctrl);

    }


    private unSubRecs(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubRecs");
        //console.log(log.called());


        if (!kw.isString(this.sTopicRecSave))
        {
            console.error(log.invalid("sTopicRecSave"));
            return;
        }
        //console.info(log.is("sTopicRecSave", this.sTopicRecSave));


        this.pubSub.unSub(this.sTopicRecSave, this.save, this);
    }

}
