/**********************************************************************
 *
 * kwNgUiFuse/list/kwUiListMod.ts
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

import {kwUiCoreMod}            from '../core/kwUiCoreMod';

import {kwUiListBtnsMod}        from './btns/kwUiListBtnsMod';
import {kwUiListColMod}         from './col/kwUiListColMod';
import {kwUiListRowMod}         from './row/kwUiListRowMod';

import {kwUiList}               from './kwUiList';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiListBtnsMod,
        kwUiListColMod,
        kwUiListRowMod,
    ],
    declarations:
    [
        kwUiList,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiList,

        kwUiListBtnsMod,
        kwUiListColMod,
        kwUiListRowMod
    ]
})
//@formatter:on
export class kwUiListMod
{
    constructor()
    {
        //console.log("kwUiListMod::constructor() called.");
    }
}
