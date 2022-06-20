//@formatter:off
import {NgModule}               from '@angular/core';

import {kwMdls}                 from './kwMdls';
import {kwMdlsCtrlApi,
        kwMdlsCtrlLoad,
        kwMdlsCtrlMsg,
        kwMdlsCtrlObj,}         from './kwMdlsCtrl';


@NgModule(
    {
        imports:
            [
            ],
        declarations:
            [
                kwMdls,
                kwMdlsCtrlApi,
                kwMdlsCtrlLoad,
                kwMdlsCtrlMsg,
                kwMdlsCtrlObj,
            ],
        exports:
            [
                kwMdls,
                kwMdlsCtrlApi,
                kwMdlsCtrlLoad,
                kwMdlsCtrlMsg,
                kwMdlsCtrlObj,
            ]
    })
//@formatter:on
export class kwMdlsMod
{
    constructor()
    {
        //console.log('kwMdlsMod::constructor() called.');
    }
}
