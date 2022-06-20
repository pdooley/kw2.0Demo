//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwReason}                 from './dwReason';
import {dwReasonCtrlApi,
        dwReasonCtrlInit,
        dwReasonCtrlLoad,
        dwReasonCtrlMap,
        dwReasonCtrlMdl,
        dwReasonCtrlPubSub}        from './dwReasonCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwReason,
        dwReasonCtrlApi,
        dwReasonCtrlInit,
        dwReasonCtrlLoad,
        dwReasonCtrlMap,
        dwReasonCtrlMdl,
        dwReasonCtrlPubSub
    ],
    exports:
    [
        dwReason,
        dwReasonCtrlApi,
        dwReasonCtrlInit,
        dwReasonCtrlLoad,
        dwReasonCtrlMap,
        dwReasonCtrlMdl,
        dwReasonCtrlPubSub
    ]
})
//@formatter:on
export class dwReasonMod
{

    constructor()
    {
        //console.log('dwReasonMod::constructor() called.');
    }
}
