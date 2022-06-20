/**********************************************************************
 *
 * kwNgUiFuse/list/btns/btn/kwUiListBtnsBtnMod.ts
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

import {kwUiCoreMod}        from '../../../core/kwUiCoreMod';

import {kwUiListBtnsBtn}         from './kwUiListBtnsBtn';
import {kwUiListBtnsBtnDel}      from './del/kwUiListBtnsBtnDel';
import {kwUiListBtnsBtnMore}     from './more/kwUiListBtnsBtnMore';
import {kwUiListBtnsBtnToggle}   from './toggle/kwUiListBtnsBtnToggle';


@NgModule(
{
    imports:
    [
        kwUiCoreMod
    ],
    declarations:
    [
        kwUiListBtnsBtn,

        kwUiListBtnsBtnDel,
        kwUiListBtnsBtnMore,
        kwUiListBtnsBtnToggle,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiListBtnsBtn,
    ]
})
//@formatter:on
export class kwUiListBtnsBtnMod
{
    constructor()
    {
        //console.log("kwUiListBtnsBtnMod::constructor() called.");
    }

}
