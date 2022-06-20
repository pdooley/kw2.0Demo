//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwSchedFull}                 from './dwSchedFull';
import {dwSchedFullCtrlMap}        from './dwSchedFullCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwSchedFull,
        dwSchedFullCtrlMap,
    ],
    exports:
    [
        dwSchedFull,
        dwSchedFullCtrlMap,
    ]
})
//@formatter:on
export class dwSchedFullMod
{

    constructor()
    {
        //console.log('dwSchedFullMod::constructor() called.');
    }
}
