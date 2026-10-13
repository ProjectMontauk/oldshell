export interface Market {
  id: string;
  title: string;
  description: string;
  image: string;
  contractAddress: string;
  outcomes: [string, string]; // [Yes outcome, No outcome]
  rules: string;
}

export const markets: Market[] = [
  {
    id: 'jfk',
    title: "CIA Involved in JFK Assassination?",
    description: "Did the CIA aid in the planning or execution of John F. Kennedy's Assassination?",
    image: "/JFKCar.png",
    contractAddress: "0xC8A498Bd0726036F7cdF9bb83f92E9D969970600", // CIA / JFK Market on Base Sepolia
    outcomes: ["Yes, CIA involved in JFK's death", "No, CIA innocent in JFK's death"],
    rules: "The market will resolve \"Yes\" if the WSJ history review board finds that there is a clear and convincing evidence establishing that current or former CIA personnel aided in the planning or execution of President John F. Kennedy's Assassination.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ history review board did not find a clear and convincing evidence supporting that current or former CIA personnel aided in the planning or execution of President John F. Kennedy's Assassination.\n\nThis market will close February 20th, 2026 at 11:59 AM EDT and within three days of market close, the review board will resolve the market and author the case summary.\n\nFind out more about the WSJ history review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'covid-lab-leak',
    title: "Was COVID-19 a Lab Leak?",
    description: "Did SARS-CoV-2 (COVID-19) enter the human population through a laboratory leak from a research or related facility, rather than purely through natural zoonotic spillover?",
    image: "/CovidVaccine.png",
    contractAddress: "0x5Af20651c5a8fAd0d1E38122183fEB8bC0838716",
    outcomes: [
      "Yes, COVID-19 entered through a laboratory leak",
      "No, COVID-19 did not enter through a laboratory leak"
    ],
    rules: "This market will resolve to \"Yes\" if there is clear and convincing evidence that SARS-CoV-2 (COVID-19) entered the human population through a laboratory leak from a research or related facility, rather than purely through natural zoonotic spillover without such involvement. Otherwise, this market will resolve to \"No.\"\n\nPrice oracle. The reference price for this market is the probability estimate for the same \"Yes\" outcome described above, as published by superforecasters from the Good Judgment Project for this market. The oracle rule is fixed: it always tracks those superforecasters' current published estimate for this question.\n\nContinuous updates. Superforecasters from the Good Judgment Project may revise their estimate for this market at any time, as new evidence or analysis warrants. Superforecasters are required to update their forecasts at least once per month; when they update their view, the reference price reflects that latest estimate.\n\nParticipants should treat the oracle as a forward-looking, evidence-weighted probability—not a final legal or journalistic determination."
  },
  {
    id: 'glp1-blindness',
    title: "Is GLP-1 use linked to sudden onset blindness?",
    description: "Is there clear and convincing evidence that GLP-1 receptor agonist use is causally linked to sudden onset blindness?",
    image: "/RFK.png",
    contractAddress: "0x4b468b0d30d0ff3fcf70d87ef55efc9568dbecc0",
    outcomes: [
      "Yes, GLP-1 use is linked to sudden onset blindness",
      "No, GLP-1 use is not linked to sudden onset blindness"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ scientific review board finds clear and convincing evidence that use of GLP-1 receptor agonists is causally linked to sudden onset blindness, after adjusting for reasonable confounders.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ scientific review board did not find clear and convincing evidence supporting such a causal link.\n\nFind out more about the WSJ scientific review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'talarico-flu',
    title: "Was James Talarico's two-week campaign absence due to the flu?",
    description: "Was James Talarico's roughly two-week campaign absence caused by the flu?",
    image: "/RFK.png",
    contractAddress: "0x4b468b0d30d0ff3fcf70d87ef55efc9568dbecc0",
    outcomes: [
      "Yes, the absence was due to the flu",
      "No, the absence was not due to the flu"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ history review board finds clear and convincing evidence that James Talarico's roughly two-week campaign absence was due to the flu.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ history review board did not find clear and convincing evidence that the flu caused the absence.\n\nFind out more about the WSJ history review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'autism',
    title: "Is the childhood vaccine schedule linked to autism?",
    description: "Is there clear and convincing evidence linking the CDC-recommended childhood vaccine schedule to a higher likelihood of developing Autism Spectrum Disorder?",
    image: "/RFK.png",
    contractAddress: "0x80863c2f689b293049564a68e781fd4d4ae01858",
    outcomes: ["Yes, childhood vaccines linked to autism:", "No, childhood vaccines not linked to autism:"],
    rules: "The market will resolve \"Yes\" if the WSJ scientific review board finds that there is a clear and convincing evidence establishing the link between children following the CDC-recommended childhood vaccine schedule and a higher likelihood of developing Autism Spectrum Disorder over their lifetime compared to unvaccinated children.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ scientific review board did not find a clear and convincing evidence supporting the link between childhood vaccines and a higher likelihood of developing Autism Spectrum Disorder.\n\nThis market will close February 20th, 2026 at 11:59 AM EDT and within three days of market close, the review board will resolve the market and author the case summary.\n\nFind out more about the WSJ scientific review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'epstein-intelligence',
    title: "Was Jeffrey Epstein an Intelligence Agent?",
    description: "Was Jeffrey Epstein an agent of, or otherwise acting on behalf of, an intelligence service?",
    image: "/TrumpEpstein.png",
    contractAddress: "0xbf7b301d6b0542f2b69da5816eda102bbcc2aaf2",
    outcomes: [
      "Yes, Jeffrey Epstein was an intelligence agent",
      "No, Jeffrey Epstein was not an intelligence agent"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ history review board finds clear and convincing evidence that Jeffrey Epstein was an agent of, or otherwise acted on behalf of, an intelligence service.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ history review board did not find clear and convincing evidence supporting that conclusion.\n\nFind out more about the WSJ history review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'covid19',
    title: "Was COVID-19 Genetically Engineered?",
    description: "Was SARS-CoV-2 (COVID-19) genetically engineered in a lab rather than arising purely from natural zoonotic spillover?",
    image: "/CovidVaccine.png",
    contractAddress: "0x157a7bc878c625b9f85136BC75Bdb7503a0C5171",
    outcomes: [
      "Yes, COVID-19 was genetically engineered",
      "No, COVID-19 was not genetically engineered"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ scientific review board finds clear and convincing evidence that SARS-CoV-2 (COVID-19) was genetically engineered in a laboratory, including but not limited to intentional modification of viral genetic material that materially departs from known natural evolution.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ scientific review board did not find clear and convincing evidence that COVID-19 was genetically engineered, and natural or non-engineered origins remain more consistent with the available evidence.\n\nThis market will close February 20th, 2026 at 11:59 AM EDT and within three days of market close, the review board will resolve the market and author the case summary.\n\nFind out more about the WSJ scientific review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: 'mrna',
    title: "Do mRNA Vaccines Cause Turbo Cancer?",
    description: "Are mRNA COVID-19 vaccines causally linked to a new or markedly elevated risk of so-called 'turbo cancer' compared to not receiving them?",
    image: "/MRNATurboCancer.png",
    contractAddress: "0x2E26448da0740F3877cf9dDE6c179E396076B552",
    outcomes: [
      "Yes, mRNA vaccines cause turbo cancer",
      "No, mRNA vaccines do not cause turbo cancer"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ scientific review board finds clear and convincing evidence that receiving mRNA COVID-19 vaccines is causally associated with a substantially increased incidence of aggressive, rapidly developing cancers (\"turbo cancer\") relative to comparable unvaccinated or non‑mRNA‑vaccinated populations, after adjusting for reasonable confounders.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ scientific review board did not find clear and convincing evidence that mRNA COVID-19 vaccines cause an elevated rate of such cancers beyond what would be expected from background incidence and other factors.\n\nThis market will close February 20th, 2026 at 11:59 AM EDT and within three days of market close, the review board will resolve the market and author the case summary.\n\nFind out more about the WSJ scientific review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  },
  {
    id: '2020',
    title: "Was There Widespread Fraud in the 2020 Election?",
    description: "Did widespread, outcome-changing fraud occur in the 2020 U.S. presidential election?",
    image: "/TrumpEpstein.png",
    contractAddress: "0xbD486697125C4a2Be7B3BDb1A4428167C575dd7d",
    outcomes: [
      "Yes, there was widespread fraud in 2020",
      "No, there was not widespread fraud in 2020"
    ],
    rules: "The market will resolve \"Yes\" if the WSJ history review board finds clear and convincing evidence that widespread, outcome-changing fraud occurred in the 2020 U.S. presidential election—meaning fraudulent or invalid votes, or unlawful interference, were sufficient in scope to plausibly change the Electoral College outcome.\n\nOtherwise, the market will resolve \"No.\" This means the WSJ history review board did not find clear and convincing evidence of such widespread, outcome-changing fraud; isolated irregularities, local misconduct, or unproven allegations are not sufficient for a \"Yes\" resolution.\n\nThis market will close February 20th, 2026 at 11:59 AM EDT and within three days of market close, the review board will resolve the market and author the case summary.\n\nFind out more about the WSJ history review board <a href=\"/docs?tab=review-boards\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #2563eb; text-decoration: underline;\">here</a>."
  }
];

export function getMarketById(id: string): Market | undefined {
  return markets.find(market => market.id === id);
}

export const HOMEPAGE_FEATURED_MARKET_ID = "covid-lab-leak";

const HOMEPAGE_GRID_MARKET_IDS = [
  "glp1-blindness",
  "talarico-flu",
  "autism",
  "epstein-intelligence",
] as const;

export function getAllMarkets(): Market[] {
  return markets;
}

export function getHomepageMarkets(): Market[] {
  const featured = getMarketById(HOMEPAGE_FEATURED_MARKET_ID);
  const grid = HOMEPAGE_GRID_MARKET_IDS.map((id) => getMarketById(id)).filter(
    (market): market is Market => market !== undefined
  );
  return featured ? [featured, ...grid] : grid;
} 