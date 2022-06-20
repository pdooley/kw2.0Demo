/**********************************************************************
 *
 * kwNgUiFuse/list/row/kwUiListRowMod.ts
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

import {kwUiCoreMod}    from '../../core/kwUiCoreMod';

import {kwUiListRow}         from './kwUiListRow';

@NgModule(
{
    imports:
    [
        kwUiCoreMod
    ],
    declarations:
    [
        kwUiListRow,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiListRow,
    ]
})
//@formatter:on
export class kwUiListRowMod
{
    constructor()
    {
        //console.log("kwUiListRowMod::constructor() called.");
    }

}
