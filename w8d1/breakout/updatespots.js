const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 0,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Should we do a get request to update the spots ? No.
// Should we do +1, -1 to the spots when book/delete ?

// We want to count the amount of null interviews
// Only the appointments of a given day
// in the appointment key of a day object (appt ids)
// We need to know the day

// We will change appointments in the day obj in the days array
// Immutable if

// spots: 1 (no structure, no spread)
// dayObj (structure, so spread)
// days (structure, so spread)
// state (structure, so spread)

const countSpots = (state) => {
  const currentDay = state.days.find((day) => day.name === state.day);
  const appointmentIds = currentDay.appointments;

  const spots = appointmentIds.filter((id) => !state.appointments[id].interview).length;

  return spots;
};

const updateSpots = (state) => {
  const updatedState = { ...state };
  const updatedDays = [...state.days];
  const updatedDay = { ...state.days.find((day) => day.name === state.day) };

  const spots = countSpots(state);
  updatedDay.spots = spots;

  const updatedDayIndex = state.days.findIndex((day) => day.name === state.day);
  updatedDays[updatedDayIndex] = updatedDay;

  updatedState.days = updatedDays;

  return updatedState;
};

console.log(updateSpots(state));
console.log(state);

// state

// updated state object with appointments

// updated state object with spots

// post

// set state
