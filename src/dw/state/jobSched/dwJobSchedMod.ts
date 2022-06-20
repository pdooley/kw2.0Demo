//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwJobSched}                  from './dwJobSched';
import {dwJobSchedCtrlMap}           from './dwJobSchedCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwJobSched,
        dwJobSchedCtrlMap,
    ],
    exports:
    [
        dwJobSched,
        dwJobSchedCtrlMap,
    ]
})
//@formatter:on
export class dwJobSchedMod
{

    constructor()
    {
        //console.log('dwJobSchedMod::constructor() called.');
    }
}
