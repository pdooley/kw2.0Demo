/**********************************************************************
 *
 * kwNgUiFuse/list/col/str/kwUiListColStrMod.ts
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

import {kwUiCoreMod}        from '../../../core/kwUiCoreMod';

import {kwUiListColStr}     from './kwUiListColStr';

@NgModule(
{
    imports:
    [
        kwUiCoreMod,
    ],
    declarations:
    [
        kwUiListColStr,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiListColStr,
    ]
})
//@formatter:on
export class kwUiListColStrMod
{
    constructor()
    {
        //console.log("kwUiListColStrMod::constructor() called.");
    }
}
