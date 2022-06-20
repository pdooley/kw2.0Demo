/**********************************************************************
 *
 * kwNg/state/kwStateModG.ts
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
import {NgModule}             from '@angular/core';
import {ModuleWithProviders}  from '@angular/core';


@NgModule({})
//@formatter:on
export class kwStateModG {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: kwStateModG,
            providers:
            [
            ]
        }
    }
}
