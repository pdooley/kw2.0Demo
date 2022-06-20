//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwSchedFulls}                from './dwSchedFulls';
import {dwSchedFullsCtrlPubSub,
        dwSchedFullsCtrlView}        from './dwSchedFullsCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwSchedFulls,

            dwSchedFullsCtrlPubSub,
            dwSchedFullsCtrlView
        ],
    exports:
        [
            dwSchedFulls,

            dwSchedFullsCtrlPubSub,
            dwSchedFullsCtrlView
        ]
})
//@formatter:on
export class dwSchedFullsMod
{
    constructor()
    {
        //console.log('dwSchedFullsMod::constructor() called.');
    }
}
