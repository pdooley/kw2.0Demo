/**********************************************************************
 *
 * kwNgUiFuse/list/kwUiList.ts
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
import {FormGroup}            from '@angular/forms';
import {TemplateRef}          from '@angular/core';
import {ViewChild}            from '@angular/core';
import {ViewEncapsulation}    from '@angular/core';

import {MatDialog}           from '@angular/material';
import {MatDialogRef}         from '@angular/material';
import {MatTableDataSource}   from '@angular/material';

import * as _                   from "lodash";

import {fuseAnimations}       from '@fuse/animations/index';
import {FuseConfirmDialogComponent}
                                from '@fuse/components/confirm-dialog/confirm-dialog.component';

import {kw}                   from "@kw/kw";
import {kwUiForm}             from "../form/kwUiForm";
import {kwLog}                from "@kw/kwLog";
import {kwNgUiCtrlComp}     from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwUitList}            from "./kwUitList";


const sTAG: string = "list";


@Component({
    selector     : 'kw-ui-list',
    templateUrl  : './kwUiList.html',
    styleUrls    : ['./kwUiList.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class kwUiList extends kwNgUiCtrlComp
{
    @ViewChild('dialogContent', {static: false})
    dialogContent: TemplateRef<any>;

    public cols: object[];
    public row: object;


    dialogRef: any;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

    columnsToDisplay = ['name', 'desc'];

    constructor(
        public _matDialog: MatDialog
    )
    {
        super(sTAG);

        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }


    edit(contact): void
    {
        const log: kwLog = new kwLog(this.sClass, "contact");
        //console.log(log.called());

        this.dialogRef = this._matDialog.open(kwUiForm, {
            panelClass: 'contact-form-dialog',
            data      : {
                contact: contact,
                action : 'edit'
            }
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Save
                     */
                    case 'save':

                        //this._contactsService.updateContact(formData.getRawValue());

                        break;
                    /**
                     * Delete
                     */
                    case 'delete':

                        this.delete(contact);

                        break;
                }
            });
    }

    delete(contact): void
    {
        const log: kwLog = new kwLog(this.sClass, "contact");
        //console.log(log.called());

        this.confirmDialogRef =
            this._matDialog.open(
                FuseConfirmDialogComponent,
                { disableClose: false } );

        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

        this.confirmDialogRef.afterClosed().subscribe(result => {
            if ( result )
            {
                //this._contactsService.deleteContact(contact);
            }
            this.confirmDialogRef = null;
        });

    }

    public onChanged($event): void
    {
        const log: kwLog = new kwLog(this.sClass, "onChanged");
        //console.log(log.called());
    }

    onPickChange(contactId): void
    {
        const log: kwLog = new kwLog(this.sClass, "onPickChange");
        //console.log(log.called());

        //this._contactsService.toggleSelectedContact(contactId);
    }

    toggleStar(contactId): void
    {
        const log: kwLog = new kwLog(this.sClass, "toggleStar");
        //console.log(log.called());

/*        if ( this.user.starred.includes(contactId) )
        {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else
        {
            this.user.starred.push(contactId);
        }

        //this._contactsService.updateUserData(this.user);
 */   }

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

        const type: kwUitList = <kwUitList>view;


        const cols = type.cols;
        if (kw.isArray(cols))
        {
            //console.info(log.isObj("cols"), cols);
            this.cols = cols;
        }

        const row = type.row;
        if (kw.isValid(row))
        {
            //console.info(log.isObj("row"), row);
            this.row = row;
        }

        if (_.isNull(this.cols)
         && _.isNull(this.row))
        {
            console.error(log.recognizes("cols, row"));
        }
    }

    protected publish(): void
    {
        const log: kwLog = new kwLog(this.sClass, "publish");
        //console.log(log.called());
    }


}
