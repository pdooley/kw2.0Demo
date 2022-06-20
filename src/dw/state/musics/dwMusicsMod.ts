//@formatter:off
import {NgModule}                   from '@angular/core';

import {dwMusics}                 from './dwMusics';
import {dwMusicsCtrlApi,
        dwMusicsCtrlInit,
        dwMusicsCtrlLoad,
        dwMusicsCtrlPubSub,
        dwMusicsCtrlView}         from './dwMusicsCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                dwMusics,

                dwMusicsCtrlApi,
                dwMusicsCtrlInit,
                dwMusicsCtrlLoad,
                dwMusicsCtrlPubSub,
                dwMusicsCtrlView,
            ],
        exports:
            [
                dwMusics,

                dwMusicsCtrlApi,
                dwMusicsCtrlInit,
                dwMusicsCtrlLoad,
                dwMusicsCtrlPubSub,
                dwMusicsCtrlView,
            ]
    })
//@formatter:on
export class dwMusicsMod
{

    constructor()
    {
        //console.log('dwMusicsMod::constructor() called.');
    }
}
