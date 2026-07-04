import "./WeekGrid.css";

import DayCard from "./DayCard";

function WeekGrid({

  weeklyMeals,

  openModal,

  deleteMeal,

}) {

  const days = [

    "Monday",

    "Tuesday",

    "Wednesday",

    "Thursday",

    "Friday",

    "Saturday",

    "Sunday",

  ];

  return (

    <div className="week-grid">

      {

        days.map((day) => (

          <DayCard

            key={day}

            day={day}

            meal={weeklyMeals?.[day]}

            openModal={openModal}

            deleteMeal={deleteMeal}

          />

        ))

      }

    </div>

  );

}

export default WeekGrid;