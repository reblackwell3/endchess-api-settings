export class MistakesSettings {
  static MistakeType = {
    BLUNDER: 'BLUNDER',
    MISTAKE: 'MISTAKE',
    INACCURACY: 'INACCURACY',
  };
}

export type MistakesSettingsDto = {
  mistakeTypes?: string[];
};
