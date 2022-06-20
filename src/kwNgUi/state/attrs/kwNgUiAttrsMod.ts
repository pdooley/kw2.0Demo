/**********************************************************************
 *
 * kwNgUi/state/attrs/kwNgUiAttrsMod.ts
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
import {NgModule}                   from '@angular/core';

import {kwNgUiAttrs}                from './kwNgUiAttrs';
import {kwNgUiAttrsCtrlArr}         from './kwNgUiAttrsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiAttrs,
        kwNgUiAttrsCtrlArr,
    ],
    exports:
    [
        kwNgUiAttrs,
        kwNgUiAttrsCtrlArr,
    ]
})
//@formatter:on
export class kwNgUiAttrsMod
{
    constructor()
    {
        //console.log('kwNgUiAttrsMod::constructor() called.');
    }
}
