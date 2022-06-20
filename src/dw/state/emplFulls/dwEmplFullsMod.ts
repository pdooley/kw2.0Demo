//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwEmplFulls}                from './dwEmplFulls';
import {dwEmplFullsCtrlPubSub,
        dwEmplFullsCtrlView}        from './dwEmplFullsCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwEmplFulls,

            dwEmplFullsCtrlPubSub,
            dwEmplFullsCtrlView
        ],
    exports:
        [
            dwEmplFulls,

            dwEmplFullsCtrlPubSub,
            dwEmplFullsCtrlView
        ]
})
//@formatter:on
export class dwEmplFullsMod
{
    constructor()
    {
        //console.log('dwEmplFullsMod::constructor() called.');
    }
}
