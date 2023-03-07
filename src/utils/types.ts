export type CreateMediaParams = {
  name: string;
  type: string;
  url?: string;
  description: string;
  status: string;
};

export type UpdateMediaParams = {
  name?: string;
  type?: string;
  url?: string;
  description?: string;
  status?: string;
};
