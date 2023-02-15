import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentOnFilter'
})
export class SentOnFilterPipe implements PipeTransform {

  transform(sentOn: Date): string {
    let date = new Date(sentOn);
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString();
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else if (date > new Date (today.setDate(today.getDate() - 7))) {
      return daysOfWeek[date.getDay()];
    } else {
      return date.toLocaleDateString('en-us', { month: 'short' }) + ' ' + date.getDate();
    }
  }
}
