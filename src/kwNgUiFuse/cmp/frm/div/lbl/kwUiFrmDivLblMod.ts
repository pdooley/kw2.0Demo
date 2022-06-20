/**********************************************************************
 *
 * kwNgUiFuse/frm/div/lbl/kwUiFormDivLblMod.ts
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


import {kwUiFrmDivLbl}       from './kwUiFrmDivLbl';


@NgModule(
{
    imports:
    [
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiFrmDivLbl,
    ],
    providers:
    [

    ],
    exports:
    [
        kwUiFrmDivLbl,
    ]
})
//@formatter:on
export class kwUiFrmDivLblMod {

}
