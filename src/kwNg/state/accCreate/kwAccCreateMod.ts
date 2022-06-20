/**********************************************************************
 *
 * kwNg/state/accCreate/kwAccCreateMod.ts
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

import {kwAccCreate}            from './kwAccCreate';
import {kwAccCreateCtrlApi,
        kwAccCreateCtrlLoad,
        kwAccCreateCtrlMdl}     from './kwAccCreateCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwAccCreate,
        kwAccCreateCtrlApi,
        kwAccCreateCtrlLoad,
        kwAccCreateCtrlMdl,
    ],
    exports:
    [
        kwAccCreate,
        kwAccCreateCtrlApi,
        kwAccCreateCtrlLoad,
        kwAccCreateCtrlMdl,
    ]
})
//@formatter:on
export class kwAccCreateMod
{
    constructor()
    {
        //console.log('kwAccCreateMod::constructor() called.');
    }
}
