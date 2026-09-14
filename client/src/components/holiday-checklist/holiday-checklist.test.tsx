import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  HolidayChecklist,
  HOLIDAY_CHECKLIST_STORAGE_KEY,
  getStoredCompletedTaskIds
} from './holiday-checklist';
import { holidayChecklistData } from './holiday-checklist-data';

const totalTaskCount = holidayChecklistData.reduce(
  (sum, day) => sum + day.tasks.length,
  0
);

describe('holidayChecklistData', () => {
  it('should contain 30 days', () => {
    expect(holidayChecklistData).toHaveLength(30);
  });

  it('should contain 52 tasks in total', () => {
    expect(totalTaskCount).toBe(52);
  });

  it('should have unique task ids', () => {
    const ids = holidayChecklistData.flatMap(day =>
      day.tasks.map(task => task.id)
    );
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('getStoredCompletedTaskIds', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return an empty array when nothing is stored', () => {
    expect(getStoredCompletedTaskIds()).toEqual([]);
  });

  it('should return stored numeric ids', () => {
    localStorage.setItem(HOLIDAY_CHECKLIST_STORAGE_KEY, JSON.stringify([1, 2]));
    expect(getStoredCompletedTaskIds()).toEqual([1, 2]);
  });

  it('should return an empty array for malformed data', () => {
    localStorage.setItem(HOLIDAY_CHECKLIST_STORAGE_KEY, 'not-json');
    expect(getStoredCompletedTaskIds()).toEqual([]);
  });
});

describe('<HolidayChecklist />', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render a heading for every day', () => {
    render(<HolidayChecklist />);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(30);
  });

  it('should render a button for every task', () => {
    render(<HolidayChecklist />);
    const taskButtons = screen
      .getAllByRole('button')
      .filter(button => button.className.includes('holiday-checklist-task'));
    expect(taskButtons).toHaveLength(totalTaskCount);
  });

  it('should start with 0% progress', () => {
    render(<HolidayChecklist />);
    const progressBar = screen.getByTestId('holiday-checklist-progress');
    expect(progressBar).toHaveStyle({ width: '0%' });
  });

  it('should mark a task complete when clicked and persist it', async () => {
    const user = userEvent.setup();
    render(<HolidayChecklist />);

    const button = screen.getAllByRole('button')[0];

    await user.click(button);

    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(getStoredCompletedTaskIds()).toEqual([
      holidayChecklistData[0].tasks[0].id
    ]);
  });

  it('should toggle a task back to incomplete when clicked again', async () => {
    const user = userEvent.setup();
    render(<HolidayChecklist />);

    const button = screen.getAllByRole('button')[0];

    await user.click(button);
    await user.click(button);

    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(getStoredCompletedTaskIds()).toEqual([]);
  });

  it('should restore progress that was already stored', () => {
    const firstTaskId = holidayChecklistData[0].tasks[0].id;
    localStorage.setItem(
      HOLIDAY_CHECKLIST_STORAGE_KEY,
      JSON.stringify([firstTaskId])
    );

    render(<HolidayChecklist />);

    const percentage = Math.round((1 / totalTaskCount) * 100);
    const progressBar = screen.getByTestId('holiday-checklist-progress');
    expect(progressBar).toHaveStyle({ width: `${percentage}%` });
  });
});
