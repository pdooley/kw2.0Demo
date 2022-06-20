/**********************************************************************
 *
 * kwView/class/side/kwSide.ts
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
import {kw}                 from "@kw/kw";
import {kwSideType}         from "./kwSideType";

//@formatter:on

const sTAG_BOTTOM: string = "nBottom";
const sTAG_IS_FIXED: string = "bIsFixed";
const sTAG_SIDE: string = "sSide";
const sTAG_TITLE: string = "sTitle";
const sTAG_TITLE_CLASS: string = "sTitleClass";
const sTAG_TOP: number = 0;

export class kwSide
{

    public sEnd: string = 'start';

    public bIsFixed: boolean = true;

    public nTop: number = 0;
    public nBottom: number = 0;

    public sTitle: string;
    public sTitleClass: string;

    sSide: string;

    links: object;
    logo: object;

    constructor(private data: object)
    {
        //console.log("kwSide::constructor() called");
    }

    init(): boolean
    {
        //console.log("kwSide::init() called.");

        if (kw.isNull(this.data))
        {
            console.error("kwSide::init() data is invalid.");
            return false;
        }
        //console.info("kwSide::init() data ", this.data);

        const info: object = this.data;

        const nBottom: number = this.data[sTAG_BOTTOM];
        if (!kw.isNumber(nBottom) || nBottom < 0)
        {
            //console.info('kwSide::init() nBottom is empty.');
        }
        else
        {
            //console.info('kwSide::init() nBottom is [', nBottom, "].");
            this.nBottom = nBottom;
        }


        const sSide: string = this.data[sTAG_SIDE];
        if (!kw.isString(sSide) || sSide.length == 0)
        {
            //console.info('kwSide::init() sSide is empty - options are (left, right).');
            //console.info('kwSide::init() using default [left].');
        }
        else
        {
            //console.info('kwSide::init() sSide is [', sSide, "].");

            const sEnd = (sSide === "left") ? "start" : "end";
            //console.info('kwSide::init() sEnd is [', sEnd, "].");
            this.sEnd = sEnd;
        }


        const bIsFixed: boolean = this.data[sTAG_IS_FIXED];
        if (!kw.isBoolean(bIsFixed))
        {
            //console.info('kwSide::init() bIsFixed is empty - using default [true].');
        }
        else
        {
            //console.info('kwSide::init() bIsFixed is [', bIsFixed, "].");
            this.bIsFixed = bIsFixed;
        }


        const sTitle: string = this.data[sTAG_TITLE];
        if (!kw.isString(sTitle) || sTitle.length == 0)
        {
            //console.info('kwSide::init() sTitle is empty.');
        }
        else
        {
            //console.info('kwSide::init() sTitle is [', sTitle, "].");
            this.sTitle = sTitle;
        }


        const sTitleClass: string = this.data[sTAG_TITLE_CLASS];
        if (! kw.isString(sTitleClass) || sTitleClass.length == 0)
        {
            //console.info('kwSide::init() sTitleClass is empty.');
        }
        else
        {
            //console.info('kwSide::init() sTitleClass is [', sTitleClass, "].");
            this.sTitleClass = sTitleClass;
        }


        const nTop: number = this.data[sTAG_TOP];
        if (!kw.isNumber(nTop) || nTop < 0)
        {
            //console.info('kwSide::init() nTop is empty.');
        }
        else
        {
            //console.info('kwSide::init() nTop is [', nTop, "].");
            this.nTop = nTop;
        }

        if (!this.retrieveLinks())
        {
            return false;
        }

        //if (!this.retrieveLogo())
        //{
        //    return false;
        //}

        return true;
    }

    getLinks(): object
    {
        return this.links;
    }

    getLogo(): object
    {
        return this.logo;
    }

    getTitle(): string
    {
        return this.sTitle;
    }

    getTitleClass(): string
    {
        return this.sTitleClass;
    }

    retrieveLinks(): boolean
    {
        //console.log('kwSide::retrieveLinks() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwSide::retrieveLinks() data is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveLinks() data is [', this.data, "].");

        const links = this.data["links"];
        if (kw.isNull(links))
        {
            console.error('kwSide::retrieveLinks() links is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveLinks() links is [', links, "].");
        this.links = links;

        return true;
    }

    retrieveLogo(): boolean
    {
        //console.log('kwSide::retrieveLogo() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwSide::retrieveLogo() data is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveLogo() data is [', this.data, "].");

        const logo: object = this.data["logo"];
        if (kw.isNull(logo))
        {
            console.error('kwSide::retrieveLogo() logo is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveLogo() logo is [', logo, "].");
        this.logo = logo;

        return true;
    }

    retrieveTitle(): boolean
    {
        //console.log('kwSide::retrieveTitle() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwSide::retrieveTitle() data is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveTitle() data is [', this.data, "].");

        return true;
    }

    retrieveTitleClass(): boolean
    {
        //console.log('kwSide::retrieveTitleClass() called.');

        if (kw.isNull(this.data))
        {
            console.error('kwSide::retrieveTitleClass() data is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveTitleClass() data is [', this.data, "].");

        const sTitleClass: string = this.data[sTAG_TITLE_CLASS];
        if (! kw.isString(sTitleClass) || sTitleClass.length == 0)
        {
            console.error('kwSide::retrieveTitleClass() links is invalid.');
            return false;
        }
        //console.info('kwSide::retrieveTitleClass() sTitleClass is [', sTitleClass, "].");
        this.sTitleClass = sTitleClass;

        return true;
    }

    toString(): string
    {
        return this.constructor.name;
    }

    static is(obj: object): boolean
    {
        return kw.is(obj, kwSide)
    }
}

