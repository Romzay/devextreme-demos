import { Injectable } from '@angular/core';

export class Data {
    text: string;
    startDate: Date;
    endDate: Date;
}

const data: Data[] = [
    {
        text: "Website Re-Design Plan",
        startDate: new Date("2017-05-22T06:30:00.000Z"),
        endDate: new Date("2017-05-22T08:30:00.000Z")
    },
    {
        text: "Install New Router in Dev Room",
        startDate: new Date("2017-05-22T10:00:00.000Z"),
        endDate: new Date("2017-05-22T11:00:00.000Z")
    },
    {
        text: "Approve Personal Computer Upgrade Plan",
        startDate: new Date("2017-05-23T07:00:00.000Z"),
        endDate: new Date("2017-05-23T08:00:00.000Z")
    },
    {
        text: "Final Budget Review",
        startDate: new Date("2017-05-23T10:30:00.000Z"),
        endDate: new Date("2017-05-23T12:00:00.000Z")
    },
    {
        text: "New Brochures",
        startDate: new Date("2017-05-22T12:00:00.000Z"),
        endDate: new Date("2017-05-22T13:15:00.000Z")
    },
    {
        text: "Install New Database",
        startDate: new Date("2017-05-24T06:45:00.000Z"),
        endDate: new Date("2017-05-24T09:00:00.000Z")
    },
    {
        text: "Approve New Online Marketing Strategy",
        startDate: new Date("2017-05-24T11:30:00.000Z"),
        endDate: new Date("2017-05-24T13:30:00.000Z")
    },
    {
        text: "Upgrade Personal Computers",
        startDate: new Date("2017-05-23T12:30:00.000Z"),
        endDate: new Date("2017-05-23T13:45:00.000Z")
    },
    {
        text: "Prepare 2015 Marketing Plan",
        startDate: new Date("2017-05-29T10:00:00.000Z"),
        endDate: new Date("2017-05-29T12:00:00.000Z")
    },
    {
        text: "Brochure Design Review",
        startDate: new Date("2017-05-30T12:30:00.000Z"),
        endDate: new Date("2017-05-30T14:00:00.000Z")
    },
    {
        text: "Create Icons for Website",
        startDate: new Date("2017-05-26T07:00:00.000Z"),
        endDate: new Date("2017-05-26T09:00:00.000Z")
    },
    {
        text: "Upgrade Server Hardware",
        startDate: new Date("2017-05-26T13:30:00.000Z"),
        endDate: new Date("2017-05-26T15:00:00.000Z")
    },
    {
        text: "Submit New Website Design",
        startDate: new Date("2017-05-31:00:00.000Z"),
        endDate: new Date("2017-05-31T08:30:00.000Z")
    },
    {
        text: "Launch New Website",
        startDate: new Date("2017-05-26T11:30:00.000Z"),
        endDate: new Date("2017-05-26T13:10:00.000Z")
    }
];

@Injectable()
export class DataService {
    getData() {
        return data;
    }

    getDinnerTime() {
        return { from: 12, to: 13 };
    }

    getHolidays() {
        return [
            new Date(2017, 4, 25),
            new Date(2017, 6, 4)
        ];
    }
}
