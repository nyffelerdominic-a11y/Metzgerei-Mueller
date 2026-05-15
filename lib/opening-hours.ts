export type OpeningSlot = { open: string; close: string };
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// 0 = Sunday, 1 = Monday, ..., 6 = Saturday
export const openingHours: Record<WeekDay, OpeningSlot[]> = {
  0: [], // Sonntag
  1: [
    { open: "06:30", close: "12:30" },
    { open: "14:30", close: "18:30" },
  ],
  2: [
    { open: "06:30", close: "12:30" },
    { open: "14:30", close: "18:30" },
  ],
  3: [
    { open: "06:30", close: "12:30" },
    { open: "14:30", close: "18:30" },
  ],
  4: [
    { open: "06:30", close: "12:30" },
    { open: "14:30", close: "18:30" },
  ],
  5: [
    { open: "06:30", close: "12:30" },
    { open: "14:30", close: "18:30" },
  ],
  6: [{ open: "06:30", close: "14:00" }], // Samstag
};

export const weekdayLabels: Record<WeekDay, string> = {
  1: "Montag",
  2: "Dienstag",
  3: "Mittwoch",
  4: "Donnerstag",
  5: "Freitag",
  6: "Samstag",
  0: "Sonntag",
};

export const orderedWeekdays: WeekDay[] = [1, 2, 3, 4, 5, 6, 0];

function toMinutes(t: string) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export type OpeningStatus =
  | { state: "open"; closesAt: string; nextChange: Date }
  | { state: "closed-soon"; closesAt: string; nextChange: Date }
  | { state: "closed"; opensAt: string | null; opensLabel: string; nextChange: Date | null };

export function getOpeningStatus(now: Date = new Date()): OpeningStatus {
  const day = now.getDay() as WeekDay;
  const minutes = now.getHours() * 60 + now.getMinutes();
  const todaySlots = openingHours[day];

  for (const slot of todaySlots) {
    const open = toMinutes(slot.open);
    const close = toMinutes(slot.close);
    if (minutes >= open && minutes < close) {
      const nextChange = new Date(now);
      nextChange.setHours(Number(slot.close.slice(0, 2)), Number(slot.close.slice(3)), 0, 0);
      const remaining = close - minutes;
      return {
        state: remaining <= 30 ? "closed-soon" : "open",
        closesAt: slot.close,
        nextChange,
      };
    }
  }

  // Find next opening time within the next 7 days
  for (let i = 0; i < 7; i++) {
    const checkDay = ((day + i) % 7) as WeekDay;
    const slots = openingHours[checkDay];
    for (const slot of slots) {
      const open = toMinutes(slot.open);
      if (i === 0 && open <= minutes) continue;
      const nextChange = new Date(now);
      nextChange.setDate(now.getDate() + i);
      nextChange.setHours(Number(slot.open.slice(0, 2)), Number(slot.open.slice(3)), 0, 0);
      const opensLabel =
        i === 0 ? `heute ${slot.open}` : i === 1 ? `morgen ${slot.open}` : `${weekdayLabels[checkDay]} ${slot.open}`;
      return {
        state: "closed",
        opensAt: slot.open,
        opensLabel,
        nextChange,
      };
    }
  }

  return { state: "closed", opensAt: null, opensLabel: "bald", nextChange: null };
}
