"use client";

import styles from "./Schedule.module.css";
import classNames from "classnames";

const scheduleData = [
  { day: "Monday", time: "06:30 AM - 07:30 AM", name: "Morning Flow", level: "All Levels", levelClass: styles.tagAll },
  { day: "Tuesday", time: "05:00 PM - 06:00 PM", name: "Hatha Yoga", level: "Beginner", levelClass: styles.tagBeginner },
  { day: "Wednesday", time: "06:30 AM - 07:30 AM", name: "Vinyasa Core", level: "Intermediate", levelClass: styles.tagIntermediate },
  { day: "Thursday", time: "05:00 PM - 06:00 PM", name: "Restorative Yoga", level: "All Levels", levelClass: styles.tagAll },
  { day: "Friday", time: "06:30 AM - 07:30 AM", name: "Power Yoga", level: "Intermediate", levelClass: styles.tagIntermediate },
  { day: "Saturday", time: "08:00 AM - 09:30 AM", name: "Weekend Workshop", level: "All Levels", levelClass: styles.tagAll },
  { day: "Sunday", time: "Rest Day", name: "Self Practice / Rest", level: "-", levelClass: "" },
];

export default function Schedule() {
  return (
    <section id="schedule" className={`section ${styles.schedule}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Class Schedule</h2>
          <p>Find a class that fits your routine and skill level.</p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Day</th>
                <th className={styles.th}>Time</th>
                <th className={styles.th}>Class Name</th>
                <th className={styles.th}>Level</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((row, idx) => (
                <tr key={idx}>
                  <td className={styles.td}><strong>{row.day}</strong></td>
                  <td className={styles.td}>
                    <span className={styles.time}>{row.time}</span>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.className}>{row.name}</div>
                  </td>
                  <td className={styles.td}>
                    {row.level !== "-" && (
                      <span className={classNames(styles.tag, row.levelClass)}>
                        {row.level}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
