/**********************************************************************
 *
 * kw/kwUiTabsTitleMod.ts
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

import {kwUiTabsTitle} from './kwUiTabsTitle';


@NgModule(
    {
        imports:
            [
                kwUiCoreMod
            ],
        declarations:
            [
                kwUiTabsTitle,
            ],
        providers:
            [],
        exports:
            [
                kwUiTabsTitle,
            ]
    })
//@formatter:on
export class kwUiTabsTitleMod {

}
