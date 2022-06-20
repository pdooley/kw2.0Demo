/**********************************************************************
 *
 * kwDlg/modules/shared.module.ts
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
import {NgModule }                     from '@angular/core';

import {CommonModule }                 from '@angular/common';
import {AngularFirestoreModule }       from '@angular/fire/firestore';

@NgModule(
{
    declarations:
    [

    ],
    imports:
    [
        CommonModule,
        AngularFirestoreModule,

    ],
    exports:
    [
        CommonModule,
        AngularFirestoreModule,

    ],
    entryComponents: [],
    providers: []
})
//@formatter:on
export class shareMod
{

}

