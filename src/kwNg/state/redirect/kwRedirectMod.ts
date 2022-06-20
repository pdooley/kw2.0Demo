/**********************************************************************
 *
 * kwNg/state/redirect/kwRedirectMod.ts
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

import {kwRedirect}             from './kwRedirect';
import {kwRedirectCtrlApi,
        kwRedirectCtrlLoad,
        kwRedirectCtrlMdl}      from './kwRedirectCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwRedirect,
        kwRedirectCtrlApi,
        kwRedirectCtrlLoad,
        kwRedirectCtrlMdl,
    ],
    exports:
    [
        kwRedirect,
        kwRedirectCtrlApi,
        kwRedirectCtrlLoad,
        kwRedirectCtrlMdl,
    ]
})
//@formatter:on
export class kwRedirectMod
{

    constructor()
    {
        //console.log('kwRedirectMod::constructor() called.');
    }
}
