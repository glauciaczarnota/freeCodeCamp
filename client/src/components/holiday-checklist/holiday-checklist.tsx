import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FullWidthRow } from '../helpers';
import GreenPass from '../../assets/icons/green-pass';
import GreenNotCompleted from '../../assets/icons/green-not-completed';
import { holidayChecklistData } from './holiday-checklist-data';
import './holiday-checklist.css';

export const HOLIDAY_CHECKLIST_STORAGE_KEY = 'fcc-holiday-checklist-progress';

export const getStoredCompletedTaskIds = (): number[] => {
  try {
    const stored = localStorage.getItem(HOLIDAY_CHECKLIST_STORAGE_KEY);
    const parsed: unknown = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed)
      ? parsed.filter(id => typeof id === 'number')
      : [];
  } catch {
    return [];
  }
};

const totalTaskCount = holidayChecklistData.reduce(
  (sum, day) => sum + day.tasks.length,
  0
);

export const HolidayChecklist = (): JSX.Element => {
  const { t } = useTranslation();
  const [completedTaskIds, setCompletedTaskIds] = useState<number[]>([]);

  useEffect(() => {
    setCompletedTaskIds(getStoredCompletedTaskIds());
  }, []);

  const toggleTask = (taskId: number) => {
    setCompletedTaskIds(previous => {
      const next = previous.includes(taskId)
        ? previous.filter(id => id !== taskId)
        : [...previous, taskId];

      try {
        localStorage.setItem(
          HOLIDAY_CHECKLIST_STORAGE_KEY,
          JSON.stringify(next)
        );
      } catch {
        // localStorage may be unavailable (e.g. private browsing) - progress
        // simply won't persist across visits.
      }

      return next;
    });
  };

  const completedCount = completedTaskIds.length;
  const percentage = Math.round((completedCount / totalTaskCount) * 100);

  return (
    <FullWidthRow>
      <div className='holiday-checklist'>
        <h2 className='holiday-checklist-title'>
          {t('holiday-checklist.title')}
        </h2>
        <p className='holiday-checklist-description'>
          {t('holiday-checklist.description')}
        </p>

        <div className='holiday-checklist-bar-row'>
          <div className='holiday-checklist-bar-container'>
            <div
              className='holiday-checklist-bar-fill'
              data-testid='holiday-checklist-progress'
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className='holiday-checklist-progress-text'>
            {t('holiday-checklist.progress', {
              completed: completedCount,
              total: totalTaskCount
            })}
          </span>
        </div>

        <ol className='holiday-checklist-days'>
          {holidayChecklistData.map(({ day, tasks }) => (
            <li key={day} className='holiday-checklist-day'>
              <h3 className='holiday-checklist-day-title'>
                {t('holiday-checklist.day', { day })}
              </h3>
              <ul className='holiday-checklist-tasks'>
                {tasks.map(task => {
                  const isComplete = completedTaskIds.includes(task.id);
                  return (
                    <li key={task.id}>
                      <button
                        type='button'
                        className={
                          isComplete
                            ? 'holiday-checklist-task complete'
                            : 'holiday-checklist-task'
                        }
                        aria-pressed={isComplete}
                        onClick={() => toggleTask(task.id)}
                      >
                        <span
                          className='holiday-checklist-checkbox'
                          aria-hidden='true'
                        >
                          {isComplete ? (
                            <GreenPass hushScreenReaderText />
                          ) : (
                            <GreenNotCompleted hushScreenReaderText />
                          )}
                        </span>
                        {task.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </FullWidthRow>
  );
};

HolidayChecklist.displayName = 'HolidayChecklist';

export default HolidayChecklist;
