export class Dates {
  humanDate(time: Date) {
    let hours = time.getHours();
    const minute = time.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = minute < 10 ? '0' + minute : minute;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  getDiffrenceFromNow(old: number) {
    const current = new Date().getTime();
    const diff = current - old;
    return Math.floor(diff / 1000 / 60);
  }
}
