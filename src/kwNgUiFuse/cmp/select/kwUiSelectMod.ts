/**********************************************************************
 *
 * kw/kwNgDlgMod.ts
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

import {kwUiSelect} from './kwUiSelect';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiSelect,
            ],
        providers:
            [],
        exports:
            [
                kwUiSelect,
            ]
    })
//@formatter:on
export class kwUiSelectMod {

}
