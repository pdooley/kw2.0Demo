/**********************************************************************
 *
 * kwUi/ctrl/kwUiCtrlComp.ts
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
import {kwPubSub}               from "@kw/pubSub/kwPubSub";
import {kwStArr}                from "@kwStat/kwStArr";
import {kwStObj}                from "@kwStat/kwStObj";
import {kwUitCtrlComp}          from "@kwUiCtrl/kwUitCtrlComp";
import {kwtElmt}                from "@kwUiClass/elmt/kwtElmt";


export abstract class kwUiCtrlComp
{
    protected sClass: string = this.constructor.name;


    //values that are available for data binding.
    private _fltr: any;


    // values from parent
    private kwData: any;
    private kwFltr: any;
    private kwInits: any;
    private kwView: any;


    // values used for local component

    private attrs: kwAttr[];
    private elmt: kwElmt;
    private disp: kwDisp;


    private bCreateElmt: boolean = false;
    private bInit: boolean = false;
    private bLoadAttrs: boolean = false;
    private bLoadDisp: boolean = false;
    private bLoadFltr: boolean = false;
    private bParse: boolean = false;


    protected constructor(
        private srvcAttrs:  kwStArr,
        private srvcDisp:   kwStObj,
        private srvcPubSub: kwPubSub,
        protected sTag:     string      )
    {
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
    }


    protected abstract getDataIn(): any;
    protected abstract initCmp(): void;
    protected abstract navigate(sLink: string);
    protected abstract publish($event: object);


    // hooks for components
    protected abstract parseData(data: any): void;
    protected abstract parseInits(inits: any): void;
    protected abstract parseView(view: any): void;


    // accessors
    public get data(): any
    { if (kw.isValid(this.elmt)) { return this.elmt.data; } }

    public get fltr(): any
    { return this._fltr; }

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

    public get sState(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sState; } }

    public get sStateSt(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sStateSt; } }

    public get sStyl(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sStyl; } }

    public get sText(): string
    { if (kw.isValid(this.elmt)) { return this.elmt.sText; } }

    //public get fltr(): string
    // { if (kw.isValid(this.elmt))  { return this.elmt.fltr; } }

    public set data(val: any)
    { if (kw.isValid(this.elmt)) { this.elmt.data = val; } }

//@formatter:on


    protected init()
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());


        if (this.bInit)
        {
            this.updateElmt();
            return;
        }


        if (!kw.isString(this.sTag)
            && this.sTag.length === 0  )
        {
            console.error(log.invalid("sTag"));
            return;
        }


        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return;
        }


        if (kw.isNull(this.srvcDisp))
        {
            console.error(log.invalid("srvcDisp"));
            return;
        }


        if (!this.loadAttrs())
        {
            //console.info(log.errLoad("attrs"));
            return;
        }


        if (!this.loadDisp())
        {
            //console.info(log.errLoad("disp"));
            return;
        }


        if (!this.createElmt())
        {
            //console.info(log.errCreate("elmt"));
            return;
        }


        if (!this.loadFltr())
        {
            console.error(log.errLoad("fltr"));
            return;
        }


        if (!this.parse())
        {
            console.error(log.errLoad("parse"));
            return;
        }

        this.initCmp();


        this.bInit = true;


        this.updateElmt();

    }


    protected destroy(): void
    {
        const log: kwLog = new kwLog(this.sClass, "destroy");
        //console.log(log.called());
    }


    private createElmt(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "createElmt");
        //console.log(log.called());


        if (this.bCreateElmt)
        {
            return true;
        }


        if (!kw.isArray(this.attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), this.attrs);


        if (!kw.isValid(this.disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), this.disp);


        if (kw.isNull(this.kwInits))
        {
            //console.info(log.empty("kwInits"));
            return false;
        }
        //console.info(log.isObj("kwInits"), this.kwInits);


        if (kw.isNull(this.kwView))
        {
            //console.info(log.empty("kwView"));
            return false;
        }
        //console.info(log.isObj("kwView"), this.kwView);


        const type: kwtElmt = {
            attrs: this.attrs,
            disp: this.disp,
            inits: this.kwInits,
            sTag: this.sTag,
            view: this.kwView
        };


        const elmt = new kwElmt(type);
        if (!elmt.init())
        {
            console.error(log.errCreate("elmt"));
            return false;
        }
        //console.info(log.isObj("elmt"), elmt);
        this.elmt = elmt;


        this.bCreateElmt = true;

        return true;
    }


    protected handleEvent($event)
    {
        const log: kwLog = new kwLog(this.sClass, "handleEvent");
        //console.log(log.called());

        if (!kw.isValid($event))
        {
            console.error(log.invalid("$event"));
            return;
        }
        //console.info(log.is("$event", $event));

        //const sDataId: string = this.getDataId();

        const sLink: string = this.sLink;
        if (kw.isString(sLink))
        {
            //console.info(log.is("sLink", sLink));

            this.navigate(sLink);
            return;
        }

        const event = {};

        //console.info(log.is("event", event));
        this.publish(event);
    }


    private loadAttrs(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadAttrs");
        //console.log(log.called());

        if (this.bLoadAttrs)
        {
            return true;
        }

        this.bLoadAttrs = true;


        if (kw.isNull(this.srvcAttrs))
        {
            console.error(log.invalid("srvcAttrs"));
            return false;
        }
        //console.info(log.isObj("srvcAttrs"), this.srvcAttrs);


        const attrs = <kwAttr[]> this.srvcAttrs.get();
        if (!kw.isArray(attrs))
        {
            console.error(log.invalid("attrs"));
            return false;
        }
        //console.info(log.isObj("attrs"), attrs);
        this.attrs = attrs;

        return true;
    }


    private loadDisp(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadDisp");
        //console.log(log.called());

        if (this.bLoadDisp)
        {
            return true;
        }

        const disp = <kwDisp> this.srvcDisp.get();
        if (kw.isNull(disp))
        {
            console.error(log.invalid("disp"));
            return false;
        }
        //console.info(log.isObj("disp"), disp);
        this.disp = disp;


        this.bLoadDisp = true;

        return true;
    }


    private loadFltr(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "loadFltr");
        //console.log(log.called());

        if (this.bLoadFltr)
        {
            return true;
        }

        this.bLoadFltr = true;

        this._fltr = this.kwFltr;

        return true;
    }


    private parse(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "parse");
        //console.log(log.called());


        if (this.bParse)
        {
            return true;
        }


        if (kw.isNull(this.inits))
        {
            //console.info(log.empty("inits"));
            return false;
        }
        //console.info(log.isObj("inits"), this.inits);


        if (kw.isNull(this.view))
        {
            //console.info(log.empty("view"));
            return false;
        }
        //console.info(log.isObj("view"), this.view);


        this.parseInits(this.inits);
        this.parseView(this.view);



        this.bParse = true;

        return true;
    }


    protected storeAll(data: kwUitCtrlComp)
    {
        const log: kwLog = new kwLog(this.sClass, "storeAll");
        //console.log(log.called());

        //console.info(log.isObj("data"), data);


        if (!kw.isValid(data))
        {
            console.error(log.invalid("data"));
            return;
        }


        if (!kw.isValid(data.data))
        {
            console.error(log.invalid("data"));
            return;
        }
        //console.info(log.isObj("data"), data.data);
        this.setKwData(data.data);


        this.kwInits = data.inits;
        if (!kw.isValid(this.kwInits))
        {
            console.error(log.invalid("kwInits"));
            return;
        }
        //console.info(log.isObj("kwInits"), this.kwInits);


        this.kwView = data.view;
        if (!kw.isValid(this.kwView))
        {
            console.error(log.invalid("kwView"));
            return;
        }
        //console.info(log.isObj("kwView"), this.kwView);

    }


    protected storeData(data: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeData");
        //console.log(log.called());

        //console.info(log.isObj("data"), data);

        this.setKwData(data);

        this.init();
    }


    protected storeFltr(fltr: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeFltr");
        //console.log(log.called());

        //console.info(log.isObj("fltr"), fltr);

        this.kwFltr = fltr;
        this.init();
    }


    protected storeInit(init: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeInit");
        //console.log(log.called());

        //console.info(log.isObj("init"), init);

        this.kwInits = init;
        this.init();
    }


    protected storeView(view: any)
    {
        const log: kwLog = new kwLog(this.sClass, "storeView");
        //console.log(log.called());

        //console.info(log.isObj("view"), view);

        this.kwView = view;
        this.init();
    }


    private updateElmt(): void
    {
        const log: kwLog = new kwLog(this.sClass, "updateElmt");
        //console.log(log.called());

        if (!kw.isValid(this.elmt))
        {
            console.error(log.invalid("elmt"));
            return;
        }

        //console.info(log.isObj("kwData"), this.kwData);

        this.elmt.loadData(this.kwData);

        this.parseData(this.data);
    }


    private setKwData(data: any): void
    {
        const log: kwLog = new kwLog(this.sClass, "setKwData");
        //console.log(log.called());

        //console.info(log.isObj("data"), data);

        this.kwData = data;
    }
}
