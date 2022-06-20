/**********************************************************************
 *
 * kw/kwUiFldMod.ts
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
import {NgModule} from '@angular/core';

import {kwUiCoreMod} from '@kwNgUiFuseCore/kwUiCoreMod';

import {kwUiFld} from './kwUiFld';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiFld,
            ],
        providers:
            [],
        exports:
            [
                kwUiFld,
            ]
    })
//@formatter:on
export class kwUiFldMod {

}
