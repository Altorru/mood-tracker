"use client";

import { useState } from 'react';

export default function MoodTracker({ saveMood }: { saveMood: (mood: string) => void }) {
  const [mood, setMood] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Save mood to parent state
    saveMood(mood);

    setMessage(`You selected: ${mood}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-2">How are you feeling today?</h3>
      <select
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="p-2 border rounded mb-3 w-full"
        required
      >
        <option value="">Select your mood</option>
        <option value="happy">Happy 😊</option>
        <option value="sad">Sad 😢</option>
        <option value="calm">Calm 🧘</option>
        <option value="energetic">Energetic 💪</option>
      </select>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Track Mood
      </button>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </form>
  );
}