export function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export function hash(slug: string) {
  return slug;
}

export function getTestUser() {
  return {
    email: 'test@email.com',
    password: 'asdf',
  }
}