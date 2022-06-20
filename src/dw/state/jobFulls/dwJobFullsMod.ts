//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwJobFulls}                from './dwJobFulls';
import {dwJobFullsCtrlPubSub,
        dwJobFullsCtrlView}        from './dwJobFullsCtrl';


@NgModule(
{
    imports:
        [
        ],
    declarations:
        [
            dwJobFulls,

            dwJobFullsCtrlPubSub,
            dwJobFullsCtrlView
        ],
    exports:
        [
            dwJobFulls,

            dwJobFullsCtrlPubSub,
            dwJobFullsCtrlView
        ]
})
//@formatter:on
export class dwJobFullsMod
{
    constructor()
    {
        //console.log('dwJobFullsMod::constructor() called.');
    }
}
