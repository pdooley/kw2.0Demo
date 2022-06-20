/**********************************************************************
 *
 * kwNg/state/auth0/kwAuth0Mod.ts
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

import {kwAuth0}                from './kwAuth0';
import {kwAuth0CtrlLoad}        from './kwAuth0Ctrl';

@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwAuth0,
        kwAuth0CtrlLoad,
    ],
    exports:
    [
        kwAuth0,
        kwAuth0CtrlLoad,
    ]
})
//@formatter:on
export class kwAuth0Mod
{
    constructor()
    {
        //console.log('kwAuth0Mod::constructor() called.');
    }
}
