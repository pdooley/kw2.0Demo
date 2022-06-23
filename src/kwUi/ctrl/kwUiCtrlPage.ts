/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlPage.ts
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

import {kw}                     from "@kw/kw";
import {kwAttr}                 from "@kwUiClass/attr/kwAttr";
import {kwDisp}                 from "@kwUiClass/disp/kwDisp";
import {kwElmt}                 from "@kwUiClass/elmt/kwElmt";
import {kwLog}                  from "@kw/kwLog";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwUiStInit}             from "@kwUiStat/kwUiStInit";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwtAttr}                from "@kwUiClass/attr/kwtAttr";
import {kwtElmt}                from "@kwUiClass/elmt/kwtElmt";
import {kwUiStView}             from "@kwUiStat/kwUiStView";


const sTAG: string              = "";



export abstract class kwUiCtrlPage
{
    protected sClass: string = this.constructor.name;


    // values injected or retrieved
    private initsIn: any;
    private viewIn: any;

    private kwData: any;

    // values used for local component
    private attrs: kwtAttr[];
    protected elmt: kwElmt;
    private disp: kwDisp;


    private bCreateElmt: boolean = false;
    private bInit: boolean = false;
    private bLoadAttrs: boolean = false;
    protected bLoadData: boolean = false;
    private bLoadDisp: boolean = false;
    private bLoadInits: boolean = false;
    private bLoadView: boolean = false;
    protected bSubData: boolean = false;


    private sTag: string = sTAG;




    protected constructor(
        private srvcAttrs: kwStArr,
        private srvcDisp: kwStObj,
        private srvcInit: kwUiStInit,
        private srvcView: kwUiStView    )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        console.log(log.called());
    }


    protected abstract navigate(sLink: string);
    protected abstract onChanged($event): void;
    protected abstract publish($event: object);
    protected abstract subscribeData(): boolean;
    protected abstract unSubscribeData(): void;


    // hooks for components
    protected abstract parseInits(inits: any): void;
    protected abstract parseView(view: any): void;
    protected abstract parseData(data: any): void;


    // accessors
    public get data(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.data; } }

    public get fltr(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.fltr; } }

    public get inits(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.inits; } }

    public get view(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.view; } }

    public get sComp(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sComp; } }

    public get sId(): string
    {  if (kw.isValid(this.elmt)) { return this.elmt.sId; } }

    public get sLink(): string
    { if (kw.isValid(this.elmt)) {  return this.elmt.sLink; } }

    public get sStyl(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sText; } }



//@formatter:on

    protected init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        console.log(log.called());

        if (this.bInit)
        {
             return true;
        }

        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return false;
        }

        if (kw.isNull(this.srvcDisp))
        {
            console.error(log.invalid("srvcDisp"));
            return false;
        }

        if (kw.isNull(this.srvcInit))
        {
            console.error(log.invalid("srvcInit"));
            return false;
        }

        if (kw.isNull(this.srvcView))
        {
            console.error(log.invalid("srvcView"));
            return false;
        }

        if (!this.subscribeData())
        {
            console.error(log.errSub("data"));
            return false;
        }


        if (!this.loadAttrs())
        {
            console.info(log.errLoad("attrs"));
            return;
        }


        if (!this.loadDisp())
        {
            console.error(log.errLoad("disp"));
            return false;
        }

        if (!this.loadInits())
        {
            console.error(log.errLoad("inits"));
            return false;
        }

        if (!this.loadView())
        {
            console.error(log.errLoad("view"));
            return false;
        }

        if (!this.createElmt())
        {
            console.error(log.errCreate("elmt"));
            return false;
        }

        this.bInit = true;

        return true;
    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        console.log(log.called());

        this.unSubscribeData();
    }


    private createElmt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createElmt");
        console.log(log.called());

        if (this.bCreateElmt)
        {
            return true;
        }


        if (kw.isNull(this.attrs))
        {
            console.info(log.empty("attrs"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        if (kw.isNull(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        if (kw.isNull(this.initsIn))
        {
            console.info(log.empty("initsIn"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        if (!kw.isString(this.sTag))
        {
            console.error(log.invalid("sTag"));
            return false;
        }
        console.info(log.is("sTag", this.sTag));


        if (kw.isNull(this.viewIn))
        {
            console.info(log.empty("viewIn"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        const type: kwtElmt = {
            attrs: this.attrs,
            disp: this.disp,
            inits: this.initsIn,
            sTag: this.sTag,
            view: this.viewIn
        };


        const elmt = new kwElmt(type);
        if (!elmt.init())
        {
            console.error(log.errCreate("elmt"));
            return false;
        }
        console.info(log.isObj("elmt"), elmt);
        this.elmt = elmt;

        this.bCreateElmt = true;

        this.parseInits(this.inits);
        this.parseView(this.view);

        return true;
    }


    protected handleEvent($event)
    {
        const log: kwLog = new kwLog(this.sClass, "handleEvent");
        console.log(log.called());

        if (!kw.isValid($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);

        //const sDataId: string = this.getDataId();

        const sLink: string = this.sLink;
        if (kw.isString(sLink))
        {
            console.info(log.is("sLink", sLink));

            this.navigate(sLink);
            return;
        }

        const event = {};

        console.info(log.isObj("srvcAttrs"), this.attrs);
        this.publish(event);
    }




    private loadAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttrs");
        console.log(log.called());

        if (this.bLoadAttrs)
        {
            return true;
        }


        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        const attrs = <kwAttr[]> this.srvcAttrs.get();
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);
        this.attrs = attrs;


        this.bLoadAttrs = true;

        return true;
    }


    private loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        console.log(log.called());

        if (this.bLoadDisp)
        {
            return true;
        }

        this.bLoadDisp = true;

        const disp = <kwDisp> this.srvcDisp.get();
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);


        this.disp = disp;

        return true;
    }


    private loadInits(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadInits");
        console.log(log.called());

        if (this.bLoadInits)
        {
            return true;
        }

        this.bLoadInits = true;

        const srvcInit = this.srvcInit;
        if (!kw.isValid(srvcInit))
        {
            console.error(log.invalid("srvcInit"));
            return false;
        }
        console.info(log.isObj("srvcAttrs"), this.attrs);

        const initsIn = srvcInit.get();
        if (!kw.isValid(initsIn))
        {
            console.error(log.invalid("initsIn"));
            return false;
        }
        console.info(log.isObj("initsIn"), initsIn);
        this.initsIn = initsIn;


        this.bLoadInits = true;

        return true;
    }


    private loadView(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadView");
        console.log(log.called());

        if (this.bLoadView)
        {
            return true;
        }

        if (!kw.isValid(this.srvcView))
        {
            console.error(log.invalid("srvcView"));
            return false;
        }
        console.info(log.isObj("srvcView"), this.srvcView);

        const viewIn = this.srvcView.get();
        if (!kw.isValid(viewIn))
        {
            console.error(log.invalid("viewIn"));
            return false;
        }
        console.info(log.isObj("viewIn"), viewIn);
        this.viewIn = viewIn;


        this.bLoadView = true;

        return true;
    }


    protected updateElmt(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "updateElmt");
        console.log(log.called());

        console.info(log.isObj("data"), data, "]");

        if (!this.bCreateElmt)
        {
            console.info(log.empty("elmt"));
            this.kwData = data;
            return;
        }

        if (!kw.isValid(this.elmt))
        {
            console.error(log.invalid("elmt"));
            return;
        }
        console.info(log.isObj("elmt"), this.elmt);

        this.elmt.loadData(data);

        this.parseData(data);
    }

}
