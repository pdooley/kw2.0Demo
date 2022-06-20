/**********************************************************************
 *
 * kwNgUiFuse/dlg/kwUiDlg.ts
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
import {MatDialog}              from '@angular/material';
import {ViewEncapsulation}      from '@angular/core';

import {fuseAnimations}         from "@fuse/animations/index";


import {kw}                     from "@kw/kw";

import {kwBtn}                  from "@kwUiClass/btn/kwBtn";
import {kwDlg}                  from "@kwUiClass/dlg/kwDlg";
import {kwLog}                  from "@kw/kwLog";
import {kwNgPubSub}             from "@kwNg/pubSub/kwNgPubSub";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtDataIn}              from "@kwUiClass/dataIn/kwtDataIn";
import {kwUiCellDlg}            from "@kwNgUiFuse/cellDlg/kwUiCellDlg";
import {kwUiFormDlg}            from "@kwNgUiFuse/formDlg/kwUiFormDlg";
import {kwUitDlg}               from "./kwUitDlg";


const sTAG: string              = "dlg";




//@formatter:on

@Component({
    selector:       'kw-ui-dlg',
    templateUrl:    'kwUiDlg.html',
    styleUrls:      ['kwUiDlg.scss'],
    encapsulation:  ViewEncapsulation.None,
    animations:     fuseAnimations
})
export class kwUiDlg extends kwNgUiCtrlComp
{

    public      formDlg:            object;
    public      toolbar:            object;


    private     dlgRef:             any;

    private     sTopicBtnOk:        string;
    private     sTopicBtnCancel:    string;

    private     sTopicDlgAdd:       string;
    private     sTopicDlgCell:      string;
    private     sTopicDlgEdt:       string;


    constructor(
        private pubSub: kwNgPubSub,
        public  dlg:    MatDialog   )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }

//@formatter:on


    protected initCmp(): void
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());


        this.createTopicsBtn();
        this.createTopicsDlg();
        this.subBtns();
        this.subDlgs();
    }


    protected parseData(data: any): void
    {
        //console.log(this.sClass, "::parseData() called.");
    }


    protected parseInits(inits: object): void
    {
        //console.log(this.sClass, "::parseInits() called.");
    }


    protected parseView(view: object): void
    {
        const log: kwLog = new kwLog(this.sClass, "parseView");
        //console.log(log.called());


        if (kw.isNull(view))
        {
            console.error(this.sClass, "::parseView() view is invalid");
        }


        const type: kwUitDlg = <kwUitDlg>view;


        const formDlg: object = type.formDlg;
        if (kw.isValid(formDlg))
        {
            //console.info(this.sClass, "::parseView() formDlg is [", formDlg, "]");
            this.formDlg = formDlg;
        }
        else
        {
            console.error(log.requires("formDlg"));
            return;
        }


        if (!kw.isString(this.sState))
        {
            console.error(log.requires("sState"));
            return;
        }

    }


    protected add(sTopic: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "add");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), this.view);


        if (!kw.isValid(this.inits))
        {
            console.error(log.invalid("inits"));
            return;
        }
        //console.info(log.isObj("inits"), this.inits);

        const rec = this.inits["rec"];
        if (!kw.isValid(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }
        //console.info(log.isObj("rec"), rec);


        const dataIn: kwtDataIn = {
            action : 'add',
            inits: this.inits,
            rec: rec,
            view: this.view,
        };
        //console.info(log.isObj("dataIn"), dataIn);


        this.dlgRef = this.dlg.open(kwUiFormDlg, {
            panelClass: 'form-dialog',
            data      : dataIn
        });
    }


    private close(sTopic: string): void
    {
        const log: kwLog = new kwLog(this.sClass, "close");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }
        //console.info(log.is("sTopic", sTopic));


        if (!kw.isValid(this.dlg))
        {
            console.error(log.invalid("dlgRef"));
            return;
        }
        //console.info(log.isObj("dlgRef"), this.dlgRef);


        this.dlg.closeAll();

    }


    private createTopicsBtn(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsBtn");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicOk = kwBtn.createTopicOk(this.sState);
        if (!kw.isString(sTopicOk))
        {
            console.error(log.invalid("sTopicOk"));
            return;
        }
        //console.info(log.is("sTopicOk", sTopicOk));
        this.sTopicBtnOk = sTopicOk;


        const sTopicCancel = kwBtn.createTopicCancel(this.sState);
        if (!kw.isString(sTopicCancel))
        {
            console.error(log.invalid("sTopicCancel"));
            return;
        }
        //console.info(log.is("sTopicCancel", sTopicCancel));
        this.sTopicBtnCancel = sTopicCancel;
    }


    private createTopicsDlg(): void
    {
        const log: kwLog = new kwLog(this.sClass, "createTopicsDlg");
        //console.log(log.called());


        if (!kw.isString(this.sState))
        {
            console.error(log.invalid("sState"));
            return;
        }
        //console.info(log.is("sState", this.sState));


        const sTopicAdd = kwDlg.createTopicAdd(this.sState);
        if (!kw.isString(sTopicAdd))
        {
            console.error(log.invalid("sTopicAdd"));
            return;
        }
        //console.info(log.is("sTopicAdd", sTopicAdd));
        this.sTopicDlgAdd = sTopicAdd;


        const sTopicCell = kwDlg.createTopicCell(this.sState);
        if (!kw.isString(sTopicCell))
        {
            console.error(log.invalid("sTopicCell"));
            return;
        }
        //console.info(log.is("sTopicCell", sTopicCell));
        this.sTopicDlgCell = sTopicCell;


        const sTopicEdt = kwDlg.createTopicEdt(this.sState);
        if (!kw.isString(sTopicEdt))
        {
            console.error(log.invalid("sTopicEdt"));
            return;
        }
        //console.info(log.is("sTopicEdt", sTopicEdt));
        this.sTopicDlgEdt = sTopicEdt;

    }


    private edit(sTopic: string, rec: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "edit");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!kw.isValid(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), this.view);


        if (!kw.isValid(this.inits))
        {
            console.error(log.invalid("inits"));
            return;
        }
        //console.info(log.isObj("inits"), this.inits);


        const dataIn: kwtDataIn = {
            action : 'edit',
            inits: this.inits,
            rec: rec,
            view: this.view,
        };
        //console.info(log.isObj("dataIn"), dataIn);


        this.dlgRef = this.dlg.open(kwUiFormDlg, {
            panelClass: 'form-dialog',
            data      : dataIn
        });
    }




    private cell(sTopic: string, rec: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "cell");
        //console.log(log.called());


        if (!kw.isString(sTopic))
        {
            console.error(log.invalid("sTopic"));
            return;
        }


        if (!kw.isValid(rec))
        {
            console.error(log.invalid("rec"));
            return;
        }


        if (!kw.isValid(this.view))
        {
            console.error(log.invalid("view"));
            return;
        }
        //console.info(log.isObj("view"), this.view);


        if (!kw.isValid(this.inits))
        {
            console.error(log.invalid("inits"));
            return;
        }
        //console.info(log.isObj("inits"), this.inits);


        const dataIn: kwtDataIn = {
            action : 'edit',
            inits: this.inits,
            rec: rec,
            view: this.view,
        };
        //console.info(log.isObj("dataIn"), dataIn);


        this.dlgRef = this.dlg.open(kwUiCellDlg, {
            panelClass: 'form-dialog',
            data      : dataIn
        });
    }


    protected subBtns(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subBtns");
        //console.log(log.called());


        if (!kw.isString(this.sTopicBtnOk))
        {
            console.error(log.invalid("sTopicBtnOk"));
            return
        }
        //console.info(log.is("sTopicBtnOk", this.sTopicBtnOk));


        if (!kw.isString(this.sTopicBtnCancel))
        {
            console.error(log.invalid("sTopicBtnCancel"));
            return
        }
        //console.info(log.is("sTopicBtnCancel", this.sTopicBtnCancel));


        this.pubSub.sub(this.sTopicBtnOk,   this.close, this);
        this.pubSub.sub(this.sTopicBtnCancel,   this.close, this);
    }


    protected subDlgs(): void
    {
        const log: kwLog = new kwLog(this.sClass, "subDlgs");
        //console.log(log.called());


        if (!kw.isString(this.sTopicDlgAdd))
        {
            console.error(log.invalid("sTopicDlgAdd"));
            return
        }
        //console.info(log.is("sTopicDlgAdd", this.sTopicDlgAdd));


        if (!kw.isString(this.sTopicDlgCell))
        {
            console.error(log.invalid("sTopicDlgCell"));
            return
        }
        //console.info(log.is("sTopicDlgCell", this.sTopicDlgCell));


        if (!kw.isString(this.sTopicDlgEdt))
        {
            console.error(log.invalid("sTopicDlgEdt"));
            return
        }
        //console.info(log.is("sTopicDlgCancel", this.sTopicDlgEdt));


        this.pubSub.sub(this.sTopicDlgAdd,  this.add,   this);
        this.pubSub.sub(this.sTopicDlgCell, this.cell,   this);
        this.pubSub.sub(this.sTopicDlgEdt,  this.edit,   this);
    }


}

