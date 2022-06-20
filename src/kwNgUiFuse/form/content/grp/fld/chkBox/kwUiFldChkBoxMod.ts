/**********************************************************************
 *
 * kwNgUiFuse/form/fld/chkBox/kwUiFldChkBoxMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

import {NgModule}                 from '@angular/core';

import {FuseSharedModule}         from '@fuse/shared.module';

import {kwUiCoreMod}              from '@kwNgUiFuse/core/kwUiCoreMod'

import {kwUiFldChkBox}            from './kwUiFldChkBox';


@NgModule(
{
    declarations:
    [
        kwUiFldChkBox,
    ],
    imports:
    [
        kwUiCoreMod,
        FuseSharedModule,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFldChkBox
    ]
})
export class kwUiFldChkBoxMod
{
    constructor()
    {
        //console.log('kwUiCrudMod::conchkBoxuctor() called.');
    }
}
