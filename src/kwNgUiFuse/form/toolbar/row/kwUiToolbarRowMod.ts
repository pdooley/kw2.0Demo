/**********************************************************************
 *
 * kwNgUiFuse/toolbar/row/kwUiToolbarRowMod.ts
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

import {kwUiCoreMod}            from '../../../core/kwUiCoreMod';

import {kwUiSpanMod}            from '../../../cmp/span/kwUiSpanMod';

import {kwUiToolbarRow}         from './kwUiToolbarRow';
import {kwUiToolbarRowInfo}     from './info/kwUiToolbarRowInfo';
import {kwUiToolbarRowTitle}    from './title/kwUiToolbarRowTitle';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiSpanMod,
    ],
    declarations:
    [
        kwUiToolbarRow,
        kwUiToolbarRowInfo,
        kwUiToolbarRowTitle
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiToolbarRow,
    ]
})
//@formatter:on
export class kwUiToolbarRowMod
{
    constructor()
    {
        //console.log("kwUiToolbarRowMod::constructor() called.");
    }
}
