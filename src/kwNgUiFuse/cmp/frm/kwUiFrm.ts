//@formatter:off
import {Component}              from '@angular/core';

import {kw}                     from "@kw/kw";
import {kwLog}                  from "@kw/kwLog";
import {kwNgUiCtrlComp}         from "@kwNgUiCtrl/kwNgUiCtrlComp";
import {kwtFrm}                 from "./kwtFrm";


const sTAG: string = "";


@Component({
    selector: 'kw-ui-frm',
    templateUrl: 'kwUiFrm.html',
    styleUrls: ['kwUiFrm.scss']
})
export class kwUiFrm extends kwNgUiCtrlComp
{
    public ctrls: object[];

    constructor()
    {
        super(sTAG);
        const log = new kwLog(this.sClass, "constructor");
        //console.info(log.called());
    }

//@formatter:on

    protected initCmp(): void {
        //console.log(this.sClass, "::parseView() called.");
    }

    protected parseData(data: any): void {
        //console.log(this.sClass, "::parseData() called.");
    }

    protected parseInits(inits: object): void {
        //console.log(this.sClass, "::parseInits() called.");
    }

    protected parseView(view: object): void {
        const log = new kwLog(this.sClass, "parseView");
        //console.info(log.called());

        if (kw.isNull(view)) {
            console.error(log.invalid("view"));
            return;
        }

        const type: kwtFrm = <kwtFrm>view;

        const ctrls: object[] = type.ctrls;
        if (kw.isNull(ctrls)) {
            console.error(log.invalid("ctrls"));
            return;
        }

        if (!kw.isArray(ctrls)) {
            console.error(log.invalid("ctrls"));
        }

        //console.info(log.isObj("ctrls"), ctrls);

        this.ctrls = ctrls;
    }

}

/*
let group: FormGroup = this.fb.group(
    {
        aptNumber: new FormControl('', { validators: Validators.required }),
        city: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
        confirmEmailAddress: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
        countryId: new FormControl(0, { validators: Validators.required, updateOn: 'blur' }),
        currencyCd: new FormControl('0', { validators: Validators.required, updateOn: 'blur' }),
        district: new FormControl('', { validators: Validators.required }),
        emailAddress: new FormControl('', { validators: Validators.required }),
        firstName: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
        lastName: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
        noFirstName: new FormControl(true, { validators: Validators.required }),
        poBox: new FormControl('', { validators: Validators.required }),
        streetAddress: new FormControl('', { validators: Validators.required }),
        streetAddressTwo: new FormControl('', { validators: Validators.required }),
        streetNumber: new FormControl('', { validators: Validators.required }),
    });
    */
