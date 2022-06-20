/**********************************************************************
 *
 * kwNg/state/accs/kwAccsMod.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {NgModule}               from '@angular/core';

import {kwAccs}                 from './kwAccs';
import {kwAccsCtrlApi,
        kwAccsCtrlLoad}         from './kwAccsCtrl';

@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwAccs,
        kwAccsCtrlApi,
        kwAccsCtrlLoad,
    ],
    exports:
    [
        kwAccs,
        kwAccsCtrlApi,
        kwAccsCtrlLoad,
    ]
})
//@formatter:on
export class kwAccsMod
{

    constructor()
    {
        //console.log('kwAccsMod::constructor() called.');
    }
}
