/**********************************************************************
 *
 * kwBs/state/kwBsStateModG.ts
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
import {NgModule}                from '@angular/core';
import {ModuleWithProviders}     from '@angular/core';

import {kwTraceStTrace}          from '../trace/kwTraceSt';
import {kwBsUserStArr}           from './user/kwBsUserSt';

@NgModule({})
//@formatter:on

export class kwBsStateModG
{

    static forRoot(): ModuleWithProviders
    {
        return  {
            ngModule: kwBsStateModG,
            providers:
            [
                kwTraceStTrace,
                kwBsUserStArr,
            ]
        }
    }
}
