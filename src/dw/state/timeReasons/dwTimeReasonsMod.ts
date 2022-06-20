//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwTimeReasons}              from './dwTimeReasons';
import {dwTimeReasonsCtrlPubSub,
        dwTimeReasonsCtrlView}      from './dwTimeReasonsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        dwTimeReasons,
        dwTimeReasonsCtrlPubSub,
        dwTimeReasonsCtrlView,
    ],
    exports:
    [
        dwTimeReasons,
        dwTimeReasonsCtrlPubSub,
        dwTimeReasonsCtrlView,
    ]
})
//@formatter:on
export class dwTimeReasonsMod
{
    constructor()
    {
        //console.log('dwTimeReasonsMod::constructor() called.');
    }
}
