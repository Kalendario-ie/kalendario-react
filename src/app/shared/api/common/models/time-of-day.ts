
function stringfy(value: number): string {
    if (value < 10) {
        return '0' + value.toString();
    }
    return value.toString();
}

export class TimeOfDay {
    constructor(public hour: number, public minute: number) {
    }

    static fromString(time: string): TimeOfDay {
        const timeOfDay = new TimeOfDay(0, 0);
        timeOfDay.hour = +time.substr(0, 2);
        timeOfDay.minute = +time.substr(3, 2);
        return timeOfDay;
    }

    static zero(): TimeOfDay {
        return new TimeOfDay(0, 0);
    }

    toString(): string {
        return stringfy(this.hour) + ':' + stringfy(this.minute);
    }


    toISOString(): string {
        return stringfy(this.hour) + ':' + stringfy(this.minute) + ':00';
    }

    hashCode(): number {
        return this.hour + this.minute / 60;
    }

}
