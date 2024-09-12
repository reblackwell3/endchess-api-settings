export class GamesSettings {
  static RatingCategory = {
    MASTER: 'MASTER',
    NEAR_RATING: 'NEAR_RATING',
  };
}

export type GamesSettingsDto = {
  ratingCategories?: string[];
};
