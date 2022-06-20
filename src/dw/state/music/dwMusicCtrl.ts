//@formatter:off
import {Component}              from '@angular/core';

import {kwFbCtrlAjax}           from "@kwFbCtrl/kwFbCtrlAjax";
import {kwNgCtrlSubApi}         from "@kwNgCtrl/kwNgCtrlSubApi";
import {kwNgUiCtrlSubInit}      from "@kwNgUiCtrl/kwNgUiCtrlSubInit";
import {kwNgUiCtrlSubMap}       from "@kwNgUiCtrl/kwNgUiCtrlSubMap";
import {kwNgCtrlPubSub}         from "@kwNgCtrl/kwNgCtrlPubSub";
import {kwNgCtrlSubMdl}         from "@kwNgCtrl/kwNgCtrlSubMdl";

import {dwMusicFctyMsg}       from "./dwMusicUtil";
import {dwMusicStApi,
        dwMusicStArr,
        dwMusicStInit,
        dwMusicStMap,
        dwMusicStMdl,
        dwMusicStMsg}         from "./dwMusicSt";
import {dwMusicsStArr}        from "../musics/dwMusicsSt";


const sSTATE: string        = "music";
//@formatter:off



@Component({selector: 'dw-music-ctrl-api', template: ``})
export class dwMusicCtrlApi extends kwNgCtrlSubApi
{
    constructor(api: dwMusicStApi)
    {super(api, sSTATE)}
}


@Component({selector: 'dw-music-ctrl-init', template: ``})
export class dwMusicCtrlInit extends kwNgUiCtrlSubInit
{
    constructor(init: dwMusicStInit)
    {super(init, sSTATE)}
}


@Component({selector: 'dw-music-ctrl-load', template: ``})
export class dwMusicCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: dwMusicStMsg, data: dwMusicStArr)
    {super(msg, data, sSTATE)}
}


@Component({selector: 'dw-music-ctrl-map', template: ``})
export class dwMusicCtrlMap extends kwNgUiCtrlSubMap
{
    constructor(data: dwMusicsStArr, map: dwMusicStMap)
    {super(data, map, sSTATE)}
}


@Component({selector: 'dw-music-ctrl-mdl', template: ``})
export class dwMusicCtrlMdl extends kwNgCtrlSubMdl
{
    constructor(mdl: dwMusicStMdl)
    {super(mdl, sSTATE)}
}


@Component({selector: 'dw-music-ctrl-pub-sub', template: ``})
export class dwMusicCtrlPubSub extends kwNgCtrlPubSub
{
    constructor(fcty: dwMusicFctyMsg, msg: dwMusicStMsg)
    {super(fcty, msg, sSTATE)}
}
