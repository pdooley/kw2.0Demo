/**********************************************************************
 *
 * kwNgUiFuse/frm/div/kwUiFrmDivMod.ts
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

import {kwUiCoreMod}    from '@kwNgUiFuseCore/kwUiCoreMod';
import {kwUiFrmDivLblMod}    from './lbl/kwUiFrmDivLblMod';

import {kwUiFrmDiv}          from './kwUiFrmDiv';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,
        kwUiFrmDivLblMod,

    ],
    declarations:
    [
        kwUiFrmDiv,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFrmDivLblMod,
        kwUiFrmDiv,
    ]
})
//@formatter:on
export class kwUiFrmDivMod
{

}
