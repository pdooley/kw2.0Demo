/**********************************************************************
 *
 * kwNgUiFuse/toolbar/kwUiToolbarMod.ts
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

import {kwUiCoreMod}            from '../../core/kwUiCoreMod';

import {kwUiSpanMod}            from '../../cmp/span/kwUiSpanMod';
import {kwUiToolbarRowMod}      from './row/kwUiToolbarRowMod';

import {kwUiToolbar}            from './kwUiToolbar';

@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiSpanMod,
        kwUiToolbarRowMod,
    ],
    declarations:
    [

        kwUiToolbar,

    ],
    providers:
    [

    ],
    exports:
    [
        kwUiToolbar,
    ]
})
//@formatter:on
export class kwUiToolbarMod
{
    constructor()
    {
        //console.log("kwUiToolbarMod::constructor() called.");
    }
}
