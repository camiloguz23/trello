interface Header {
  method: string;
  headers: {
    'Content-Type': string;
    Referer?: string;
  };
  body: string;
}
export const headerPost = (body: string): Header => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  };
};

export const headerPut = (body: string): Header => {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Referer: 'https://trello-theta-swart.vercel.app/'
    },
    body
  };
};
