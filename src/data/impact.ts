/**
 * Company impact figures, shared by the home and about pages.
 *
 * These are real business metrics that change over time. Keeping one copy
 * stops the two pages publishing different numbers for the same claim.
 */
export type ImpactStat = {
  figure: string;
  unit: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  {
    figure: "1,000,000+",
    unit: "km",
    label: "driven on our remanufactured Li-ion packs",
  },
  {
    figure: "10+",
    unit: "cities",
    label: "reached across India",
  },
  {
    figure: "5",
    unit: "stations",
    label: "swap partners live today",
  },
];
