import moment from 'moment-timezone';

type MomentInput = moment.MomentInput;
type MomentFormatSpecification = moment.MomentFormatSpecification;
export class Moment {

  inp: MomentInput;
  format: MomentFormatSpecification;
  constructor(inp?: MomentInput, format?: MomentFormatSpecification) {
    this.inp = inp;
    this.format = format;
  }
  setTz(tz = 'Asia/ShangHai') {
    if(this.inp) {
      return moment(this.inp, this.format).tz(tz);
    } else {
      return moment().tz(tz);
    }
  }
  
}