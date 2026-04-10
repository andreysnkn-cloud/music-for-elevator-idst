export type Floor = {
  id: number;
  title: string;
  description: string;
  image: string;
  musicUrl: string;
};

export const channelUrl = 'https://t.me/musicforelevator';
export const bonusLink = 'https://music.yandex.ru/artist/6380387';
export const codeWord = 'ЛИФТЫ';

export const floors: Floor[] = [
  {
    id: 1,
    title: 'Этаж 1',
    description: 'Первый уровень. Здесь всё только начинается.',
    image: '/floors/floor-2.jpg',
    musicUrl: 'https://music.yandex.ru/artist/6380387',
  },
  {
    id: 2,
    title: 'Этаж 2',
    description: 'Добро пожаловать на второй этаж. Пространство начинает меняться.',
    image: '/floors/floor-2.jpg', // ← твоя новая картинка
    musicUrl: 'https://music.yandex.ru/artist/6380387',
  },
  {
    id: 3,
    title: 'Этаж 3',
    description: 'Третий этаж. Всё становится немного страннее.',
    image: '/floors/floor-2.jpg',
    musicUrl: 'https://music.yandex.ru/artist/6380387',
  },
  {
    id: 4,
    title: 'Этаж 4',
    description: 'Четвёртый этаж. Почти у цели.',
    image: '/floors/floor-2.jpg',
    musicUrl: 'https://music.yandex.ru/artist/6380387',
  },
  {
    id: 5,
    title: 'Этаж 5',
    description: 'Последний этаж. Дальше — только выше.',
    image: '/floors/floor-2.jpg',
    musicUrl: 'https://music.yandex.ru/artist/6380387',
  },
];
