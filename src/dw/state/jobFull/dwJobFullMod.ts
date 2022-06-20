//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwJobFull}                  from './dwJobFull';
import {dwJobFullCtrlMap}           from './dwJobFullCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwJobFull,
        dwJobFullCtrlMap,
    ],
    exports:
    [
        dwJobFull,
        dwJobFullCtrlMap,
    ]
})
//@formatter:on
export class dwJobFullMod
{

    constructor()
    {
        //console.log('dwJobFullMod::constructor() called.');
    }
}
