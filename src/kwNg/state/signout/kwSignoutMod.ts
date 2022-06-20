/**********************************************************************
 *
 * kwNg/state/signout/kwSignoutMod.ts
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

import {kwSignout}              from './kwSignout';
import {kwSignoutCtrlApi,
        kwSignoutCtrlLoad,
        kwSignoutCtrlMdl}       from './kwSignoutCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwSignout,
        kwSignoutCtrlApi,
        kwSignoutCtrlLoad,
        kwSignoutCtrlMdl,
    ],
    exports:
    [
        kwSignout,
        kwSignoutCtrlApi,
        kwSignoutCtrlLoad,
        kwSignoutCtrlMdl,
    ]
})
//@formatter:on
export class kwSignoutMod
{

    constructor()
    {
        //console.log('kwSignoutMod::constructor() called.');
    }
}
