"use client";

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartHistory({ history }: { history: Array<{ date: string; mood: string }> }) {
  const [data, setData] = useState<{ labels: string[]; datasets: any }>({
    labels: [],
    datasets: [{ data: [] }],
  });

  useEffect(() => {
    if (history.length > 0) {
      const labels = history.map((item) => item.date);

      // Map mood strings to numerical values for chart display (1-4)
      const moodValues = history.map((item) => ({
        label: item.mood,
        value:
          item.mood === 'happy' ? 4 : 
          item.mood === 'calm' ? 2 : 
          item.mood === 'sad' ? 1 : 
          item.mood === 'energetic' ? 3 : 0
      }));

      setData({
        labels,
        datasets: [
          {
            label: 'Mood History',
            data: moodValues.map((m) => m.value),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            fill: true,
          },
        ],
      });
    }
  }, [history]);

  return (
    <div className="mt-8 p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Mood History</h3>
      {history.length > 0 ? (
        <Line
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Mood Trends Over Time',
              },
            },
          }}
        />
      ) : (
        <p className="text-gray-500">No mood history yet. Track your mood to see it here!</p>
      )}
    </div>
  );
}