/**********************************************************************
 *
 * kw/class/BSApi/kwBSApi.ts
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
import { kw }		                from "@kw/kw";
import { kwLog }		            from "@kw/kwLog";


const sTAG: string = "attrs";


export class kwBSAttrs
{
	protected sClass: string = this.constructor.name;

    private _data: object[];

    private bInit: boolean          = false;


	constructor(
		private BS: object )
	{
        const log: kwLog = new kwLog(this.sClass, "constructor");
        //console.log(log.called());
	};

	get data(): object[] { return this._data; }

    set data(val: object[] ) { this._data = val; }

//@formatter:on

    public init(): boolean
    {
        const log: kwLog = new kwLog(this.sClass, "init");
        //console.log(log.called());

        if (this.bInit)
        {
            return;
        }

        this.bInit = true;

        if (!kw.isValid(this.BS))
        {
            console.error(log.invalid("BS"));
            return false;
        }
        //console.info(log.is("BS", this.BS));

        const data: object[] = this.BS[sTAG];

    }

    static is(obj: object): boolean
	{
		return kw.is(obj, kwBSAttrs)
	}

}

