import { Day } from './Day';

export class WDate {
  constructor(private date: Date, private holidayList: HolidayList) {}
  /**
   * return whether the date is a day off or not
   * TODO: check dayOffList
   * @param date
   * @returns
   */
  isDayOff() {
    return this.holidayList.weeklyHoliday.some(
      (value) => this.date.getDay() === value
    );
  }

  // 稼働日で何日後か

  // 稼働日でx日かかると何日になるか
}

export class HolidayList {
  constructor(
    dayOffList: Date[] = [],
    public weeklyHoliday: Day[] = [Day.Sat, Day.Sun]
  ) {}
}
