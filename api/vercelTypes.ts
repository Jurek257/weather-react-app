export type VercelRequest = {
  query: Record<string, string | string[] | undefined>;
};

export type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};
