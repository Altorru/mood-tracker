export function getMoodHistory(): Array<{ date: string; mood: string }> {
  const history = localStorage.getItem('moodHistory');
  return history ? JSON.parse(history) : [];
}

export function saveMood(mood: string) {
  const history = getMoodHistory();
  const newEntry = { date: new Date().toISOString().split('T')[0], mood };
  localStorage.setItem(
    'moodHistory',
    JSON.stringify([...history, newEntry])
  );
}