/**********************************************************************
 *
 * kw/kwUiPageNotFoundMod.ts
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

import {kwUiCoreMod} from '@kwNgUiFuse/core/kwUiCoreMod';

import {kwUiPageNotFound} from './kwUiPageNotFound';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiPageNotFound,
            ],
        providers:
            [],
        exports:
            [
                kwUiPageNotFound,
            ]
    })
//@formatter:on
export class kwUiPageNotFoundMod {

}
