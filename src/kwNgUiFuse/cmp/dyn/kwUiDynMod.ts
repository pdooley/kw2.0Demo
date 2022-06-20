/**********************************************************************
 *
 * kwNgUiFuse/cmp/dyn/kwUiDynMod.ts
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

import {parent} from './parent';
import {child} from './child';

@NgModule(
{
    imports:
    [

    ],
    declarations:
    [
        child,
        parent
    ],
    providers:
    [

    ],
    exports:
    [
        child,
        parent,
    ]
})
//@formatter:on
export class kwUiDynMod
{

}
