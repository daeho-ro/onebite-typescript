// enum

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'John',
  role: Role.ADMIN, // 0: admin
  language: Language.korean,
};

const user2 = {
  name: 'Jane',
  role: Role.USER, // 1: user
  language: Language.english,
};

const user3 = {
  name: 'Doe',
  role: Role.GUEST, // 2: guest
};

console.log(user1, user2, user3);
