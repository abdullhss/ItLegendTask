export type LeaderboardEntry = {
  id: string;
  rank: number;
  name: string;
  score: number;
  avatarUrl?: string;
};

export const leaderboardEntries: LeaderboardEntry[] = [
  { id: "1", rank: 1, name: "Mustafa Fathi :)", score: 98, avatarUrl: "/user1-image.jpg" },
  { id: "2", rank: 2, name: "Sarah Johnson", score: 92, avatarUrl: "/user2-image.jpg" },
  { id: "3", rank: 3, name: "Ahmed Hassan", score: 88, avatarUrl: "/user3-image.jpg" },
  { id: "4", rank: 4, name: "Emily Carter", score: 85 },
  { id: "5", rank: 5, name: "Omar Ali", score: 81 },
  { id: "6", rank: 6, name: "You", score: 63 },
];
