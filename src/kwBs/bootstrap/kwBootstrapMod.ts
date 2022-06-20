/**********************************************************************
 *
 * kwBs/state/bs/kwBootstrapMod.ts
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

import {kwBootstrap}            from './kwBootstrap';
import {kwBootstrapCtrlBs}      from './kwBootstrapCtrl';

@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBootstrap,
        kwBootstrapCtrlBs,
    ],
    exports:
    [
        kwBootstrap,
        kwBootstrapCtrlBs,
    ]
})
//@formatter:on
export class kwBootstrapMod
{
    constructor()
    {
        //console.log('kwBootstrapMod::constructor() called.');
    }
}
