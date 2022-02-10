export interface UpdateAccessTokenRepository {
  updateAccessToken: (id: string, token: string | null) => Promise<void>;
}
