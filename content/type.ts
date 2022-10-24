type Hero = {
  appType: string;
  tagLine: string;
  description: string;
  mainActionText: string;
  extraActionText: string;
};

type Step = {
  title: string,
  heading: string,
  description: string,
  img: string | any,
  alternate: boolean,
};

type BottomLead = {
  actionText: string,
  description: string,
  mainActionText: string,
  extraActionText: string,
}

export type Data = {
  hero: Hero,
  listStep: Array<Step>,
  bottomLead: BottomLead;
};