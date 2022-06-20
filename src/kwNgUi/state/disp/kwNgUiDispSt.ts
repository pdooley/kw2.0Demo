/**********************************************************************
 *
 * kwNgUi/state/disp/kwNgUiDispSt.ts
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
import {Injectable}         from "@angular/core";

import {kwBsStObj}          from "@kwBsStat/kwBsStObj";
import {kwDisp}             from "@kwUi/class/disp/kwDisp";
//@formatter:on


@Injectable({providedIn: 'root'})
export class kwNgUiDispStObj extends kwBsStObj
{
    constructor(){super()}

    public dispAll(): boolean
    {
        //console.log(this.sClass,"::dispAll() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispAll() called.");
            return null;
        }
        return disp.bDispAll;
    }

    public dispData(): boolean
    {
        //console.log(this.sClass,"::dispData() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispData() called.");
            return null;
        }
        return disp.bDispData;
    }

    public dispFltr(): boolean
    {
        //console.log(this.sClass,"::dispFltr() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispFltr() called.");
            return null;
        }
        return disp.bDispFltr;
    }


    public dispId(): boolean
    {
        //console.log(this.sClass,"::dispId() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispId() called.");
            return null;
        }
        return disp.bDispId;
    }

    public dispInits(): boolean
    {
        //console.log(this.sClass,"::dispInits() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispInits() called.");
            return null;
        }
        return disp.bDispInits;
    }

    public dispMaster(): boolean
    {
        //console.log(this.sClass,"::dispMaster() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispMaster() called.");
            return null;
        }
        return disp.bDispMaster;
    }


    public dispTag(): boolean
    {
        //console.log(this.sClass,"::dispTag() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispTag() called.");
            return null;
        }
        return disp.bDispTag;
    }


    public dispView(): boolean
    {
        //console.log(this.sClass,"::dispView() called.");
        const disp: kwDisp = <kwDisp>this.get();
        if (!kwDisp.is(disp))
        {
            console.error(this.sClass,"::dispView() called.");
            return null;
        }
        return disp.bDispView;
    }

}
