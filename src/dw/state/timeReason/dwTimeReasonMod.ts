//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeReason}               from './dwTimeReason';
import {dwTimeReasonCtrlMap}        from './dwTimeReasonCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwTimeReason,
                dwTimeReasonCtrlMap
            ],
        exports:
            [
                dwTimeReason,
                dwTimeReasonCtrlMap
            ]
    })
//@formatter:on
export class dwTimeReasonMod
{
    constructor()
    {
        //console.log('dwTimeReasonMod::constructor() called.');
    }
}
