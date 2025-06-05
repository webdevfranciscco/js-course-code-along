"use strict";

/*
    Coding Challenge #2

    Let's say you are building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:

    1. Total hours worked DONE
    2. Average daily hours DONE
    3. The day with the most hours worked DONE
    4. Number of days worked DONE
    5. Wether the week was full-time (worked 35 hours or more) DONE

    Test Data 2: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

"use strict";

const thisWeeksWorkedHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

let workedHoursReport = function (thisWeeksWorkedHours) {
  const weeklyReport = {};
  let totalHours = 0;
  let averageDailyHours = 0;
  let maxDailyHours = 0;

  for (let i = 0; i < thisWeeksWorkedHours.length; i++) {
    totalHours += thisWeeksWorkedHours[i];

    //if (thisWeeksWorkedHours[i] > maxDailyHours)
    //  maxDailyHours = thisWeeksWorkedHours[i];
    if (thisWeeksWorkedHours[i] > maxDailyHours) maxDailyHours = i;
  }

  weeklyReport.totalHoursWorked = totalHours;

  weeklyReport.averageDailyHours = totalHours / thisWeeksWorkedHours.length;

  weeklyReport.dayWithMostWorkedHours = maxDailyHours;

  weeklyReport.numberOfDaysWorked = thisWeeksWorkedHours.length;

  totalHours > 35
    ? (weeklyReport.isFullTimeWeek = true)
    : (weeklyReport.isFullTimeWeek = false);

  return weeklyReport;
};

console.log(workedHoursReport(thisWeeksWorkedHours));
