/**********************************************************************
 *
 * kwNgUi/crud/pick/kwUiCrudPick.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2018 iTKunst corporation
 *
 **********************************************************************/
//@formatter:off
import {Component}              from '@angular/core';
import {TemplateRef}            from '@angular/core';
import {ViewChild}              from '@angular/core';
import {MatDialog}              from '@angular/material';
import {MatDialogRef}           from '@angular/material';


import {FuseConfirmDialogComponent}
                                from '@fuse/components/confirm-dialog/confirm-dialog.component';

import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";


const sTAG: string              = "pick";


@Component({
    selector   : 'kw-ui-crud-pick',
    templateUrl: './kwUiCrudPick.html',
    styleUrls  : ['./kwUiCrudPick.scss']
})
export class kwUiCrudPick extends kwNgUiCtrlComp
{
    @ViewChild('dialogContent', {static: false})
    dialogContent: TemplateRef<any>;

    hasSelectedContacts: boolean;
    isIndeterminate: boolean;
    selectedContacts: string[];

    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    constructor(
        public _matDialog: MatDialog  )
    {
        super(sTAG);

        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    selectAll(): void
    {
        const log: kwLog = new kwLog(this.sClass, "selectAll");
        //console.log(log.called());
        //this._contactsService.selectContacts();
    }


    deselectAll(): void
    {
        const log: kwLog = new kwLog(this.sClass, "deselectAll");
        //console.log(log.called());
        //this._contactsService.deselectContacts();
    }


    deleteSelectedContacts(): void
    {
        const log: kwLog = new kwLog(this.sClass, "deleteSelectedContacts");
        //console.log(log.called());

        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });

        const sMsg: string = 'Are you sure you want to delete all selected contacts?';

        this.confirmDialogRef
            .componentInstance
            .confirmMessage     = sMsg;

    }


    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }


    protected initCmp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "initCmp");
        //console.log(log.called());

        return true;
    }


    protected navigate(): void
    {
        const log: kwLog = new kwLog(this.sClass, "navigate");
        //console.log(log.called());
    }


    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
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
    }

}
