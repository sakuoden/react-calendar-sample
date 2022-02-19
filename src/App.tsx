import React, {useState} from 'react';
import Calendar from 'ts-calendar/lib/model/calendar/Calendar';
import CalendarWeek from 'ts-calendar/lib/model/calendar/CalendarWeek';

const App = () => {
  const [calendar, setCalendar] = useState<Calendar>(Calendar.ofThisMonth);

  const nextMonth = () => {
    setCalendar(calendar.nextMonth());
  }

  const lastMonth = () => {
    setCalendar(calendar.lastMonth());
  }

  return (
    <>
      <div>
        <table>
          <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          </thead>
          <tbody className={"text-center align-top"}>
          {calendar.getWeeks().map((week: CalendarWeek, index: number) => {
            return (
              <tr key={index}>
                {week.getDates().map(date => {
                  return (
                    <td className={"border border-gray-500"} key={date.toString()}>
                      {calendar.isThisMonth(date.toMonth()) ? (
                        <>{ date.toNumber() }</>
                      ) : (
                        <></>
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
