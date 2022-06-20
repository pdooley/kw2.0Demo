/**********************************************************************
 *
 * kwNgUiFuse/dlg/kwUiDlgMod.ts
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
import {NgModule}           from '@angular/core';

import {kwUiCoreMod}        from '@kwNgUiFuseCore/kwUiCoreMod';

import {kwUiFormDlgMod}     from '@kwNgUiFuse/formDlg/kwUiFormDlgMod';

import {kwUiDlg}            from './kwUiDlg';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiFormDlgMod,
    ],
    declarations:
    [
        kwUiDlg,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiDlg,
    ]
})
//@formatter:on
export class kwUiDlgMod
{
    constructor()
    {
        //console.log('kwNgUiMod::constructor() called.');
    }
}
