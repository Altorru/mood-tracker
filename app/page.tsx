"use client";

import MoodTracker from './components/MoodTracker';
import ChartHistory from './components/ChartHistory';
import { useState } from 'react';

export default function Home() {
  const [moodHistory, setMoodHistory] = useState<{ date: string; mood: string }[]>([]);

  // Save mood to history state
  const saveMood = (mood: string) => {
    const newEntry = {
      date: new Date().toISOString().split('T')[0],
      mood,
    };

    setMoodHistory((prev) => [...prev, newEntry]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <MoodTracker saveMood={saveMood} />
      <ChartHistory history={moodHistory} />
    </div>
  );
}