// The blog's four topics. Each article names one of these ids in its "topic" line.
// Each topic gets a shelf on the Blog page and its own page at /topics/<id>.
export const TOPICS = [
  {
    id: "computer-setup",
    name: "Computer setup",
    intro: "Windows settings, shortcuts and small changes that make a computer easier to use with shaky hands.",
  },
  {
    id: "tools-and-devices",
    name: "Tools and devices",
    intro: "Mice, trackballs, keyboards and other tools that can make pointing and clicking steadier.",
  },
  {
    id: "about-tremor",
    name: "About tremor",
    intro: "Clear, checked information about tremor: the different types, what can make them worse and when to see a doctor.",
  },
  {
    id: "everyday-life",
    name: "Everyday life",
    intro: "Practical ideas for daily life with a tremor, at home, at work and online.",
  },
] as const;

export type TopicId = (typeof TOPICS)[number]["id"];
export const topicIds = TOPICS.map((t) => t.id) as [TopicId, ...TopicId[]];
export const topicById = (id: string) => TOPICS.find((t) => t.id === id)!;
