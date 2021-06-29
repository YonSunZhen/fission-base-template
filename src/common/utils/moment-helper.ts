import moment from 'moment-timezone';
export class Moment {

  setTz(tz = 'Asia/ShangHai') {
    return moment().tz(tz);
  }

}