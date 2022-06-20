/**********************************************************************
 *
 * kwNgUiFuse/actions/kwUiActionsMod.ts
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

import {kwUiBtnMod}                 from './btn/kwUiBtnMod';

import {kwUiActions}              from './kwUiActions';


@NgModule(
{
    declarations:
    [
        kwUiActions,
    ],
    imports:
    [
        FuseSharedModule,

        kwUiBtnMod,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiActions
    ]
})
export class kwUiActionsMod
{
    constructor()
    {
        //console.log('kwUiActionsMod::constructor() called.');
    }
}
