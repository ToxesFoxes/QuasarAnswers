export default {
  name: "ООП (старый)",
  json: [
    {
      "title": "Какой тип переменной используется в коде: int a = 5 *",
      "answers": [
        {
          "text": "Знаковое 32-бит целое",
          "valid": true,
        },
        {
          "text": "Знаковое 8-бит целое",
          "valid": false,
        },
        {
          "text": "1 байт",
          "valid": false,
        },
        {
          "text": "Знаковое 64-бит целое",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что делает оператор «%» *",
      "answers": [
        {
          "text": "Возвращает остаток от деления",
          "valid": true,
        },
        {
          "text": "Возвращает процент от суммы",
          "valid": false,
        },
        {
          "text": "Возвращает тригонометрическую функцию",
          "valid": false,
        },
        {
          "text": "Ни чего из выше перечисленного",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что сделает программа выполнив следующий код: Console.WriteLine(«Hello, World!») *",
      "answers": [
        {
          "text": "Напишет на новой строчке Hello, World!",
          "valid": true,
        },
        {
          "text": "Напишет Hello, World!",
          "valid": false,
        },
        {
          "text": "Удалит все значения с Hello, World!",
          "valid": false,
        },
        {
          "text": "Вырежет слово Hello, World! из всего текста",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как сделать инкрементацию числа *",
      "answers": [
        {
          "text": "!=",
          "valid": false,
        },
        {
          "text": "%%",
          "valid": false,
        },
        {
          "text": "- -",
          "valid": false,
        },
        {
          "text": "++",
          "valid": true,
        }
      ],
    },
    {
      "title": "Как сделать декрементацию числа *",
      "answers": [
        {
          "text": "- -",
          "valid": true,
        },
        {
          "text": "%%",
          "valid": false,
        },
        {
          "text": "!=",
          "valid": false,
        },
        {
          "text": "++",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как найти квадратный корень из числа x *",
      "answers": [
        {
          "text": "Math.Sqrt(x)",
          "valid": true,
        },
        {
          "text": "Summ.Koren(x)",
          "valid": false,
        },
        {
          "text": "Sqrt(x)",
          "valid": false,
        },
        {
          "text": "Arifmetic.sqrt",
          "valid": false,
        }
      ],
    },
    {
      "title": "Обозначения оператора «НЕ» *",
      "answers": [
        {
          "text": "No",
          "valid": false,
        },
        {
          "text": "Not",
          "valid": false,
        },
        {
          "text": "!",
          "valid": true,
        },
        {
          "text": "!=",
          "valid": false,
        }
      ],
    },
    {
      "title": "Обозначение оператора «ИЛИ» *",
      "answers": [
        {
          "text": "!",
          "valid": false,
        },
        {
          "text": "||",
          "valid": true,
        },
        {
          "text": "!=",
          "valid": false,
        },
        {
          "text": "Or",
          "valid": false,
        }
      ],
    },
    {
      "title": "Обозначение оператора «И» *",
      "answers": [
        {
          "text": "and",
          "valid": false,
        },
        {
          "text": "&amp;&amp;",
          "valid": true,
        },
        {
          "text": "&amp;",
          "valid": false,
        },
        {
          "text": "Все выше перечисленные",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чему будет равен с, если int a = 10; int b = 4; int c = a % b *",
      "answers": [
        {
          "text": "1",
          "valid": false,
        },
        {
          "text": "3",
          "valid": false,
        },
        {
          "text": "11",
          "valid": false,
        },
        {
          "text": "2",
          "valid": true,
        }
      ],
    },
    {
      "title": "Чему будет равен с, если int a = 10; int b = 4; bool c = (a == 10 &amp;&amp; b == 4) *",
      "answers": [
        {
          "text": "Null",
          "valid": false,
        },
        {
          "text": "True",
          "valid": true,
        },
        {
          "text": "14",
          "valid": false,
        },
        {
          "text": "False",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чему будет равен с, если int a = 0; int c = a--; *",
      "answers": [
        {
          "text": "-1",
          "valid": false,
        },
        {
          "text": "1",
          "valid": false,
        },
        {
          "text": "0",
          "valid": true,
        },
        {
          "text": "Null",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чему будет равен с, если int a = 0; int c =--a; *",
      "answers": [
        {
          "text": "-1",
          "valid": true,
        },
        {
          "text": "1",
          "valid": false,
        },
        {
          "text": "Null",
          "valid": false,
        },
        {
          "text": "0",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чему равен d, если int a = 0; int b = a++; int c = 0; int d = a + b + c + 3 *",
      "answers": [
        {
          "text": "4",
          "valid": true,
        },
        {
          "text": "True",
          "valid": false,
        },
        {
          "text": "False",
          "valid": false,
        },
        {
          "text": "3",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для чего нужны условные операторы *",
      "answers": [
        {
          "text": "Для ветвления программы",
          "valid": true,
        },
        {
          "text": "Чтобы были",
          "valid": false,
        },
        {
          "text": "Чтобы устанавливать условия пользователю",
          "valid": false,
        },
        {
          "text": "Для оптимизации программы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что вернет функция Termin после выполения. Код:int Termin(){int a = 1;int b = 3;if (a != 5) return a + b;else return 0;} *",
      "answers": [
        {
          "text": "3",
          "valid": false,
        },
        {
          "text": "4",
          "valid": true,
        },
        {
          "text": "0",
          "valid": false,
        },
        {
          "text": "5",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как называется оператор «?:» *",
      "answers": [
        {
          "text": "Вопросительный",
          "valid": false,
        },
        {
          "text": "Территориальный оператор",
          "valid": true,
        },
        {
          "text": "Прямой оператор",
          "valid": false,
        },
        {
          "text": "Тернарный оператор",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое массив *",
      "answers": [
        {
          "text": "Набор однотипных данных, которые располагаются в памяти последовательно друг за другом",
          "valid": false,
        },
        {
          "text": "Набор данных типа int (32-бит целое)",
          "valid": true,
        },
        {
          "text": "Переменная",
          "valid": false,
        },
        {
          "text": "Набор текстовых значений в формате Unicode, которые расположены в случайном порядке",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какие бывают массивы ? *",
      "answers": [
        {
          "text": "Одномерные и многомерные",
          "valid": true,
        },
        {
          "text": "Резиновые и статичные",
          "valid": false,
        },
        {
          "text": "Разнообразные",
          "valid": false,
        },
        {
          "text": "Сложные и простые",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое цикл и для чего они нужны *",
      "answers": [
        {
          "text": "Циклы нужны для многократного размещения данны\"",
          "valid": false,
        },
        {
          "text": "Циклы нужны для многократного выполнения кода",
          "valid": true,
        },
        {
          "text": "Циклы нужны для многократного запуска программы",
          "valid": false,
        },
        {
          "text": "Циклы нужны чтобы выполнить код без ошибок",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какие бывают циклы? *",
      "answers": [
        {
          "text": "for, while, do-while, foreach",
          "valid": true,
        },
        {
          "text": "Большие и маленькие",
          "valid": false,
        },
        {
          "text": "ref, out, static, root",
          "valid": false,
        },
        {
          "text": "Цикл, Форич, Двойной цикл, Многократный",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой оператор возвращает значение из метода ? *",
      "answers": [
        {
          "text": "veni",
          "valid": false,
        },
        {
          "text": "out",
          "valid": false,
        },
        {
          "text": "return",
          "valid": true,
        },
        {
          "text": "end",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое константа ? *",
      "answers": [
        {
          "text": "Переменная значение которой нельзя изменить",
          "valid": true,
        },
        {
          "text": "Переменная которая может быть изменена в любое время",
          "valid": false,
        },
        {
          "text": "Переменная типа string",
          "valid": false,
        },
        {
          "text": "Глобальная переменная",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что обозначает ключевое слово var ? *",
      "answers": [
        {
          "text": "Устраивает войну между программами",
          "valid": false,
        },
        {
          "text": "Обозначает что переменная без явного типа данных",
          "valid": true,
        },
        {
          "text": "Обозначает что переменная имеет явный тип данных",
          "valid": false,
        },
        {
          "text": "Такого слова нету в C#",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое Куча ? *",
      "answers": [
        {
          "text": "Область динамической памяти",
          "valid": true,
        },
        {
          "text": "Куча переменных",
          "valid": false,
        },
        {
          "text": "Это структура данных",
          "valid": false,
        },
        {
          "text": "Именованная область памяти",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как описывается вещественный тип: *",
      "answers": [
        {
          "text": "integer",
          "valid": false,
        },
        {
          "text": "double",
          "valid": true,
        },
        {
          "text": "int",
          "valid": false,
        },
        {
          "text": "char",
          "valid": false,
        }
      ],
    },
    {
      "title": "Oператор switch *",
      "answers": [
        {
          "text": "оператор перехода",
          "valid": false,
        },
        {
          "text": "оператор присваивания",
          "valid": false,
        },
        {
          "text": "условный оператор",
          "valid": false,
        },
        {
          "text": "оператор выбора",
          "valid": true,
        }
      ],
    },
    {
      "title": "Покажите оператор цикла *",
      "answers": [
        {
          "text": "goto",
          "valid": false,
        },
        {
          "text": "case",
          "valid": false,
        },
        {
          "text": "if",
          "valid": false,
        },
        {
          "text": "while .. do",
          "valid": true,
        }
      ],
    },
    {
      "title": "Укажите оператор вывода переменной “a”: *",
      "answers": [
        {
          "text": "Read (a)",
          "valid": false,
        },
        {
          "text": "Write (a)",
          "valid": true,
        },
        {
          "text": "Input a",
          "valid": false,
        },
        {
          "text": "Print a",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой элемент в Windows Forms используется для вывода рисунка или фото *",
      "answers": [
        {
          "text": "Label",
          "valid": false,
        },
        {
          "text": "Panel",
          "valid": false,
        },
        {
          "text": "PictureBox",
          "valid": true,
        },
        {
          "text": "CheckBox",
          "valid": false,
        }
      ],
    },
    {
      "title": "Ядро какой операционной системы использовалось в качестве базы для ОС Android? *",
      "answers": [
        {
          "text": "Linux",
          "valid": true,
        },
        {
          "text": "OS/2",
          "valid": false,
        },
        {
          "text": "Mac OS",
          "valid": false,
        },
        {
          "text": "Windows",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой движок баз данных используется в ОС Android? *",
      "answers": [
        {
          "text": "DBM",
          "valid": false,
        },
        {
          "text": "SQLite",
          "valid": true,
        },
        {
          "text": "InnoDB",
          "valid": false,
        },
        {
          "text": "MyISAM",
          "valid": false,
        }
      ],
    },
    {
      "title": "Элемент управления ListBox *",
      "answers": [
        {
          "text": "Простой список",
          "valid": true,
        },
        {
          "text": "Элемент выбора",
          "valid": false,
        },
        {
          "text": "Подсчет страниц",
          "valid": false,
        },
        {
          "text": "Управление листами",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как создать новую форму в Visual Studio *",
      "answers": [
        {
          "text": "Проект --Создать форму",
          "valid": false,
        },
        {
          "text": "Вид -- Добавить форму Windows",
          "valid": false,
        },
        {
          "text": "Построение -- Создать форму Windows",
          "valid": false,
        },
        {
          "text": "Проект -- Добавить форму Windows",
          "valid": true,
        }
      ],
    },
    {
      "title": "Использование элемента Button *",
      "answers": [
        {
          "text": "Элемент выбора",
          "valid": false,
        },
        {
          "text": "Элемент поиска",
          "valid": false,
        },
        {
          "text": "Вызов кнопки",
          "valid": false,
        },
        {
          "text": "Обработка нажатия Click",
          "valid": true,
        }
      ],
    },
    {
      "title": "Дать определение класса *",
      "answers": [
        {
          "text": "Класс представляет собой шаблон, по которому определяется форма объекта.",
          "valid": true,
        },
        {
          "text": "Создает объект",
          "valid": false,
        },
        {
          "text": "Выполняет оптимизацию объекта",
          "valid": false,
        },
        {
          "text": "для оптимизации загрузки системы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое TreeView? *",
      "answers": [
        {
          "text": "Визуальный элемент для описания графики",
          "valid": false,
        },
        {
          "text": "Элемент для обработки ошибок",
          "valid": false,
        },
        {
          "text": "TreeView представляет визуальный элемент в виде дерева. Дерево содержит узлы, которые представляют объекты TreeNode.",
          "valid": true,
        },
        {
          "text": "Элемент для вызова библиотек",
          "valid": false,
        }
      ],
    },
    {
      "title": "База данных - это: *",
      "answers": [
        {
          "text": "произвольный набор информации;",
          "valid": false,
        },
        {
          "text": "специальным образом организованная и хранящаяся на внешнем носителе совокупность взаимосвязанных данных о некотором объекте;",
          "valid": true,
        },
        {
          "text": "совокупность программ для хранения и обработки больших массивов информации;",
          "valid": false,
        },
        {
          "text": "интерфейс, поддерживающий наполнение и манипулирование данными;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какие элементы можно использовать при создании тестового редактора? *",
      "answers": [
        {
          "text": "Элементы ListBox, Label",
          "valid": false,
        },
        {
          "text": "Элементы Button, CheckBox",
          "valid": false,
        },
        {
          "text": "Элементы TextBox, RichTextBox",
          "valid": true,
        },
        {
          "text": "Любые элементы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для чего используется элемент CheckBox? *",
      "answers": [
        {
          "text": "Элемент CheckBox или флажок предназначен для установки одного из двух значений: отмечен или не отмечен.",
          "valid": true,
        },
        {
          "text": "Для выбора одного из нескольких значений",
          "valid": false,
        },
        {
          "text": "Для выбора всех значений",
          "valid": false,
        },
        {
          "text": "Определение события",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для чего используется элемент RadioButton? *",
      "answers": [
        {
          "text": "RadioButton или переключатель. Переключатели располагаются группами, и включение одного переключателя означает отключение всех остальных.",
          "valid": true,
        },
        {
          "text": "Для запуска Радио",
          "valid": false,
        },
        {
          "text": "Как обычная кнопка",
          "valid": false,
        },
        {
          "text": "Для отмены запуска",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что позволяет WebBrowser? *",
      "answers": [
        {
          "text": "Отображать картинки",
          "valid": false,
        },
        {
          "text": "Отслеживать события в Интернете",
          "valid": false,
        },
        {
          "text": "WebBrowser предоставляет функции интернет-браузера, позволяя загружать и отображать контент из сети интернет.",
          "valid": true,
        },
        {
          "text": "Исправлять ошибки в вебсайте",
          "valid": false,
        }
      ],
    },
    {
      "title": "Microsoft Visual Studio — Это? *",
      "answers": [
        {
          "text": "Для запуска программ написанных на Phyton",
          "valid": false,
        },
        {
          "text": "Для разработки программ написанных на Дельфи",
          "valid": false,
        },
        {
          "text": "Интегрированная среда разработки программного обеспечения",
          "valid": true,
        },
        {
          "text": "Пакет для программирования",
          "valid": false,
        }
      ],
    },
    {
      "title": "OpenFileDialog и SaveFileDialog в Windows Forms *",
      "answers": [
        {
          "text": "Элементы для поиска и обработки файла",
          "valid": false,
        },
        {
          "text": "Окна открытия и сохранения файла",
          "valid": true,
        },
        {
          "text": "Элементы защиты файлов",
          "valid": false,
        },
        {
          "text": "Открытие и сохранение директории",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для чего используются Метки и ссылки *",
      "answers": [
        {
          "text": "Как элементы ввода",
          "valid": false,
        },
        {
          "text": "Как элементы отображения",
          "valid": false,
        },
        {
          "text": "Как командные элементы управления",
          "valid": false,
        },
        {
          "text": "Label - Для отображения простого текста. LinkLabel - для вывода ссыло",
          "valid": true,
        }
      ],
    },
    {
      "title": "Для чего используется элемент DateTimePicker? *",
      "answers": [
        {
          "text": "Для определения системной даты",
          "valid": false,
        },
        {
          "text": "Для задания времени и даты компьютера",
          "valid": false,
        },
        {
          "text": "Для создания органайзера",
          "valid": false,
        },
        {
          "text": "DateTimePicker представляет раскрывающийся по нажатию календарь.",
          "valid": true,
        }
      ],
    },
    {
      "title": " MenuStrip в WindowsForm что это? *",
      "answers": [
        {
          "text": "Для создания контекстного меню в Windows Forms",
          "valid": false,
        },
        {
          "text": "Контейнер для создания собственных диалоговых окон",
          "valid": false,
        },
        {
          "text": "Диалоговое окно с предопределенным интерфейсом",
          "valid": false,
        },
        {
          "text": "Для создания главного меню в Windows Forms",
          "valid": true,
        }
      ],
    },
    {
      "title": "Элемент ProgressBar для чего используется? *",
      "answers": [
        {
          "text": "Для описания выполняемой задачи",
          "valid": false,
        },
        {
          "text": "Элемент дает пользователю информацию о ходе выполнения какой-либо задачи",
          "valid": true,
        },
        {
          "text": "Для отладки программы",
          "valid": false,
        },
        {
          "text": "Правильный вариант ответа отсутствует",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для чего предназначен TextBox? *",
      "answers": [
        {
          "text": "Для вывода текста",
          "valid": false,
        },
        {
          "text": "Для ввода и редактирования текста",
          "valid": true,
        },
        {
          "text": "Для текстовых сообщений",
          "valid": false,
        },
        {
          "text": "Для оповещения пользователя",
          "valid": false,
        }
      ],
    },
    {
      "title": "App Inventor для чего используется? *",
      "answers": [
        {
          "text": "конструктор приложений для Android",
          "valid": true,
        },
        {
          "text": "Для создания программ для Смартфонов",
          "valid": false,
        },
        {
          "text": "Программное обеспечение IOS Android",
          "valid": false,
        },
        {
          "text": "Адаптировать приложение к любой версии Android SDK",
          "valid": false,
        }
      ],
    }
  ]
} 