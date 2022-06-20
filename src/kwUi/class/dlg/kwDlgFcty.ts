/**********************************************************************
 *
 * kwView/class/dlg/kwDlgFcty.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {kw}             from "@kw/kw";
import {kwDlg}          from "./kwDlg";
//@formatter:on


const sTAG: string = "dlg";


export class kwDlgFcty
{
    static create(info: object): kwDlg
    {
        //console.log("kwDlgFcty::create() called");

        if (kw.isNull(info))
        {
            console.error("kwDlgFcty::create() info is invalid");
            return;
        }
        //console.info("kwDlgFcty::create() info is ", info);

        const data: object = info[sTAG];
        if (kw.isNull(data))
        {
            console.error("kwDlgFcty()::create() data is invalid.");
            return;
        }
        //console.info("kwDlgFcty()::create() data is ", data);

        const dlg: kwDlg = new kwDlg(data);
        if (!dlg.init())
        {
            console.error("kwDlgFcty::create() error initializing dlg.");
            return;
        }
        //console.info("kwDlgFcty::create() dlg is ", dlg);

        return dlg;
    }

}

