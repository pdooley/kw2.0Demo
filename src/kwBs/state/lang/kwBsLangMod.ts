/**********************************************************************
 *
 * kwBs/state/lang/kwBsLangMod.ts
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

import {kwBsLang}               from './kwBsLang';
import {kwBsLangCtrlApi,
        kwBsLangCtrlMdl}        from './kwBsLangCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwBsLang,
        kwBsLangCtrlApi,
        kwBsLangCtrlMdl,
    ],
    exports:
    [
        kwBsLang,
        kwBsLangCtrlApi,
        kwBsLangCtrlMdl,
    ]
})
//@formatter:on
export class kwBsLangMod
{
    constructor()
    {
        //console.log('kwBsLangMod::constructor() called.');
    }
}
