/**********************************************************************
 *
 * kwNgUiFuse/kwNgUiFuseMod.ts
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
import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';


import {kwUiAuthMod}            from './auth/kwUiAuthMod';
import {kwUiCmpMod}             from './cmp/kwUiCmpMod';
import {kwUiCoreMod}            from './core/kwUiCoreMod';
import {kwUiCrudMod}            from './crud/kwUiCrudMod';
import {kwUiDlgMod}             from './dlg/kwUiDlgMod';
import {kwUiPageMod}            from './page/kwUiPageMod';
import {kwUiPageNotFoundMod}    from './pageNotFound/kwUiPageNotFoundMod';

import {kwNgUiFuse}             from './kwNgUiFuse';

@NgModule(
{
    imports:
    [
        CommonModule,

        kwUiCoreMod,
        kwUiAuthMod,
        kwUiCmpMod,
        kwUiCrudMod,
        kwUiDlgMod,
        kwUiPageMod,
        kwUiPageNotFoundMod,
    ],
    declarations:
    [
        kwNgUiFuse,
    ],
    exports:
    [
        kwNgUiFuse,

        kwUiCoreMod,
        kwUiAuthMod,
        kwUiCmpMod,
        kwUiCrudMod,
        kwUiDlgMod,
        kwUiPageMod,
        kwUiPageNotFoundMod,

        CommonModule,
    ]
})
//@formatter:on
export class kwNgUiFuseMod
{
    constructor()
    {
        //console.log('kwNgUiMod::constructor() called.');
    }
}
