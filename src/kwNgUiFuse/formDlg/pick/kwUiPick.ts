import {Component}    from '@angular/core';
import {OnDestroy}    from '@angular/core';
import {OnInit}       from '@angular/core';
import {MatDialog}    from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Subject}      from 'rxjs';
import {takeUntil}    from 'rxjs/operators';

import {FuseConfirmDialogComponent}
                      from '@fuse/components/confirm-dialog/confirm-dialog.component';

import {ContactsService}
                      from 'app/main/apps/contacts/contacts.service';

@Component({
    selector   : 'kw-ui-pick',
    templateUrl: './kwUiPick.html',
    styleUrls  : ['./kwUiPick.scss']
})
export class kwUiPick implements OnInit, OnDestroy
{
    confirmDialogRef:       MatDialogRef<FuseConfirmDialogComponent>;
    hasSelectedContacts:    boolean;
    isIndeterminate:        boolean;
    selectedContacts:       string[];

    // Private
    private                 _unsubscribeAll: Subject<any>;


    constructor(
        private     _contactsService:   ContactsService,
        public      _matDialog:         MatDialog       )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }


    ngOnInit(): void
    {
        this._contactsService.onSelectedContactsChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(selected =>
            {
                this.selectedContacts = selected;
                setTimeout(() =>
                {
                    this.hasSelectedContacts = selected.length > 0;
                    this.isIndeterminate
                        = ( selected.length !== this._contactsService.contacts.length &&
                            selected.length > 0                                         );
                },
                0);
            });
    }


    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    selectAll(): void
    {
        this._contactsService
            .selectContacts();
    }


    deselectAll(): void
    {
        this._contactsService
            .deselectContacts();
    }


    deleteSelectedContacts(): void
    {

        this.confirmDialogRef
            = this._matDialog.open(
                FuseConfirmDialogComponent,
                {
                    disableClose: false
                });


        const sMsg = 'Are you sure you want to delete all selected contacts?';


        this.confirmDialogRef
            .componentInstance
            .confirmMessage = sMsg


        this.confirmDialogRef
            .afterClosed()
            .subscribe(result =>
            {
                if (result)
                {
                    this._contactsService
                        .deleteSelectedContacts();
                }
                this.confirmDialogRef = null;
            });

    }
}
