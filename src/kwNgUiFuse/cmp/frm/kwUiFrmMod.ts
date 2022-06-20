/**********************************************************************
 *
 * kw/kwUiFrmMod.ts
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
import {kwUiFrmDivMod}       from './div/kwUiFrmDivMod';


import {kwUiFrm}             from './kwUiFrm';


@NgModule(
{
    imports:
    [
        kwUiFrmDivMod,
        kwUiCoreMod,

    ],
    declarations:
    [
        kwUiFrm,
    ],
    providers:
    [],
    exports:
    [
        kwUiFrm,

        kwUiFrmDivMod,
    ]
})
//@formatter:on
export class kwUiFrmMod {

}
