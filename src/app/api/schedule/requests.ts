export interface UpsertScheduleRequestFrame {
    start: string,
    end: string
}

export interface UpsertScheduleRequestShift {
    frames: UpsertScheduleRequestFrame[];
}

export interface UpsertScheduleRequest {
    name: string;
    mon: UpsertScheduleRequestShift | null;
    tue: UpsertScheduleRequestShift | null;
    wed: UpsertScheduleRequestShift | null;
    thu: UpsertScheduleRequestShift | null;
    fri: UpsertScheduleRequestShift | null;
    sat: UpsertScheduleRequestShift | null;
    sun: UpsertScheduleRequestShift | null;
}
