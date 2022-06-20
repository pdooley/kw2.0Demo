//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwJob}                  from './dwJob';
import {dwJobCtrlApi,
        dwJobCtrlInit,
        dwJobCtrlLoad,
        dwJobCtrlMap,
        dwJobCtrlMdl,
        dwJobCtrlPubSub}    from './dwJobCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwJob,
        dwJobCtrlApi,
        dwJobCtrlInit,
        dwJobCtrlLoad,
        dwJobCtrlMap,
        dwJobCtrlMdl,
        dwJobCtrlPubSub
    ],
    exports:
    [
        dwJob,
        dwJobCtrlApi,
        dwJobCtrlInit,
        dwJobCtrlLoad,
        dwJobCtrlMap,
        dwJobCtrlMdl,
        dwJobCtrlPubSub
    ]
})
//@formatter:on
export class dwJobMod
{
    constructor()
    {
        //console.log('dwJobMod::constructor() called.');
    }
}
