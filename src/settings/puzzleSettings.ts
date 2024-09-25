export class PuzzleSettings {
  static Difficulty = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
  };

  static FetchType = {
    RANDOM: 'RANDOM',
    // BY_ID: 'BY_ID',
  };

  static SolvedStatus = {
    UNSOLVED: 'UNSOLVED',
    SOLVED: 'SOLVED',
  };
}

export type PuzzleSettingsDto = {
  fetchType?: string;
  difficulties?: string[];
  solvedStatuses?: string[];
};

export type MoveFeedbackDto = {
  puzzleId: string;
  index: number;
  guess?: {
    sourceSquare: string;
    targetSquare: string;
    piece: string;
  };
  hintRequested?: boolean;
  isCorrect?: boolean;
  isFinished?: boolean;
};
