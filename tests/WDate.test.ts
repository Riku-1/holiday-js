import { WDate } from '../src';
import { Day } from '../src/Day';
import { HolidayList } from '../src/index';

describe('isDayOff', () => {
  test('when day is default weekly holiday, return true', () => {
    const date = new WDate(
      new Date('January 2, 2021'), // Saturday
      new HolidayList()
    );
    expect(date.isDayOff()).toBeTruthy();
  });

  test('when day is gaved weekly holiday, return true', () => {
    const holidayLIst = new HolidayList([], [Day.Wed]);
    const date = new WDate(
      new Date('January 6, 2021'), // Wednesday
      holidayLIst
    );
    expect(date.isDayOff()).toBeTruthy();
  });

  test('when day is in in dayOffList, returen true', () => {
    const holidayList = new HolidayList([
      new Date('January 1, 2021'),
      new Date('January 2, 2021'),
      new Date('January 3, 2021'),
    ]);
    const date = new WDate(new Date('January 1, 2021'), holidayList);
    expect(date.isDayOff()).toBeTruthy();
  });

  test('when day is not weekly holiday and not in dayOffList, returen false', () => {
    const date = new WDate(new Date('January 2, 2021'), new HolidayList());
    expect(date.isDayOff()).toBeTruthy();
  });
});
