/**********************************************************************
 *
 * kwNgUiFuse/cellDlg/kwUiCellDlg.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/
//@cellatter:off

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
import {kwCell}                 from "@kwUiAgGrid/class/cell/kwCell";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwRec}                  from "@kwUiClass/rec/kwRec";
import {kwState}                from "@kwClass/state/kwState";
import {kwStore}                from "@kwUiClass/store/kwStore";
import {kwtCellDef}             from "@kwUi/class/cellDef/kwtCellDef";
import {kwtDataIn}              from "@kwUiClass/dataIn/kwtDataIn";
import {kwUitCtrlComp}          from "@kwUiCtrl/kwUitCtrlComp";
import {kwUitCellDlg}           from "./kwUitCellDlg";


const sTAG: string              = "cellDlg";


@Component({
    selector     : 'kw-ui-cell-dlg',
    templateUrl  : './kwUiCellDlg.html',
    styleUrls    : ['./kwUiCellDlg.scss'],
    encapsulation: ViewEncapsulation.None
})

export class kwUiCellDlg    extends kwNgUiCtrlComp
                            implements OnInit, OnDestroy
{


    public actions:             object;
    public content:             object;
    public toolbar:             object;

    private cell:               kwCell;
    private row:                object;
    private state:              Map<string, object>;

    private bViewParsed:        boolean =  false;


    private sTopicBtnCancel:    string;
    private sTopicRowSave:      string;
    private sTopicStateAdd:     string;
    private sTopicStateEdt:     string;

    private topicsBtnEdit:      string[];


    private sAction:            string;
    private sParam:             string;



    constructor(
        public                              dlg:    MatDialogRef<kwUiCellDlg>,
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


        if (!this.retrieveCell())
        {
            console.error(log.errLoad("cell"));
            return;
        }


        if (!this.retrieveRow())
        {
            console.error(log.errLoad("row"));
            return;
        }


        if (!this.retrieveParam())
        {
            console.error(log.errLoad("param"));
            return;
        }


        if (!this.retrieveState())
        {
            console.error(log.errLoad("state"));
            return;
        }


        if (!this.storeInfo())
        {
            console.error(log.info("error storing info"));
            return;
        }


        super.ngOnInit();
    }


    ngOnDestroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "ngOnDestroy");
        //console.log(log.called());

        //this.unSubRows();
    }


    public initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        this.createTopicsBtn();
        this.createTopicsRec();
        //this.createTopicsState();

        //this.subRows();
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


        const type: kwUitCellDlg = <kwUitCellDlg>view;


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
        this.sTopicRowSave = sTopicSave;

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


    protected destroy(): void
    {
        const log = new kwLog(this.sClass, "destroy");
        //console.info(log.called());


        super.destroy();
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


        if (kw.isNull(this.row))
        {
            console.error(log.invalid("row"));
            return;
        }
        //console.info(log.isObj("row"), this.row);


        if (!kw.isString(this.sParam))
        {
            console.error(log.invalid("sParam"));
            return;
        }
        //console.info(log.is("sParam", this.sParam));


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


        const cell = this.data.data;
        if (!kw.isValid(cell))
        {
            console.error(log.invalid("cell"));
            return;
        }
        //console.info(log.isObj("cell"), cell);


        let param = {};
        param["data"] = {};
        param["data"][this.sParam] = {};
        param["data"][this.sParam]["hours"] = cell.hours;
        param["data"][this.sParam]["name"] = cell.name;
        param["data"][this.sParam]["reason"] = cell.reason;

        //console.info(log.isObj("param"), param);


        const data = _.merge(this.row, param);
        //console.info(log.isObj("data"), data);


        this.pubSub.pub(this.sTopicStateEdt, data);
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


    private retrieveCell(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveCell");
        //console.log(log.called());


        if (!kw.isValid(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        const cell: kwCell = <kwCell>this.info.rec;
        if (!kw.isValid(cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), cell);
        this.cell = cell;


        return true;
    }


    private retrieveInits(): any
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveInits");
        //console.log(log.called());


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return;
        }
        //console.info(log.isObj("info"), this.info);


        if (kw.isNull(this.cell))
        {
            console.error(log.invalid("cell"));
            return;
        }
        //console.info(log.isObj("cell"), this.cell);


        const initsGrid = this.info.inits;
        if (kw.isNull(initsGrid))
        {
            console.error(log.invalid("initsGrid"));
            return;
        }
        //console.info(log.isObj("initsGrid"), initsGrid);



        const rec = initsGrid["rec"];
        if (!kw.isValid(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }
        //console.info(log.isObj("rec"), rec);


        const sField = this.cell.sField;
        if (!kw.isString(sField))
        {
            console.error(log.invalid("sField"));
            return;
        }
        //console.info(log.isObj("sField"), sField);


        const store = new kwStore(rec, sField);
        if (!store.init())
        {
            console.error(log.errCreate("store"));
            return;
        }


        const inits = store.result;
        if (!kw.isValid(inits))
        {
            console.error(log.errLoad("inits"));
            return;
        }
        //console.info(log.isObj("inits"), inits);


        return inits;
    }


    private retrieveParam(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveParam");
        //console.log(log.called());


        if (!kw.isValid(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const def: object = this.cell.def;
        if (!kw.isValid(def))
        {
            console.error(log.invalid("def"));
            return false;
        }
        //console.info(log.isObj("def"), def);


        const sVal = def["field"];
        if (!kw.isString(sVal))
        {
            console.error(log.invalid(sVal));
            return false;
        }
        //console.info(log.isObj("sVal"), sVal);


        const param = sVal.split(".");
        if (!kw.isArray(param))
        {
            console.error(log.invalid("param"));
            return false;
        }


        if (param.length !== 2)
        {
            console.error(log.invalid("param"));
            return false;
        }
        //console.info(log.isObj("param"), param);


        this.sParam = param[1];
        //console.info(log.isObj("sParam"), this.sParam);


        return true;
    }


    private retrieveRow(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveRow");
        //console.log(log.called());


        if (!kw.isValid(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const row: object = this.cell.row;
        if (!kw.isValid(row))
        {
            console.error(log.invalid("row"));
            return false;
        }
        //console.info(log.isObj("row"), row);
        this.row = row;


        return true;
    }


    private retrieveState(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "retrieveState");
        //console.log(log.called());


        if (!kw.isValid(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        const state: any = this.cell.state;
        if (!kw.isValid(state))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), state);
        this.state = state;


        return true;
    }


    private subRows(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subRows");
        //console.log(log.called());

        if (!kw.isString(this.sTopicRowSave))
        {
            console.error(log.invalid("sTopicRowSave"));
            return;
        }
        //console.info(log.is("sTopicRowSave", this.sTopicRowSave));

        this.pubSub.sub(this.sTopicRowSave, this.save, this);
    }


    private storeInfo(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "storeInfo");
        //console.log(log.called());


        if (kw.isNull(this.cell))
        {
            console.error(log.invalid("cell"));
            return false;
        }
        //console.info(log.isObj("cell"), this.cell);


        if (kw.isNull(this.info))
        {
            console.error(log.invalid("info"));
            return false;
        }
        //console.info(log.isObj("info"), this.info);


        if (kw.isNull(this.state))
        {
            console.error(log.invalid("state"));
            return false;
        }
        //console.info(log.isObj("state"), this.state);


        const ctrl: kwUitCtrlComp = new kwUitCtrlComp();


        const inits = this.retrieveInits();
        if (!kw.isValid(inits))
        {
            console.error(log.errLoad("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), inits);
        ctrl.inits = inits;


        if (kw.isNull(this.cell.val))
        {
            console.error(log.invalid("val"));
            return false;
        }
        //console.info(log.isObj("val"), this.cell.val);


        let val: kwtCellDef = new kwtCellDef();


        if (kw.isNumber(this.cell.val))
        {
            val.hours = this.cell.val;
            val.name = "N/A";
            val.reason = "";
        }
        else
        {
            val = this.cell.val;
        }

        val.state = this.state;

        //console.info(log.isObj("val"), val);
        ctrl.data = val;


        ctrl.view = this.info.view;
        if (kw.isNull(ctrl.view))
        {
            console.error(log.invalid("view"));
            return false;
        }
        //console.info(log.isObj("view"), ctrl.view);


        this.storeAll(ctrl);


        return true;
    }


    private unSubRows(): void
    {
        const log: kwLog = new kwLog(this.sClass, "unSubRows");
        //console.log(log.called());


        if (!kw.isString(this.sTopicRowSave))
        {
            console.error(log.invalid("sTopicRowSave"));
            return;
        }
        //console.info(log.is("sTopicRowSave", this.sTopicRowSave));


        this.pubSub.unSub(this.sTopicRowSave, this.save, this);
    }

}
