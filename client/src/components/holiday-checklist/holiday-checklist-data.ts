export interface HolidayChecklistTask {
  id: number;
  text: string;
}

export interface HolidayChecklistDay {
  day: number;
  date: string;
  tasks: HolidayChecklistTask[];
}

// 30 days (1-30 December) covering 52 tasks in total.
export const holidayChecklistData: HolidayChecklistDay[] = [
  {
    day: 1,
    date: '2024-12-01',
    tasks: [
      { id: 1, text: 'Solve one coding challenge' },
      { id: 2, text: 'Review your notes from a recent lesson' }
    ]
  },
  {
    day: 2,
    date: '2024-12-02',
    tasks: [
      {
        id: 3,
        text: "Read an article about a technology you're curious about"
      },
      { id: 4, text: 'Share your progress in the freeCodeCamp forum' }
    ]
  },
  {
    day: 3,
    date: '2024-12-03',
    tasks: [
      { id: 5, text: 'Answer a question on the freeCodeCamp forum' },
      { id: 6, text: 'Watch a short coding tutorial' }
    ]
  },
  {
    day: 4,
    date: '2024-12-04',
    tasks: [
      { id: 7, text: 'Sketch out an idea for a project' },
      { id: 8, text: 'Write one paragraph in a coding journal' }
    ]
  },
  {
    day: 5,
    date: '2024-12-05',
    tasks: [
      { id: 9, text: 'Recap what you learned this week' },
      { id: 10, text: 'Explore a new coding language or tool' }
    ]
  },
  {
    day: 6,
    date: '2024-12-06',
    tasks: [
      { id: 11, text: "Debug a tricky problem you've been avoiding" },
      { id: 12, text: 'Refactor a piece of code you wrote earlier this year' }
    ]
  },
  {
    day: 7,
    date: '2024-12-07',
    tasks: [
      { id: 13, text: 'Set a coding goal for the new year' },
      { id: 14, text: 'Take a screen-free break today' }
    ]
  },
  {
    day: 8,
    date: '2024-12-08',
    tasks: [
      { id: 15, text: 'Rest and enjoy your day off' },
      { id: 16, text: 'Celebrate a coding win from this year' }
    ]
  },
  {
    day: 9,
    date: '2024-12-09',
    tasks: [
      { id: 17, text: 'Help a fellow camper with their code' },
      { id: 18, text: 'Organise your project files and notes' }
    ]
  },
  {
    day: 10,
    date: '2024-12-10',
    tasks: [
      {
        id: 19,
        text: "Try a coding challenge in a language you don't know well"
      },
      { id: 20, text: 'Write a README for one of your projects' }
    ]
  },
  {
    day: 11,
    date: '2024-12-11',
    tasks: [
      { id: 21, text: 'Review a pull request or code sample' },
      { id: 22, text: 'Star a project you find inspiring' }
    ]
  },
  {
    day: 12,
    date: '2024-12-12',
    tasks: [{ id: 23, text: 'Plan your next learning milestone' }]
  },
  {
    day: 13,
    date: '2024-12-13',
    tasks: [
      { id: 24, text: 'Practice typing out a data structure from memory' },
      { id: 25, text: 'Solve one coding challenge' }
    ]
  },
  {
    day: 14,
    date: '2024-12-14',
    tasks: [
      { id: 26, text: 'Review your notes from a recent lesson' },
      {
        id: 27,
        text: "Read an article about a technology you're curious about"
      }
    ]
  },
  {
    day: 15,
    date: '2024-12-15',
    tasks: [{ id: 28, text: 'Share your progress in the freeCodeCamp forum' }]
  },
  {
    day: 16,
    date: '2024-12-16',
    tasks: [
      { id: 29, text: 'Answer a question on the freeCodeCamp forum' },
      { id: 30, text: 'Watch a short coding tutorial' }
    ]
  },
  {
    day: 17,
    date: '2024-12-17',
    tasks: [
      { id: 31, text: 'Sketch out an idea for a project' },
      { id: 32, text: 'Write one paragraph in a coding journal' }
    ]
  },
  {
    day: 18,
    date: '2024-12-18',
    tasks: [{ id: 33, text: 'Recap what you learned this week' }]
  },
  {
    day: 19,
    date: '2024-12-19',
    tasks: [
      { id: 34, text: 'Explore a new coding language or tool' },
      { id: 35, text: "Debug a tricky problem you've been avoiding" }
    ]
  },
  {
    day: 20,
    date: '2024-12-20',
    tasks: [
      { id: 36, text: 'Refactor a piece of code you wrote earlier this year' },
      { id: 37, text: 'Set a coding goal for the new year' }
    ]
  },
  {
    day: 21,
    date: '2024-12-21',
    tasks: [{ id: 38, text: 'Take a screen-free break today' }]
  },
  {
    day: 22,
    date: '2024-12-22',
    tasks: [
      { id: 39, text: 'Rest and enjoy your day off' },
      { id: 40, text: 'Celebrate a coding win from this year' }
    ]
  },
  {
    day: 23,
    date: '2024-12-23',
    tasks: [
      { id: 41, text: 'Help a fellow camper with their code' },
      { id: 42, text: 'Organise your project files and notes' }
    ]
  },
  {
    day: 24,
    date: '2024-12-24',
    tasks: [{ id: 43, text: 'Take a screen-free break today' }]
  },
  {
    day: 25,
    date: '2024-12-25',
    tasks: [{ id: 44, text: 'Rest and enjoy your day off' }]
  },
  {
    day: 26,
    date: '2024-12-26',
    tasks: [
      { id: 45, text: 'Review a pull request or code sample' },
      { id: 46, text: 'Star a project you find inspiring' }
    ]
  },
  {
    day: 27,
    date: '2024-12-27',
    tasks: [{ id: 47, text: 'Plan your next learning milestone' }]
  },
  {
    day: 28,
    date: '2024-12-28',
    tasks: [
      { id: 48, text: 'Practice typing out a data structure from memory' },
      { id: 49, text: 'Solve one coding challenge' }
    ]
  },
  {
    day: 29,
    date: '2024-12-29',
    tasks: [
      { id: 50, text: 'Review your notes from a recent lesson' },
      {
        id: 51,
        text: "Read an article about a technology you're curious about"
      }
    ]
  },
  {
    day: 30,
    date: '2024-12-30',
    tasks: [{ id: 52, text: 'Share your progress in the freeCodeCamp forum' }]
  }
];
