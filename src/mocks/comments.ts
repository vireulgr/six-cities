import { User } from './users';
import { getUser } from './users';
import { randomFromRange, getRandomArrayElement } from '../utils/common';

const ONEGIN = [
  [ "Я помню", "Не помню", "Забыть бы", "Купите", "Очкуешь",
  "Какое", "Угробил", "Хреново", "Открою", "Ты чуешь?", "Помыть бы" ],

  [ "чудное", "странное", "некое", "вкусное", "пьяное",
        "свинское", "чоткое", "сраное", "нужное", "конское"],

  [ "мгновенье", "затменье", "хотенье", "варенье", "творенье",
        "везенье", "рожденье", "смущенье", "печенье", "ученье"],

  [ "передо мной", "под косячком", "на кладбище", "в моих мечтах", "под скальпилем",
        "в моих штанах", "из-за угла", "в моих ушах", "в ночном горшке", "из головы"],

  [ "явилась ты", "добилась ты", "торчат кресты", "стихов листы",
        "забилась ты", "мои трусы", "поют дрозды", "из темноты", "помылась ты"],

  [ "мимолетное", "детородное", "психотропное", "кайфоломное",
        "очевидное", "у воробушков", "эдакое вот", "нам не чуждое", "благородное"],

  [ "виденье", "сиденье", "паренье", "сужденье", "вращенье",
        "сношенье", "смятенье", "теченье", "паденье", "сплетенье"],

  [ "гений", "сторож", "символ", "спарта",
        "правда", "ангел", "водка", "пиво", "ахтунг", "хопа"],

  [ "чистой", "вечной", "тухлой", "просит", "грязной",
        "липкой", "на хрен", "в пене", "женской", "жаждет"],

  [ "красоты", "мерзлоты", "суеты", "наркоты",
        "срамоты", "школоты", "типа ты", "простоты", "наготы"]
];

const TRASH = [
  [ "Приходит", "Влетает", "Въезжает" ],

  [ "учёный", "больной", "пикачу", "кот", "никто", "террорист",
        "сантехник", "динозавр", "мама", "менеджер"],

  [ "в офис", "в небытие", "в больницу", "драться", "в лабораторию",
        "на вызов", "в парк юрского периода",
        "на родительское собраине", "к кошке", "в метро"],

  [ "<<Я совершил открытие!>>", "<<Пика-пика!>>", "Мысленно <<привет, ничто!>>",
        "<<У меня болит голова>>", "<<Давай заведем котят>>", "<<Я мама Вовочки>>",
        "<<Я увольняюсь>>", "<<Аллах акбар>>", "<<Возьмите меня есть туристов>>",
        "<<Какой серьёзный засор>>"],

  [ "кошка отвечает", "учительница", "небытие ему в ответ",
        "доктор ему", "тут по громкоговорителю", "ученое сообщество",
        "в ответ слышит", "из трубы голос", "начальник ему", "бульбозавр на это"],

  [ "Ты не пикачу, ты сантехник.", "Я не доктор, я динозавр.",
        "Давай лучше мышат.", "Привет, ничтожество.",
        "Следующая станция бесконечная.", "Вы не мама, вы папа.",
        "Нам такие не нужны!", "Ты же на пенсию вышел...",
        "Ты новый Эйнштейн!", "Ну хочешь шутку расскажу."],

  [ "Энтропия нарастала...", "И уехал в Казахстан...",
        "Динозавр всё равно съел туристов.", "Держите зачётку.",
        "И все стали танцевать!", "Вот и сказочке конец!",
        "Так появилась вселенная...", "С тех пор это закон...",
        "И немедленно выпил!", ")))))" ]
];

const SPEECH =  [
  [
    "Товарищи!", "С другой стороны,", "Равным образом, ",
    "Не сделует, однако, забывать, что", "Таким образом,",
    "Повседневная практика показывает, что"
  ],
  [
    "реализация намеченных планов заданий", "Рамки и место обучения кадров",
    "постоянный количественный рост и сфера нашей активности",
    "сложившаяся структура организации", "новая модель организационной деятельности",
    "дальнейшее развитие форм деятельности"
  ],
  [
    "играет важную роль в формировании", "требует от нас анализа",
    "требует определения и уточнения", "Способствует подготовке и реализации",
    "обеспечивает широкому кругу специалистов участие в формировании",
    "позволяет выполнить важные задания по разработке"
  ],
  [
    "существенных финансовых и административных условий.",
    "дальнейшх направлений развития.", "системы массового участия.",
    "позиций, занимаемых участниками в отношении поставленных задач.",
    "новых предложений.", "направлений прогрессивного развития."
  ]
];

function generateSpeech() {
  const message = [];
  message.push(getRandomArrayElement(SPEECH[0]));
  message.push(getRandomArrayElement(SPEECH[1]));
  message.push(getRandomArrayElement(SPEECH[2]));
  message.push(getRandomArrayElement(SPEECH[3]));
  return message.join(' ');
}

function generateOnegin() {
  const message = [];
  message.push(getRandomArrayElement(ONEGIN[0]));
  message.push(getRandomArrayElement(ONEGIN[1]));
  message.push(getRandomArrayElement(ONEGIN[2]));
  message.push(':');
  message.push(getRandomArrayElement(ONEGIN[3]));
  message.push(getRandomArrayElement(ONEGIN[4]));
  message.push(', как');
  message.push(getRandomArrayElement(ONEGIN[5]));
  message.push(getRandomArrayElement(ONEGIN[6]));
  message.push(', как');
  message.push(getRandomArrayElement(ONEGIN[7]));
  message.push(getRandomArrayElement(ONEGIN[8]));
  message.push(getRandomArrayElement(ONEGIN[9]));
  return message.join(' ');
}

function generateTrashStory() {
  const message = [];
  message.push(getRandomArrayElement(TRASH[0]));
  message.push(getRandomArrayElement(TRASH[1]));
  message.push(getRandomArrayElement(TRASH[2]));
  message.push('и говорит:');
  message.push(getRandomArrayElement(TRASH[3]));
  message.push(', a');
  message.push(getRandomArrayElement(TRASH[4]));
  message.push(': ');
  message.push(getRandomArrayElement(TRASH[5]));
  message.push(getRandomArrayElement(TRASH[6]));
  return message.join(' ');
}


export type Comment = {
    id: string;
    date: string;
    user: User;
    comment: string;
    rating: number;

};

export const COMMENTS: Comment[] = [
  {
    id: "b67ddfd5-b953-4a30-8c8d-bd083cd6b62a",
    date: "2019-05-08T14:13:56.569Z",
    user: {
      name: "Oliver Conner",
      avatarUrl: "https://url-to-image/image.png",
      isPro: false
    },
    comment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    rating: 4
  }
];


function getComment(idSequence: () => string): Comment {
  const commentType = randomFromRange(0, 2);
  let message = '';
  switch (commentType) {
    case 0: message = generateTrashStory(); break;
    case 1: message = generateSpeech(); break;
    case 2:
    default:
      message = generateOnegin();
  }

  return {
    id: idSequence(),
    date: "2019-05-08T14:13:56.569Z",
    user: getUser(),
    comment: message,
    rating: randomFromRange(0, 5),
  };
}
