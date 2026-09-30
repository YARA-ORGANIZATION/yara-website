export interface DBInfoAggregatorSchema {
  stories: number;
  research_projects: number;
}

export interface DBInfoSitemapSchema {
  storySlugs: string[];
  researchProjectIDs: string[];
}
