//@formatter:off
import {NgModule}               from '@angular/core';

import {kwNgUiViews}                from './kwNgUiViews';
import {kwNgUiViewsCtrlApi,
        kwNgUiViewsCtrlLoad,
        kwNgUiViewsCtrlMap,
        kwNgUiViewsCtrlMsg}         from './kwNgUiViewsCtrl';


@NgModule(
{
    imports:
    [
    ],
    declarations:
    [
        kwNgUiViews,
        kwNgUiViewsCtrlApi,
        kwNgUiViewsCtrlLoad,
        kwNgUiViewsCtrlMap,
        kwNgUiViewsCtrlMsg,
    ],
    exports:
    [
        kwNgUiViews,
        kwNgUiViewsCtrlApi,
        kwNgUiViewsCtrlLoad,
        kwNgUiViewsCtrlMap,
        kwNgUiViewsCtrlMsg,
    ]
})
//@formatter:on
export class kwNgUiViewsMod
{
    constructor()
    {
        //console.log('kwNgUiViewsMod::constructor() called.');
    }
}
