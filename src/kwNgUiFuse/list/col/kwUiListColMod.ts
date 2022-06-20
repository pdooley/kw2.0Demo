/**********************************************************************
 *
 * kwNgUiFuse/list/col/kwUiListColMod.ts
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

import {kwUiCoreMod}        from '../../core/kwUiCoreMod';

import {kwUiListBtnsMod}    from '../btns/kwUiListBtnsMod';
import {kwUiListColStrMod}  from './str/kwUiListColStrMod';

import {kwUiListCol}        from './kwUiListCol';
import {kwUiListColAvatar}  from './avatar/kwUiListColAvatar';
import {kwUiListColChkBox}  from './chkBox/kwUiListColChkBox';
import {kwUiListColEmail}   from './email/kwUiListColEmail';
import {kwUiListColName}    from './name/kwUiListColName';
import {kwUiListColPhone}   from './phone/kwUiListColPhone';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,

        kwUiListBtnsMod,
        kwUiListColStrMod,
    ],
    declarations:
    [
        kwUiListCol,

        kwUiListColAvatar,
        kwUiListColChkBox,
        kwUiListColEmail,
        kwUiListColName,
        kwUiListColPhone,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiListCol,
    ]
})
//@formatter:on
export class kwUiListColMod
{
    constructor()
    {
        //console.log("kwUiListColMod::constructor() called.");
    }
}
