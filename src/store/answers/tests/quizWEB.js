export default {
  name: "WEB",
  json: [
    {
      "title": "Требуется задать цвет заголовка зелёным. Какое стилевое свойство подойдёт для этой цели?",
      "answers": [
        {
          "text": "color",
          "valid": true,
        },
        {
          "text": "font-color",
          "valid": false,
        },
        {
          "text": "font-family",
          "valid": false,
        },
        {
          "text": "text",
          "valid": false,
        },
        {
          "text": "font-size",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое стиль?",
      "answers": [
        {
          "text": "Набор правил форматирования элементов веб-страницы.",
          "valid": true,
        },
        {
          "text": "Способ сокращения HTML-кода за счёт переноса части данных в другой файл.",
          "valid": false,
        },
        {
          "text": "Язык разметки гипертекстовых документов.",
          "valid": false,
        },
        {
          "text": "Метод преобразований текстовых документов в HTML.",
          "valid": false,
        },
        {
          "text": "Технология, представляющая собой разные приёмы для вёрстки HTML-кода.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как расшифровывается аббревиатура CSS?",
      "answers": [
        {
          "text": "Cascading Style Sheets",
          "valid": true,
        },
        {
          "text": "Colorful Style Sheets",
          "valid": false,
        },
        {
          "text": "Computer Style Sheets",
          "valid": false,
        },
        {
          "text": "Creative Style Sheets",
          "valid": false,
        },
        {
          "text": "Common Style Sheets",
          "valid": false,
        }
      ],
    },
    {
      "title": "Сайт имеет более ста HTML-документов, имеющих одинаковое стилевое оформление. Какой способ подключения CSS подходит лучше всего?",
      "answers": [
        {
          "text": "Связанные стили.",
          "valid": true,
        },
        {
          "text": "Глобальные стили.",
          "valid": false,
        },
        {
          "text": "Блочные стили.",
          "valid": false,
        },
        {
          "text": "Внутренние стили.",
          "valid": false,
        },
        {
          "text": "Экспорт стиля.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой HTML-код применяется для подключения внешнего CSS-файла?",
      "answers": [
        {
          "text": "&lt;link rel=\"stylesheet\" href=\"mystyle.css\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;style&gt;mystyle.css&lt;/style&gt;",
          "valid": false,
        },
        {
          "text": "&lt;style&gt;@mystyle.css&lt;/style&gt;",
          "valid": false,
        },
        {
          "text": "&lt;link&gt;@import url(mystyle.css)&lt;/link&gt;",
          "valid": false,
        },
        {
          "text": "&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут используется для определения внутреннего стиля?",
      "answers": [
        {
          "text": "style",
          "valid": true,
        },
        {
          "text": "class",
          "valid": false,
        },
        {
          "text": "styles",
          "valid": false,
        },
        {
          "text": "font",
          "valid": false,
        },
        {
          "text": "link",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какую строку следует использовать в коде, чтобы сделать версию для печати сайта?",
      "answers": [
        {
          "text": "@import \"palm.css\" print;",
          "valid": true,
        },
        {
          "text": "&lt;link media=\"printer\" rel=\"stylesheet\" href=\"print.css\"&gt;",
          "valid": false,
        },
        {
          "text": "@import url(\"printer.css\") printer;",
          "valid": false,
        },
        {
          "text": "@media \"palm.css\" print;",
          "valid": false,
        },
        {
          "text": "&lt;style media=\"print\"&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "В какой момент подключается стиль для принтера?",
      "answers": [
        {
          "text": "Во время печати документа.",
          "valid": true,
        },
        {
          "text": "Сразу после загрузки страницы.",
          "valid": false,
        },
        {
          "text": "Как только браузер найдёт в коде подходящий стиль или ссылку на стилевой файл.",
          "valid": false,
        },
        {
          "text": "После обнаружения компьютером принтера.",
          "valid": false,
        },
        {
          "text": "После того, как принтер сообщит браузеру о своем наличии.",
          "valid": false,
        }
      ],
    },
    {
      "title": "В какой строке кода содержится ошибка?",
      "answers": [
        {
          "text": "p { color: green; color; }",
          "valid": true,
        },
        {
          "text": "p { text-align: center; color: #000000 }",
          "valid": false,
        },
        {
          "text": "div { color: red; font-size: 11pt; }",
          "valid": false,
        },
        {
          "text": "title { color: #fc0; margin: 10px; }",
          "valid": false,
        },
        {
          "text": "html { float: left; }",
          "valid": false,
        }
      ],
    },
    {
      "title": "В какой строке содержится корректный синтаксис?",
      "answers": [
        {
          "text": "body{color:black}",
          "valid": true,
        },
        {
          "text": "{body:color=black}",
          "valid": false,
        },
        {
          "text": "body:color=black",
          "valid": false,
        },
        {
          "text": "{body;color:black}",
          "valid": false,
        },
        {
          "text": "body{color=black}",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как правильно вставить комментарий в CSS-файл?",
      "answers": [
        {
          "text": "/* комментарий */",
          "valid": true,
        },
        {
          "text": "комментарий",
          "valid": false,
        },
        {
          "text": "// комментарий",
          "valid": false,
        },
        {
          "text": "// комментарий //",
          "valid": false,
        },
        {
          "text": "&lt;!-- комментарий --&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как добавить фоновый цвет ко всем элементам &lt;H1&gt;?",
      "answers": [
        {
          "text": "h1 { background-color: white }",
          "valid": true,
        },
        {
          "text": "h1.all { background-color: white }",
          "valid": false,
        },
        {
          "text": "h1:all { background-color: white }",
          "valid": false,
        },
        {
          "text": "h1[all] { background-color: white }",
          "valid": false,
        },
        {
          "text": "h1#all { background-color: white }",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как задать стиль у тега &lt;div class=\"iddqd\"&gt;DOOM&lt;/div&gt;?",
      "answers": [
        {
          "text": "div.iddqd { color: red; }",
          "valid": true,
        },
        {
          "text": "div[iddqd] { color: red; }",
          "valid": false,
        },
        {
          "text": "iddqd.div { color: red; }",
          "valid": false,
        },
        {
          "text": "div#iddqd { color: red; }",
          "valid": false,
        },
        {
          "text": "div=iddqd { color: red; }",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как корректно задать стиль для тега &lt;div&gt; с идентификатором loom?",
      "answers": [
        {
          "text": "#loom { font-size: bold; }",
          "valid": true,
        },
        {
          "text": "loom { font-size: bold; }",
          "valid": false,
        },
        {
          "text": "div { font-size: bold; }",
          "valid": false,
        },
        {
          "text": ".loom { font-size: bold; }",
          "valid": false,
        },
        {
          "text": "#loom# { font-size: bold; }",
          "valid": false,
        }
      ],
    },
    {
      "title": " Какие теги в данном коде являются соседними? Формула серной кислоты: <i>H<sub><small>2</small></sub>SO<sub><small>4</small></sub></i>",
      "answers": [
        {
          "text": "&lt;B&gt; и &lt;I&gt;",
          "valid": true,
        },
        {
          "text": "&lt;P&gt; и &lt;I&gt;",
          "valid": false,
        },
        {
          "text": "&lt;I&gt; и &lt;SUB&gt;",
          "valid": false,
        },
        {
          "text": "&lt;SUB&gt; и &lt;SMALL&gt;",
          "valid": false,
        },
        {
          "text": "&lt;I&gt; и &lt;SMALL&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Необходимо задать цвет фона у текстового поля. Какой стиль для этой цели подойдет?",
      "answers": [
        {
          "text": "INPUT[type=\"text\"] { background: #acdacc; }",
          "valid": true,
        },
        {
          "text": "INPUT[type=\"textinput\"] { background: #acdacc; }",
          "valid": false,
        },
        {
          "text": "INPUT[type=\"textfield\"] { background: #acdacc; }",
          "valid": false,
        },
        {
          "text": "INPUT[type=\"textarea\"] { background: #acdacc; }",
          "valid": false,
        },
        {
          "text": "INPUT[type=\"texts\"] { background: #acdacc; }",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой псевдоэлемент позволяет добавить текст в начало предложения?",
      "answers": [
        {
          "text": ":before",
          "valid": true,
        },
        {
          "text": ":after",
          "valid": false,
        },
        {
          "text": ":first-line",
          "valid": false,
        },
        {
          "text": ":first-text",
          "valid": false,
        },
        {
          "text": ":first-letter",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что делает следующий стиль? OL LI:first-letter {color: red; }",
      "answers": [
        {
          "text": "Изменяет цвет первой буквы элемента нумерованного списка.",
          "valid": true,
        },
        {
          "text": "Изменяет цвет первой буквы элемента маркированного списка.",
          "valid": false,
        },
        {
          "text": "Изменяет цвет первой строки в маркированном списке.",
          "valid": false,
        },
        {
          "text": "Изменяет цвет первой строки в нумерованном списке.",
          "valid": false,
        },
        {
          "text": "Изменяет цвет текста всего списка.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой селектор написан с ошибкой?",
      "answers": [
        {
          "text": "div:before:first-letter",
          "valid": true,
        },
        {
          "text": "p.new:before",
          "valid": false,
        },
        {
          "text": "abbr:first-line",
          "valid": false,
        },
        {
          "text": "p.new.back:after",
          "valid": false,
        },
        {
          "text": "a:hover:before",
          "valid": false,
        }
      ],
    },
    {
      "title": "first-line в CSS используется для",
      "answers": [
        {
          "text": "стилизации первой строки текста",
          "valid": true,
        },
        {
          "text": "задания стиля первого символа",
          "valid": false,
        },
        {
          "text": "выделения первого слова",
          "valid": false,
        },
        {
          "text": "для создания письма",
          "valid": false,
        },
        {
          "text": "для определения длины",
          "valid": false,
        }
      ],
    },
    {
      "title": "first-letter в CSS используется для",
      "answers": [
        {
          "text": "задания стиля первого символа",
          "valid": true,
        },
        {
          "text": "выделения первой строки текста",
          "valid": false,
        },
        {
          "text": "выделения первого слова",
          "valid": false,
        },
        {
          "text": "для создания письма",
          "valid": false,
        },
        {
          "text": "для выделения всего текста",
          "valid": false,
        }
      ],
    },
    {
      "title": "Особый вид свойств CSS, которые позволяют работать не над самим элементом, а над его отдельной частью-",
      "answers": [
        {
          "text": "Псевдоэлементы",
          "valid": true,
        },
        {
          "text": "Псевдоклассы",
          "valid": false,
        },
        {
          "text": "Классы",
          "valid": false,
        },
        {
          "text": "Атрибуты",
          "valid": false,
        },
        {
          "text": "Теги",
          "valid": false,
        }
      ],
    },
    {
      "title": "Стиль для ссылки которая становится активной, но переход по ней еще не совершен",
      "answers": [
        {
          "text": "active",
          "valid": true,
        },
        {
          "text": "lang",
          "valid": false,
        },
        {
          "text": "visited",
          "valid": false,
        },
        {
          "text": "content",
          "valid": false,
        },
        {
          "text": "link",
          "valid": false,
        }
      ],
    },
    {
      "title": "Стиль для посещённой ссылки-",
      "answers": [
        {
          "text": "visited",
          "valid": true,
        },
        {
          "text": "active",
          "valid": false,
        },
        {
          "text": "lang",
          "valid": false,
        },
        {
          "text": "content",
          "valid": false,
        },
        {
          "text": "link",
          "valid": false,
        }
      ],
    },
    {
      "title": "Особые свойства, которые позволяют менять стиль элемента в зависимости от действий пользователя, а так же положения этого элемента (тега) в общем потоке документа, что позволяет разбавить дизайн страницы некой динамикой и логикой.",
      "answers": [
        {
          "text": "Псевдоклассы",
          "valid": true,
        },
        {
          "text": "Псевдоэлементы",
          "valid": false,
        },
        {
          "text": "Классы",
          "valid": false,
        },
        {
          "text": "Атрибуты",
          "valid": false,
        },
        {
          "text": "Теги",
          "valid": false,
        }
      ],
    },
    {
      "title": "Определяет размер интервала между буквами-",
      "answers": [
        {
          "text": "letter-spacing",
          "valid": true,
        },
        {
          "text": "text-align",
          "valid": false,
        },
        {
          "text": "text-decoration",
          "valid": false,
        },
        {
          "text": "white-space",
          "valid": false,
        },
        {
          "text": "direction ",
          "valid": false,
        }
      ],
    },
    {
      "title": "Определяет расстояние между словами-",
      "answers": [
        {
          "text": "word-spacing",
          "valid": true,
        },
        {
          "text": "text-indent",
          "valid": false,
        },
        {
          "text": "text-transform",
          "valid": false,
        },
        {
          "text": "vertical-align",
          "valid": false,
        },
        {
          "text": "white-space",
          "valid": false,
        }
      ],
    },
    {
      "title": "Правильный способ указания цвета в CSS-",
      "answers": [
        {
          "text": "#71C354",
          "valid": true,
        },
        {
          "text": "43#54",
          "valid": false,
        },
        {
          "text": "54321#",
          "valid": false,
        },
        {
          "text": "Rgb (54321#)",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Значение transparent:",
      "answers": [
        {
          "text": "Устанавливает прозрачный цвет.",
          "valid": true,
        },
        {
          "text": "Устанавливает цвет текста элемента.",
          "valid": false,
        },
        {
          "text": "Определяет, где будет отображаться заголовок таблицы: над ней или под ней.",
          "valid": false,
        },
        {
          "text": "Применяется для того, чтобы вставить текст или изображение до или после какого-либо элемента. ",
          "valid": false,
        },
        {
          "text": "Определяет вид открывающей и закрывающей кавычки в тексте.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Свойство padding-top определяет пространство между:",
      "answers": [
        {
          "text": "Верхней границей и содержимым элемента",
          "valid": true,
        },
        {
          "text": "Правой границей и содержимым элемента.",
          "valid": false,
        },
        {
          "text": "Содержимым элемента и левой границей.",
          "valid": false,
        },
        {
          "text": "Содержимым элемента и нижней границей.",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Свойство margin:",
      "answers": [
        {
          "text": " Определяет пространство между границами элемента и окружающими элементами.",
          "valid": true,
        },
        {
          "text": " Определяет пространство между границами элемента и его содержимым.",
          "valid": false,
        },
        {
          "text": " Определяет раздмер границ элемента.",
          "valid": false,
        },
        {
          "text": " Определяет пространство между содержимым элемента и окружающими элементами.",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как применить один стиль к нескольким селекторам?",
      "answers": [
        {
          "text": "Перечислить селекторы через запятую.",
          "valid": true,
        },
        {
          "text": "Перечислить селекторы через точку.",
          "valid": false,
        },
        {
          "text": "Перечислить селекторы через точку запятую.",
          "valid": false,
        },
        {
          "text": "Перечислить селекторы через двоеточие.",
          "valid": false,
        },
        {
          "text": "Перечислить селекторы через тире.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Описание селектора ID:",
      "answers": [
        {
          "text": " #ID {свойство:значение;}",
          "valid": true,
        },
        {
          "text": "ID# {свойство:значение;}",
          "valid": false,
        },
        {
          "text": "# {свойство:значение;}",
          "valid": false,
        },
        {
          "text": "ID {свойство:значение;}",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое HTML селекторы?",
      "answers": [
        {
          "text": "В качестве селектора мы используем имя того html-элемента, который хотим изменить.",
          "valid": true,
        },
        {
          "text": "В качестве селектора мы используем атрибут, который хотим изменить.",
          "valid": false,
        },
        {
          "text": "В качестве селектора мы используем тег, который хотим изменить.",
          "valid": false,
        },
        {
          "text": "В качестве селектора мы используем имя класса, который хотим изменить.",
          "valid": false,
        },
        {
          "text": "В качестве селектора мы используем ID, который хотим изменить.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Правило селектора класса:",
      "answers": [
        {
          "text": ".класс {свойство:значение;}",
          "valid": true,
        },
        {
          "text": "#класс {свойство:значение;}",
          "valid": false,
        },
        {
          "text": "класс {свойство:значение;}",
          "valid": false,
        },
        {
          "text": "(класс) {свойство:значение;})",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Специальные указатели на HTML-объекты, к которым мы планируем применить css-правило.",
      "answers": [
        {
          "text": "Селекторы",
          "valid": true,
        },
        {
          "text": "Текстовые блоки",
          "valid": false,
        },
        {
          "text": "Гиперссылки",
          "valid": false,
        },
        {
          "text": "Объекты",
          "valid": false,
        },
        {
          "text": "Списки",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что выполняет атрибут rel?",
      "answers": [
        {
          "text": "Определяет отношения между текущим документом и файлом, на который делается ссылка.",
          "valid": true,
        },
        {
          "text": "определяющий пространство (отступы) вокруг элемента, к которому применён.",
          "valid": false,
        },
        {
          "text": "определяющий расстояние между границей элемента и его содержимым. ",
          "valid": false,
        },
        {
          "text": "определяющий положение изображения. ",
          "valid": false,
        },
        {
          "text": "регулирующий прозрачность изображения.",
          "valid": false,
        }
      ],
    },
    {
      "title": "CSS отвечает за",
      "answers": [
        {
          "text": "оформление и внешний вид",
          "valid": true,
        },
        {
          "text": "распределение объектов и текста на веб-страницах. ",
          "valid": false,
        },
        {
          "text": "написания сценариев, которые выполняются на серверах при каждом обновлении страницы сайта.",
          "valid": false,
        },
        {
          "text": "созданный для «оживления и придания динамичности» веб-сайтам.",
          "valid": false,
        },
        {
          "text": "расширенные возможности работы с текстом.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Укажите вариант, в котором правильно определён обработчик формы:",
      "answers": [
        {
          "text": "&lt;FORM method=\"get\" action=\"shop.php\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;FORM method=\"put\" action=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM method=\"post\" active=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM method=\"get\" active=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM method=\"post\" &gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Укажите правильный вариант определения изображения в качестве гиперссылки",
      "answers": [
        {
          "text": "&lt;A HREF=\"http://www.intuit.ru/\"&gt; &lt;IMG SRC=\"image.gif\"&gt;&lt;/A&gt;",
          "valid": true,
        },
        {
          "text": "&lt;A HREF=\"image.gif\"&gt;&lt;/A&gt;",
          "valid": false,
        },
        {
          "text": "&lt;A HREF=\"http://www.intuit.ru/\"&gt; &lt;IMG=\"image.gif\"&gt;&lt;/A&gt;",
          "valid": false,
        },
        {
          "text": "&lt;A HREF=http://www.intuit.ru/&gt; &lt;IMG=\"image.gif\"&gt;&lt;/A&gt;",
          "valid": false,
        },
        {
          "text": "&lt;A HREF=\"http://www.intuit.ru/\"&gt; &lt;IMG=image.gif&gt;&lt;/A&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как описывается скрытое поле в форме",
      "answers": [
        {
          "text": "&lt;input type=\"hidden\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=\"hid\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"h\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"hiddens\"&gt;",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как описываются флажки (галочки в квадратиках) в форме",
      "answers": [
        {
          "text": "&lt;input type=\"checkbox\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=\"box\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"chbox\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"c_box\"&gt;",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как описываются радиокнопки в форме",
      "answers": [
        {
          "text": "&lt;input type=\"radio\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=\"r\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"radiobutton\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"radio_button\"&gt;",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как описывается кнопка отправки в форме",
      "answers": [
        {
          "text": "&lt;input type=\"submit\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=\"submito\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"s_mit\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"sub_mit\"&gt;",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Многострочный текст вводится в тег",
      "answers": [
        {
          "text": "&lt;textarea&gt;…..&lt;/textarea&gt; ",
          "valid": true,
        },
        {
          "text": "&lt;text&gt;…..&lt;/texta&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;area&gt;…..&lt;/area&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;txtarea&gt;…..&lt;/txtarea&gt; ",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Выпадающий список осуществляется через",
      "answers": [
        {
          "text": "&lt;select&gt;",
          "valid": true,
        },
        {
          "text": "&lt;s&gt;",
          "valid": false,
        },
        {
          "text": "&lt;sel&gt;",
          "valid": false,
        },
        {
          "text": "&lt;get&gt;",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "В выпадающим списке множественный выбор осуществляется с помощью атрибута",
      "answers": [
        {
          "text": "multiple",
          "valid": true,
        },
        {
          "text": "many",
          "valid": false,
        },
        {
          "text": "set",
          "valid": false,
        },
        {
          "text": "compexity",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тег &lt;em&gt; используется для",
      "answers": [
        {
          "text": "задания курсивного шрифта",
          "valid": true,
        },
        {
          "text": "задания моноширинного шрифта",
          "valid": false,
        },
        {
          "text": "уменьшения шрифта",
          "valid": false,
        },
        {
          "text": "зачеркивания шрифта",
          "valid": false,
        },
        {
          "text": "подчеркивания шрифта",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тег &lt;sub&gt; используется для",
      "answers": [
        {
          "text": "задания нижнего индекса",
          "valid": true,
        },
        {
          "text": "задания верхнего индекса",
          "valid": false,
        },
        {
          "text": "уменьшения шрифта",
          "valid": false,
        },
        {
          "text": "зачеркивания шрифта",
          "valid": false,
        },
        {
          "text": "подчеркивания шрифта",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тег &lt;sup&gt; используется для",
      "answers": [
        {
          "text": "задания верхнего индекса",
          "valid": true,
        },
        {
          "text": "задания нижнего индекса",
          "valid": false,
        },
        {
          "text": "уменьшения шрифта",
          "valid": false,
        },
        {
          "text": "зачеркивания шрифта",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "colspan используется для",
      "answers": [
        {
          "text": "объединения столбцов",
          "valid": true,
        },
        {
          "text": "объединения строк",
          "valid": false,
        },
        {
          "text": "подсчета количества строк",
          "valid": false,
        },
        {
          "text": "подсчета количества столбцов",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "rowspan используется для",
      "answers": [
        {
          "text": "объединения строк",
          "valid": true,
        },
        {
          "text": "объединения столбцов",
          "valid": false,
        },
        {
          "text": "подсчета количества столбцов",
          "valid": false,
        },
        {
          "text": "подсчета количества строк",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "В каком случае форма будет отправлена методом \"post\"?",
      "answers": [
        {
          "text": "&lt;FORM method=\"post\" action=\"shop.php\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;FORM method=\"get\" action=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM method=\"default\" action=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM action=\"shop.php\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM method=\"default\" &gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов создает неотображаемый элемент в форме?",
      "answers": [
        {
          "text": "&lt;INPUT TYPE=HIDDEN NAME=a1 VALUE=1&gt;",
          "valid": true,
        },
        {
          "text": "&lt;INPUT TYPE=button NAME=a1 VALUE=1&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT HIDDEN NAME=a1 VALUE=1&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT NAME=HIDDEN TYPE=a1 VALUE=1&gt;",
          "valid": false,
        },
        {
          "text": "&lt;HIDDEN NAME=a1 VALUE=1&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой тег используются для создания текстовых полей ввода в форме?",
      "answers": [
        {
          "text": "&lt;INPUT TYPE=text&gt;",
          "valid": true,
        },
        {
          "text": "&lt;SELECT&gt;",
          "valid": false,
        },
        {
          "text": "&lt;OPTION&gt;",
          "valid": false,
        },
        {
          "text": "&lt;SELECT type=text&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TEXT&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой тег используются для создания многострочный текстовых полей ввода в форме?",
      "answers": [
        {
          "text": "&lt;TEXTAREA&gt;",
          "valid": true,
        },
        {
          "text": "&lt;INPUT TYPE=text &gt;",
          "valid": false,
        },
        {
          "text": "&lt;OPTION&gt;",
          "valid": false,
        },
        {
          "text": "&lt;SELECT type=text&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TEXT&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из перечисленных элементов формы является необходимым для передачи формы на сервер?",
      "answers": [
        {
          "text": "&lt;INPUT TYPE=submit NAME=a1&gt;",
          "valid": true,
        },
        {
          "text": "&lt;TEXTAREA NAME=a1&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=text NAME=a1&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=reset&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TEXT NAME=a1&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных фрагментов кода создает переключатель?",
      "answers": [
        {
          "text": "&lt;input type=radio name=a1 value=1&gt;&lt;input type=radio name=a1 value=2&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=checkbox name=a1 value=1&gt;&lt;input type=checkbox name=a1 value=2&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;input type=radiobutton name=a1 value=1&gt;&lt;input type=radiobutton name=a1 value=2&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;input type=checkbutton name=a1 value=1&gt;&lt;input type=checkbutton name=a1 value=2&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;input type=text name=a1 value=2&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов позволяет создавать элементы с возможностью выбора нескольких вариантов одновременно?",
      "answers": [
        {
          "text": "&lt;SELECT&gt;",
          "valid": true,
        },
        {
          "text": "&lt;RADIO&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=RADIO&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM TYPE=select&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=CHECK&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов позволяет создавать элементы с возможностью выбора нескольких вариантов одновременно?",
      "answers": [
        {
          "text": "&lt;INPUT TYPE=CHECKBOX&gt;",
          "valid": true,
        },
        {
          "text": "&lt;RADIO&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=RADIO&gt;",
          "valid": false,
        },
        {
          "text": "&lt;FORM TYPE=select&gt;",
          "valid": false,
        },
        {
          "text": "&lt;INPUT TYPE=CHECK&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "С помощью какого контейнера задается форма?",
      "answers": [
        {
          "text": "&lt;FORM&gt;",
          "valid": true,
        },
        {
          "text": "&lt;INPUT&gt;",
          "valid": false,
        },
        {
          "text": "&lt;SELECT&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TYPE&gt;",
          "valid": false,
        },
        {
          "text": "&lt;RADIO&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "С помощью какого элемента можно создавать прокручивающиеся списки в формах?",
      "answers": [
        {
          "text": "SELECT",
          "valid": true,
        },
        {
          "text": "CHECKBOX",
          "valid": false,
        },
        {
          "text": "TEXTAREA",
          "valid": false,
        },
        {
          "text": "INPUT",
          "valid": false,
        },
        {
          "text": "RADIO",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут элемента INPUT отвечает за вид элемента ввода формы?",
      "answers": [
        {
          "text": "TYPE",
          "valid": true,
        },
        {
          "text": "CLASS",
          "valid": false,
        },
        {
          "text": "STYLE",
          "valid": false,
        },
        {
          "text": "FONT",
          "valid": false,
        },
        {
          "text": "ATRIBUTE",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут элемента FORM определяет список кодировок для вводимых данных?",
      "answers": [
        {
          "text": "accept-charset",
          "valid": true,
        },
        {
          "text": "enctype-charset",
          "valid": false,
        },
        {
          "text": "alt",
          "valid": false,
        },
        {
          "text": "charset",
          "valid": false,
        },
        {
          "text": "accept",
          "valid": false,
        }
      ],
    },
    {
      "title": "С помощью какого атрибута элемента FORM указывается адрес, куда отправлять данные формы?",
      "answers": [
        {
          "text": "ACTION",
          "valid": true,
        },
        {
          "text": "HREF",
          "valid": false,
        },
        {
          "text": "LOCATION",
          "valid": false,
        },
        {
          "text": "TARGET",
          "valid": false,
        },
        {
          "text": "GET",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут из перечисленных принадлежит тегу INPUT",
      "answers": [
        {
          "text": "type",
          "valid": true,
        },
        {
          "text": "write",
          "valid": false,
        },
        {
          "text": "href",
          "valid": false,
        },
        {
          "text": "action",
          "valid": false,
        },
        {
          "text": "frame",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из предложенных методов можно применять для отправки формы?",
      "answers": [
        {
          "text": "GET",
          "valid": true,
        },
        {
          "text": "HEAD",
          "valid": false,
        },
        {
          "text": "MAILTO",
          "valid": false,
        },
        {
          "text": "SET",
          "valid": false,
        },
        {
          "text": "GOTO",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из предложенных методов можно применять для отправки формы?",
      "answers": [
        {
          "text": "POST",
          "valid": true,
        },
        {
          "text": "HEAD",
          "valid": false,
        },
        {
          "text": "MAILTO",
          "valid": false,
        },
        {
          "text": "SET",
          "valid": false,
        },
        {
          "text": "GOTO",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как указать выравнивание текста в ячейке таблицы?",
      "answers": [
        {
          "text": "text-align",
          "valid": true,
        },
        {
          "text": "vertical-align",
          "valid": false,
        },
        {
          "text": "justify-content",
          "valid": false,
        },
        {
          "text": "align-self",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как указать выравнивание текста в ячейке таблицы?",
      "answers": [
        {
          "text": "vertical-align",
          "valid": true,
        },
        {
          "text": "text-align",
          "valid": false,
        },
        {
          "text": "justify-content",
          "valid": false,
        },
        {
          "text": "align-self",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "В каком примере корректно описан элемент TR?",
      "answers": [
        {
          "text": "&lt;TR&gt;&lt;TD&gt;ячейка1&lt;/TD&gt;&lt;/TR&gt;",
          "valid": true,
        },
        {
          "text": "&lt;TR&gt;&lt;TD&gt;ячейка1&lt;/TR&gt;&lt;/TD&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TD&gt;&lt;TR&gt;ячейка1&lt;/TR&gt;ячейка2&lt;/TD&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TR&gt;&lt;TR&gt;ячейка1&lt;/TR&gt; ячейка2&lt;/TD&gt;",
          "valid": false,
        },
        {
          "text": "&lt;TR&gt;&lt;TD&gt;ячейка1&lt;/TR&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что определяет свойство BACKGROUND у элемента разметки TABLE?",
      "answers": [
        {
          "text": "фоновое изображение",
          "valid": true,
        },
        {
          "text": "расстояние между ячейками",
          "valid": false,
        },
        {
          "text": "расстояние от содержания до границы ячейки",
          "valid": false,
        },
        {
          "text": "ширину ячейки",
          "valid": false,
        },
        {
          "text": "вид границы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что определяет свойство PADDING у элемента разметки TD?",
      "answers": [
        {
          "text": "расстояние от содержимого до границы ячейки",
          "valid": true,
        },
        {
          "text": "расстояние между ячейками",
          "valid": false,
        },
        {
          "text": "ширину ячейки",
          "valid": false,
        },
        {
          "text": "ширину границы",
          "valid": false,
        },
        {
          "text": "ширину таблицы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой свойство тега &lt;IMG&gt; задает горизонтальное расстояние между вертикальной границей страницы и изображением?",
      "answers": [
        {
          "text": "margin-left",
          "valid": true,
        },
        {
          "text": "margin-top",
          "valid": false,
        },
        {
          "text": "left",
          "valid": false,
        },
        {
          "text": "right",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут тега &lt;IMG&gt; указывает файл изображения и путь к нему?",
      "answers": [
        {
          "text": "SRC ",
          "valid": true,
        },
        {
          "text": "ALT",
          "valid": false,
        },
        {
          "text": "ALIGN",
          "valid": false,
        },
        {
          "text": "SIZE",
          "valid": false,
        },
        {
          "text": "HREF",
          "valid": false,
        }
      ],
    },
    {
      "title": "Выберите корректный пример вставки изображения в HTML-документ",
      "answers": [
        {
          "text": "&lt;IMG SRC=\"1.gif\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;BODY BACKIMAGE=\"1.gif\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;A HREF=\"1.gif\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;BODY BACKGROUNDIMAGE=\"1.gif\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;IMG href=\"1.gif\"&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?",
      "answers": [
        {
          "text": "P",
          "valid": true,
        },
        {
          "text": "NOBR",
          "valid": false,
        },
        {
          "text": "HEAD",
          "valid": false,
        },
        {
          "text": "PP",
          "valid": false,
        },
        {
          "text": "BODY",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?",
      "answers": [
        {
          "text": "BR",
          "valid": true,
        },
        {
          "text": "NOBR",
          "valid": false,
        },
        {
          "text": "PP",
          "valid": false,
        },
        {
          "text": "BODY",
          "valid": false,
        },
        {
          "text": "HEAD",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов HTML начинает вывод текста с новой строки на странице?",
      "answers": [
        {
          "text": "H1",
          "valid": true,
        },
        {
          "text": "NOBR",
          "valid": false,
        },
        {
          "text": "HEAD",
          "valid": false,
        },
        {
          "text": "PP",
          "valid": false,
        },
        {
          "text": "BODY",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой свойство позволяет изменять цвет текста?",
      "answers": [
        {
          "text": "color",
          "valid": true,
        },
        {
          "text": "textcolor",
          "valid": false,
        },
        {
          "text": "text",
          "valid": false,
        },
        {
          "text": "alink",
          "valid": false,
        },
        {
          "text": "vlink",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из приведенных тегов позволяет создавать нумерованные списки?",
      "answers": [
        {
          "text": "OL ",
          "valid": true,
        },
        {
          "text": "DL",
          "valid": false,
        },
        {
          "text": "UL",
          "valid": false,
        },
        {
          "text": "TD",
          "valid": false,
        },
        {
          "text": "DT",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой атрибут принадлежит тегу &lt;AREA&gt;?",
      "answers": [
        {
          "text": "SHAPE",
          "valid": true,
        },
        {
          "text": "CIRCLE",
          "valid": false,
        },
        {
          "text": "SRC",
          "valid": false,
        },
        {
          "text": "HREF",
          "valid": false,
        },
        {
          "text": "IMG",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какописывается поле ввода пароля в форме",
      "answers": [
        {
          "text": "&lt;input type=\"password\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;input type=\"pass\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"encrypted\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"enc\"&gt;",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой из перечисленных тегов непригоден для описания PHP кода?",
      "answers": [
        {
          "text": "&lt;! !&gt;",
          "valid": true,
        },
        {
          "text": "&lt;?php",
          "valid": false,
        },
        {
          "text": "&lt;? ?&gt;",
          "valid": false,
        },
        {
          "text": "&lt;?= ?&gt;",
          "valid": false,
        },
        {
          "text": "&lt;?php ?&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Вывод на экран в PHP",
      "answers": [
        {
          "text": "echo \"Выводимая информация\";",
          "valid": true,
        },
        {
          "text": "writeln(\"Выводимая информация\");",
          "valid": false,
        },
        {
          "text": "writeln(Выводимая информация);",
          "valid": false,
        },
        {
          "text": "output(Выводимая информация);",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как пишется цикл от 1 до n в PHP",
      "answers": [
        {
          "text": "for ($i=1;$i&lt;=$n; $i++) {}",
          "valid": true,
        },
        {
          "text": "for ($i=1,$i&lt;=$n, $i++) {}",
          "valid": false,
        },
        {
          "text": "for ($i:=1;$i&lt;=$n; $i++) {}",
          "valid": false,
        },
        {
          "text": "for (i=1;i&lt;=n; i++) {}",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какое условие написано в PHP правильно",
      "answers": [
        {
          "text": "if ($a==5) {}",
          "valid": true,
        },
        {
          "text": "if (a==5) {}",
          "valid": false,
        },
        {
          "text": "if $a = 5 {}",
          "valid": false,
        },
        {
          "text": "if a == 5 {}",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Получение значения параметра по методу GET определяется как",
      "answers": [
        {
          "text": "$a=$_GET['parametr'];",
          "valid": true,
        },
        {
          "text": "$a=_GET['parametr'];",
          "valid": false,
        },
        {
          "text": "a=_GET['parametr'];",
          "valid": false,
        },
        {
          "text": "$a=$GET['parametr'];",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Получение значения параметра по методу POST определяется как",
      "answers": [
        {
          "text": "$a=$_POST['parametr'];",
          "valid": true,
        },
        {
          "text": "$a=$_POST['parametr'];",
          "valid": false,
        },
        {
          "text": "$a=$_POST['parametr'];",
          "valid": false,
        },
        {
          "text": "$a=$_POST['parametr'];",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конфигурационный файл PHP",
      "answers": [
        {
          "text": "php.ini",
          "valid": true,
        },
        {
          "text": "php.php",
          "valid": false,
        },
        {
          "text": "php.cfg",
          "valid": false,
        },
        {
          "text": "php.con",
          "valid": false,
        },
        {
          "text": "php.bat",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конфигурационный файл Apache",
      "answers": [
        {
          "text": "httpd.conf",
          "valid": true,
        },
        {
          "text": "httpd.ini",
          "valid": false,
        },
        {
          "text": "httpd.cfg",
          "valid": false,
        },
        {
          "text": "httpd.con",
          "valid": false,
        },
        {
          "text": "httpd.cfg",
          "valid": false,
        }
      ],
    },
    {
      "title": "Строковый комментарии в PHP начинается с",
      "answers": [
        {
          "text": "//",
          "valid": true,
        },
        {
          "text": "/*……….. */",
          "valid": false,
        },
        {
          "text": "///",
          "valid": false,
        },
        {
          "text": "//*",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Многострочный комментарии в PHP описывается",
      "answers": [
        {
          "text": "/*……….. */",
          "valid": true,
        },
        {
          "text": "//",
          "valid": false,
        },
        {
          "text": "///",
          "valid": false,
        },
        {
          "text": "//* …….*//",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Определение константы",
      "answers": [
        {
          "text": "define(\"a\",\"5\");",
          "valid": true,
        },
        {
          "text": "declare(\"a\",\"5\");",
          "valid": false,
        },
        {
          "text": "var(\"a\",\"5\");",
          "valid": false,
        },
        {
          "text": "const(\"a\",\"5\");",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Пусть $a=10. Чему равно $a после операции $a+=15",
      "answers": [
        {
          "text": "25",
          "valid": true,
        },
        {
          "text": "5",
          "valid": false,
        },
        {
          "text": "15",
          "valid": false,
        },
        {
          "text": "10",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для удаления переменной $x используется",
      "answers": [
        {
          "text": "unset($x);",
          "valid": true,
        },
        {
          "text": "delete($x);",
          "valid": false,
        },
        {
          "text": "remove($x);",
          "valid": false,
        },
        {
          "text": "unlink($x);",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает X%Y",
      "answers": [
        {
          "text": "остаток от деления X на Y",
          "valid": true,
        },
        {
          "text": "процент Y от X",
          "valid": false,
        },
        {
          "text": "деление X на Y",
          "valid": false,
        },
        {
          "text": "двойное деление X на Y",
          "valid": false,
        },
        {
          "text": " Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая из программ на языке PHP написана правильно:",
      "answers": [
        {
          "text": "$a = 2; $b=3; $c= $a+$b;",
          "valid": true,
        },
        {
          "text": "$a := 2; $b:=3; $c:= $a+$b;",
          "valid": false,
        },
        {
          "text": "a = 2; b=3; c= a+b;",
          "valid": false,
        },
        {
          "text": "a := 2; b:=3; c:= a+b;",
          "valid": false,
        },
        {
          "text": "a =: 2; b=:3; c=: a+b;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает на языке PHP следующая запись $a+=$b:",
      "answers": [
        {
          "text": "$a=$a+$b;",
          "valid": true,
        },
        {
          "text": "$a=$b+1;",
          "valid": false,
        },
        {
          "text": "$b=$a+1;",
          "valid": false,
        },
        {
          "text": "$b=$b+$a;",
          "valid": false,
        },
        {
          "text": "$b=$b+$a+1;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает на языке PHP оператор !=",
      "answers": [
        {
          "text": "не равно",
          "valid": true,
        },
        {
          "text": "может быть равно",
          "valid": false,
        },
        {
          "text": "внимание может ошибка в равенстве",
          "valid": false,
        },
        {
          "text": "больше или равно",
          "valid": false,
        },
        {
          "text": "меньше или равно",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что будет зраниться в переменной $res в результате PHP-операций $res=$s.$n, если $s=\"PHP\"; $n=7;:",
      "answers": [
        {
          "text": "PHP7",
          "valid": true,
        },
        {
          "text": "PHP+7",
          "valid": false,
        },
        {
          "text": "PHP.7",
          "valid": false,
        },
        {
          "text": "PHP,7",
          "valid": false,
        },
        {
          "text": "PHP",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой командой на языке PHP осуществляется прерывание цикла:",
      "answers": [
        {
          "text": "break;",
          "valid": true,
        },
        {
          "text": "exit;",
          "valid": false,
        },
        {
          "text": "output;",
          "valid": false,
        },
        {
          "text": "return;",
          "valid": false,
        },
        {
          "text": "fault;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает на языке PHP return $s:",
      "answers": [
        {
          "text": "возвращает значение s",
          "valid": true,
        },
        {
          "text": "переход к метки s",
          "valid": false,
        },
        {
          "text": "обновляет значение переменной s",
          "valid": false,
        },
        {
          "text": "переменной s присваивается начальное значение",
          "valid": false,
        },
        {
          "text": "s раз выполняется итерация",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какого типа данных нет в PHP?",
      "answers": [
        {
          "text": "real",
          "valid": true,
        },
        {
          "text": "float",
          "valid": false,
        },
        {
          "text": "string",
          "valid": false,
        },
        {
          "text": "boolean",
          "valid": false,
        },
        {
          "text": "integer",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какого типа данных нет в PHP?",
      "answers": [
        {
          "text": "label",
          "valid": true,
        },
        {
          "text": "float",
          "valid": false,
        },
        {
          "text": "string",
          "valid": false,
        },
        {
          "text": "boolean",
          "valid": false,
        },
        {
          "text": "integer",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что такое PHP",
      "answers": [
        {
          "text": "язык программирования серверных приложений",
          "valid": true,
        },
        {
          "text": "Web страницы",
          "valid": false,
        },
        {
          "text": "язык программирования базы данных",
          "valid": false,
        },
        {
          "text": "Web сайт",
          "valid": false,
        },
        {
          "text": "программа для просмотра Web страниц",
          "valid": false,
        }
      ],
    },
    {
      "title": "Удаление файла производится как",
      "answers": [
        {
          "text": "unlink($file);",
          "valid": true,
        },
        {
          "text": "nolink($file);",
          "valid": false,
        },
        {
          "text": "delete($file);",
          "valid": false,
        },
        {
          "text": "remove($file);",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Удаление каталога производится как",
      "answers": [
        {
          "text": "rmdir($catalog);",
          "valid": true,
        },
        {
          "text": "deldir($catalog);",
          "valid": false,
        },
        {
          "text": "remdir($catalog);",
          "valid": false,
        },
        {
          "text": "unlinkdir($catalog);",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конфигурационный файл MySQL",
      "answers": [
        {
          "text": "my.ini",
          "valid": true,
        },
        {
          "text": "mysql.ini",
          "valid": false,
        },
        {
          "text": "mysql.cfg",
          "valid": false,
        },
        {
          "text": "mysql.con",
          "valid": false,
        },
        {
          "text": "my.cfg",
          "valid": false,
        }
      ],
    },
    {
      "title": "Вывод информации о php осуществляется функцией",
      "answers": [
        {
          "text": "phpinfo();",
          "valid": true,
        },
        {
          "text": "infophp();",
          "valid": false,
        },
        {
          "text": "info();",
          "valid": false,
        },
        {
          "text": "inphp();",
          "valid": false,
        },
        {
          "text": "info_of_php();",
          "valid": false,
        }
      ],
    },
    {
      "title": "Пусть PHP-переменная $a=10. Чему она будет равна после операции $a*=15",
      "answers": [
        {
          "text": "150",
          "valid": true,
        },
        {
          "text": "5",
          "valid": false,
        },
        {
          "text": "15",
          "valid": false,
        },
        {
          "text": "10",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Пусть PHP-переменная $a=15. Чему она будет равна после операции $a/=10",
      "answers": [
        {
          "text": "1.5",
          "valid": true,
        },
        {
          "text": "5",
          "valid": false,
        },
        {
          "text": "15",
          "valid": false,
        },
        {
          "text": "10",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как пишется конструкция While в PHP",
      "answers": [
        {
          "text": "While (выражение) {блок}",
          "valid": true,
        },
        {
          "text": "While выражение {блок}",
          "valid": false,
        },
        {
          "text": "While (выражение) (блок)",
          "valid": false,
        },
        {
          "text": "While {выражение} {блок}",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_string($x) в PHP возвращает true если",
      "answers": [
        {
          "text": "Переменная $x строка",
          "valid": true,
        },
        {
          "text": "В переменной $x не строка",
          "valid": false,
        },
        {
          "text": "Переменная $x нет строки",
          "valid": false,
        },
        {
          "text": "Переменная $x существует",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_int($x) в PHP возвращает true если",
      "answers": [
        {
          "text": "Переменная $x целое",
          "valid": true,
        },
        {
          "text": "Переменная $x не целое",
          "valid": false,
        },
        {
          "text": "В переменной $x есть целое",
          "valid": false,
        },
        {
          "text": "В переменной $x нет целое",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_ array($x) возвращает true если",
      "answers": [
        {
          "text": "Переменная $x массив",
          "valid": true,
        },
        {
          "text": "Переменная $x не массив",
          "valid": false,
        },
        {
          "text": "Переменной $x существует",
          "valid": false,
        },
        {
          "text": "Из переменной $x можно составить массив",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чему равно PHP-выражение $y=10+($x=2)*3",
      "answers": [
        {
          "text": "16",
          "valid": true,
        },
        {
          "text": "60",
          "valid": false,
        },
        {
          "text": "15",
          "valid": false,
        },
        {
          "text": "12",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Знак $ в тексте для вывода на экран пишется как",
      "answers": [
        {
          "text": "$",
          "valid": true,
        },
        {
          "text": "/$",
          "valid": false,
        },
        {
          "text": "//$",
          "valid": false,
        },
        {
          "text": "\\$",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конструкция list() в PHP используется",
      "answers": [
        {
          "text": "для присвоения переменной элементов массива",
          "valid": true,
        },
        {
          "text": "для вывода списка массив",
          "valid": false,
        },
        {
          "text": "для нумерации массива",
          "valid": false,
        },
        {
          "text": "для подсчета элементов массива",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что делает в PHP функция shuffle($a)",
      "answers": [
        {
          "text": "перемешивает массив $a",
          "valid": true,
        },
        {
          "text": "инвертирует массив $a",
          "valid": false,
        },
        {
          "text": "считает число элементов массива $a",
          "valid": false,
        },
        {
          "text": "преобразует массив $a в строку",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что делает в PHP функция rand()",
      "answers": [
        {
          "text": "генерирует случайное число",
          "valid": true,
        },
        {
          "text": "округляет число",
          "valid": false,
        },
        {
          "text": "ранжирует число",
          "valid": false,
        },
        {
          "text": "преобразует переменную в число",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция array_pop($a) в PHP",
      "answers": [
        {
          "text": "удаляет последний элемент массива",
          "valid": true,
        },
        {
          "text": "удаляет первый элемент массива",
          "valid": false,
        },
        {
          "text": "удаляет средний элемент массива",
          "valid": false,
        },
        {
          "text": "удаляет элементы массива",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция strip_tags($x) в PHP",
      "answers": [
        {
          "text": "удаляет из строки все теги HTML",
          "valid": true,
        },
        {
          "text": "добавляет все теги HTML",
          "valid": false,
        },
        {
          "text": "проверяет на наличие тегов HTML",
          "valid": false,
        },
        {
          "text": "удаляет строку",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция fread($f,2) в PHP",
      "answers": [
        {
          "text": "читает 2 байта из файла",
          "valid": true,
        },
        {
          "text": "чтение файла из родительского каталога",
          "valid": false,
        },
        {
          "text": "открытие файла домашней страницы на чтение",
          "valid": false,
        },
        {
          "text": "открытие файла на редактирование",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция fseek($f,4,SEEK_SET) в PHP",
      "answers": [
        {
          "text": "смещает указатель на 4 байта с начала файла",
          "valid": true,
        },
        {
          "text": "смещает указатель на 4 байта с конца файла",
          "valid": false,
        },
        {
          "text": "смещает указатель на 4 байта с текущей позиции",
          "valid": false,
        },
        {
          "text": "смещает указатель на 40 байта сначала файла",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция fseek($f,4,SEEK_CUR) в PHP",
      "answers": [
        {
          "text": "смещает указатель текущей позиции на 4 байта",
          "valid": true,
        },
        {
          "text": "смещает указатель на 4 байта с начала файла",
          "valid": false,
        },
        {
          "text": "смещает указатель на 4 байта с конца файла",
          "valid": false,
        },
        {
          "text": "смещает указатель на 40 байта сначала файла",
          "valid": false,
        },
        {
          "text": "нет правильного ответ",
          "valid": false,
        }
      ],
    },
    {
      "title": "Проверка отправки данных по методу GET в PHP",
      "answers": [
        {
          "text": "if (isset($_GET['name']))",
          "valid": true,
        },
        {
          "text": "if (set($_GET['name']))",
          "valid": false,
        },
        {
          "text": "if (send($_GET['name']))",
          "valid": false,
        },
        {
          "text": "if (is_set($_GET['name']))",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Проверка отправки данных по методу POST в PHP",
      "answers": [
        {
          "text": "if (isset($_POST['name']))",
          "valid": true,
        },
        {
          "text": "if (set($_POST['name']))",
          "valid": false,
        },
        {
          "text": "if (send($_POST['name']))",
          "valid": false,
        },
        {
          "text": "if (is_set($_POST['name']))",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция в PHP может быть объявлена",
      "answers": [
        {
          "text": "в любой части программы",
          "valid": true,
        },
        {
          "text": "в начале программы",
          "valid": false,
        },
        {
          "text": "в конце программы",
          "valid": false,
        },
        {
          "text": "в специальных модулях",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как определяется процедуры в PHP",
      "answers": [
        {
          "text": "в PHP нет процедур",
          "valid": true,
        },
        {
          "text": "procedure ()",
          "valid": false,
        },
        {
          "text": "proc ()",
          "valid": false,
        },
        {
          "text": "create procedure ()",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как объявить в PHP переменную x глобальной",
      "answers": [
        {
          "text": "global $x;",
          "valid": true,
        },
        {
          "text": "g $x;",
          "valid": false,
        },
        {
          "text": "glob $x;",
          "valid": false,
        },
        {
          "text": "gll $x;",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает на языке PHP следующая запись: $t=++$r",
      "answers": [
        {
          "text": "присвоение t значение r+1",
          "valid": true,
        },
        {
          "text": "увеличение t на 1",
          "valid": false,
        },
        {
          "text": "суммирование t и r",
          "valid": false,
        },
        {
          "text": "присвоение t значение r+r",
          "valid": false,
        },
        {
          "text": "присвоение t значение r+2",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конфигурационный файл Apache",
      "answers": [
        {
          "text": "httpd.conf",
          "valid": true,
        },
        {
          "text": "httpd.ini",
          "valid": false,
        },
        {
          "text": "httpd.cfg",
          "valid": false,
        },
        {
          "text": "httpd.inc",
          "valid": false,
        },
        {
          "text": "httpd.bat",
          "valid": false,
        }
      ],
    },
    {
      "title": "Условный оператор if в PHP имеет вид",
      "answers": [
        {
          "text": "if (условие) {блок_выполнения} else {блок_выполнения1}",
          "valid": true,
        },
        {
          "text": "if условие then блок_выполнения else блок_выполнения1 end",
          "valid": false,
        },
        {
          "text": "if (условие) then {блок_выполнения} else {блок_выполнения1}",
          "valid": false,
        },
        {
          "text": "if условие then блок_выполнения else блок_выполнения1 if end",
          "valid": false,
        },
        {
          "text": "if условие then блок_выполнения else блок_выполнения1 endif",
          "valid": false,
        }
      ],
    },
    {
      "title": "Оператор While в PHP имеет вид",
      "answers": [
        {
          "text": "While (условие) { блок_выполнения }",
          "valid": true,
        },
        {
          "text": "While (условие) do { блок_выполнения }end",
          "valid": false,
        },
        {
          "text": "While условие do { блок_выполнения }",
          "valid": false,
        },
        {
          "text": "While (условие) do { блок_выполнения } whileend",
          "valid": false,
        },
        {
          "text": "While условие do { блок_выполнения } endwhile",
          "valid": false,
        }
      ],
    },
    {
      "title": "Оператор do... while в PHP имеет вид",
      "answers": [
        {
          "text": "do {блок_выполнения} while (выражение)",
          "valid": true,
        },
        {
          "text": "While (условие) do { блок_выполнения }",
          "valid": false,
        },
        {
          "text": "do (условие) while { блок_выполнения }",
          "valid": false,
        },
        {
          "text": "While (условие) do { блок_выполнения } whileend",
          "valid": false,
        },
        {
          "text": "While условие do { блок_выполнения } endwhile",
          "valid": false,
        }
      ],
    },
    {
      "title": "Оператор for в PHP имеет вид",
      "answers": [
        {
          "text": "for (Начальное значение; Условие; Приращение) {блок_выполнения}",
          "valid": true,
        },
        {
          "text": "for (Начальное значение; Условие; Приращение): блок_выполнения forend",
          "valid": false,
        },
        {
          "text": "for (Начальное значение; Условие; Приращение) {блок_выполнения} forend",
          "valid": false,
        },
        {
          "text": "for (Начальное значение; Условие; Приращение) {блок_выполнения} endfor",
          "valid": false,
        },
        {
          "text": "for Начальное значение to Конечное значение do",
          "valid": false,
        }
      ],
    },
    {
      "title": "Операторы передачи управления в PHP",
      "answers": [
        {
          "text": "break,continue",
          "valid": true,
        },
        {
          "text": "goto",
          "valid": false,
        },
        {
          "text": "goto, break,continue",
          "valid": false,
        },
        {
          "text": "goto, continue",
          "valid": false,
        },
        {
          "text": "goto, break",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой оператор в PHP позволяет пропустить дальнейшие инструкции из блока_выполнения любого цикла и продолжить выполнение с новой итерации?",
      "answers": [
        {
          "text": "continue",
          "valid": true,
        },
        {
          "text": "goto",
          "valid": false,
        },
        {
          "text": "goto, break",
          "valid": false,
        },
        {
          "text": "goto, continue",
          "valid": false,
        },
        {
          "text": "break",
          "valid": false,
        }
      ],
    },
    {
      "title": "Операторы включения в PHP",
      "answers": [
        {
          "text": "include, require",
          "valid": true,
        },
        {
          "text": "goto, include",
          "valid": false,
        },
        {
          "text": "switch, include, require",
          "valid": false,
        },
        {
          "text": "switch, require",
          "valid": false,
        },
        {
          "text": "switch, goto",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция в PHP, возвращающая число аргументов, переданных в текущую функцию.",
      "answers": [
        {
          "text": "func_num_args()",
          "valid": true,
        },
        {
          "text": "func_get_arg()",
          "valid": false,
        },
        {
          "text": "func_get_args()",
          "valid": false,
        },
        {
          "text": "num_args()",
          "valid": false,
        },
        {
          "text": "get_arg()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция в PHP, возвращающая аргумент из списка переданных в функцию аргументов, порядковый номер которого задан параметром номер_аргумента.",
      "answers": [
        {
          "text": "func_get_arg(номер_аргумента)",
          "valid": true,
        },
        {
          "text": "func_num_args(номер_аргумента)",
          "valid": false,
        },
        {
          "text": "func_get_args(номер_аргумента)",
          "valid": false,
        },
        {
          "text": "num_args(номер_аргумента)",
          "valid": false,
        },
        {
          "text": "get_arg(номер_аргумента)",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция в PHP, возвращающая массив, состоящий из списка аргументов, переданных функции.",
      "answers": [
        {
          "text": "func_get_args()",
          "valid": true,
        },
        {
          "text": "func_num_args()",
          "valid": false,
        },
        {
          "text": "func_get_arg()",
          "valid": false,
        },
        {
          "text": "num_args()",
          "valid": false,
        },
        {
          "text": "get_arg()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция file_exists($f) в PHP",
      "answers": [
        {
          "text": "проверяет существование файла $f",
          "valid": true,
        },
        {
          "text": "проверяет существование записей в файле $f",
          "valid": false,
        },
        {
          "text": "проверяет файл $f на пустоту",
          "valid": false,
        },
        {
          "text": "проверяет файл $f на текстовость",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для удаления файла в PHP используется функция",
      "answers": [
        {
          "text": "unlink();",
          "valid": true,
        },
        {
          "text": "delete();",
          "valid": false,
        },
        {
          "text": "remove();",
          "valid": false,
        },
        {
          "text": "release();",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для передачи скрытых данных используется метод",
      "answers": [
        {
          "text": "POST",
          "valid": true,
        },
        {
          "text": "GET",
          "valid": false,
        },
        {
          "text": "HIDDEN",
          "valid": false,
        },
        {
          "text": "PASSWORD",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для вывода содержимого переменной x в PHP используется выражение",
      "answers": [
        {
          "text": "echo $x;",
          "valid": true,
        },
        {
          "text": "echo ‘$x’;",
          "valid": false,
        },
        {
          "text": "echo x;",
          "valid": false,
        },
        {
          "text": "echo \"x\";",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Логическое \"и\" в PHP определяется как",
      "answers": [
        {
          "text": "&amp;&amp;",
          "valid": true,
        },
        {
          "text": "&amp;",
          "valid": false,
        },
        {
          "text": "||",
          "valid": false,
        },
        {
          "text": "|",
          "valid": false,
        },
        {
          "text": "!",
          "valid": false,
        }
      ],
    },
    {
      "title": "Логическое \"или\" в PHP определяется как",
      "answers": [
        {
          "text": "||",
          "valid": true,
        },
        {
          "text": "|",
          "valid": false,
        },
        {
          "text": "!",
          "valid": false,
        },
        {
          "text": "xor",
          "valid": false,
        },
        {
          "text": "&amp;&amp;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Присвоение в PHP",
      "answers": [
        {
          "text": "=",
          "valid": true,
        },
        {
          "text": ":=",
          "valid": false,
        },
        {
          "text": "==",
          "valid": false,
        },
        {
          "text": "===",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP переименовывает файл",
      "answers": [
        {
          "text": "rename();",
          "valid": true,
        },
        {
          "text": "changename();",
          "valid": false,
        },
        {
          "text": "re-name();",
          "valid": false,
        },
        {
          "text": "$_rename();",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что возвращает функция fileatime($f) в PHP",
      "answers": [
        {
          "text": "время последнего доступа",
          "valid": true,
        },
        {
          "text": "Время последнего изменения файла",
          "valid": false,
        },
        {
          "text": "Время создания файла",
          "valid": false,
        },
        {
          "text": "Время загрузки",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что возвращает функция filectime($f) в PHP",
      "answers": [
        {
          "text": "Дата создания файла",
          "valid": true,
        },
        {
          "text": "Дата последнего изменения файла",
          "valid": false,
        },
        {
          "text": "Дата последнего доступа",
          "valid": false,
        },
        {
          "text": "Время загрузки",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что возвращает функция filemtime($f) в PHP",
      "answers": [
        {
          "text": "Время последнего изменения файла",
          "valid": true,
        },
        {
          "text": "Время создания файла",
          "valid": false,
        },
        {
          "text": "время последнего доступа",
          "valid": false,
        },
        {
          "text": "Время загрузки",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_readble($f) в PHP возвращает true",
      "answers": [
        {
          "text": "если можно открыть файл",
          "valid": true,
        },
        {
          "text": "если можно запустить файл",
          "valid": false,
        },
        {
          "text": "если можно записать в файл",
          "valid": false,
        },
        {
          "text": "если можно редактировать файл",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_writeble($f) в PHP возвращает true",
      "answers": [
        {
          "text": "если можно записать в файл",
          "valid": true,
        },
        {
          "text": "если можно запустить файл",
          "valid": false,
        },
        {
          "text": "если можно открыть файл",
          "valid": false,
        },
        {
          "text": "если можно удалить файл",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция is_executable($f) в PHP возвращает true",
      "answers": [
        {
          "text": "если можно запустить файл",
          "valid": true,
        },
        {
          "text": "если можно открыть файл",
          "valid": false,
        },
        {
          "text": "если можно редактировать файл",
          "valid": false,
        },
        {
          "text": "если можно записать файл",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что осуществляет в PHP функция mkdir()",
      "answers": [
        {
          "text": "создает каталог",
          "valid": true,
        },
        {
          "text": "удаляет пустой каталог",
          "valid": false,
        },
        {
          "text": "изменяет текущий каталог",
          "valid": false,
        },
        {
          "text": "возвращает текущий каталог",
          "valid": false,
        },
        {
          "text": "открывает каталог",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что осуществляет в PHP функция rmdir()",
      "answers": [
        {
          "text": "удаляет пустой каталог",
          "valid": true,
        },
        {
          "text": "создает каталог",
          "valid": false,
        },
        {
          "text": "изменяет текущий каталог",
          "valid": false,
        },
        {
          "text": "возвращает текущий каталог",
          "valid": false,
        },
        {
          "text": "открывает каталог",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что осуществляет в PHP функция chdir()",
      "answers": [
        {
          "text": "изменяет текущий каталог",
          "valid": true,
        },
        {
          "text": "создает каталог",
          "valid": false,
        },
        {
          "text": "удаляет пустой каталог",
          "valid": false,
        },
        {
          "text": "возвращает текущий каталог",
          "valid": false,
        },
        {
          "text": "открывает каталог",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что осуществляет в PHP функция getcwd()",
      "answers": [
        {
          "text": "возвращает текущий каталог",
          "valid": true,
        },
        {
          "text": "изменяет текущий каталог",
          "valid": false,
        },
        {
          "text": "создает каталог",
          "valid": false,
        },
        {
          "text": "удаляет пустой каталог",
          "valid": false,
        },
        {
          "text": "открывает каталог",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что осуществляет в PHP функция rewinddir()",
      "answers": [
        {
          "text": "перематывает каталог на начало",
          "valid": true,
        },
        {
          "text": "изменяет текущий каталог",
          "valid": false,
        },
        {
          "text": "создает каталог",
          "valid": false,
        },
        {
          "text": "удаляет пустой каталог",
          "valid": false,
        },
        {
          "text": "возвращает текущий каталог",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция fgets()в PHP используется",
      "answers": [
        {
          "text": "для построчного чтения файла",
          "valid": true,
        },
        {
          "text": "для чтения всего файла",
          "valid": false,
        },
        {
          "text": "для чтения файла побайтно",
          "valid": false,
        },
        {
          "text": "для получения характеристик файла",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Конструкция While (!feof($f)) … в PHP означает",
      "answers": [
        {
          "text": "пока не конец файла",
          "valid": true,
        },
        {
          "text": "пока не начало файла",
          "valid": false,
        },
        {
          "text": "пока конец файла",
          "valid": false,
        },
        {
          "text": "пока начало файла",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим SEEK_SET(0) функции fseek() в PHP",
      "answers": [
        {
          "text": "смещает указатель, начиная с начало файла",
          "valid": true,
        },
        {
          "text": "смещает указатель, начиная с конца файла",
          "valid": false,
        },
        {
          "text": "ищет файл",
          "valid": false,
        },
        {
          "text": "ищет каталог",
          "valid": false,
        },
        {
          "text": "смещает указатель, начиная с текущей позиции",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим SEEK_CUR(0) функции fseek() в PHP",
      "answers": [
        {
          "text": "смещает указатель, начиная с текущей позиции",
          "valid": true,
        },
        {
          "text": "смещает указатель, начиная с начало файла",
          "valid": false,
        },
        {
          "text": "ищет файл",
          "valid": false,
        },
        {
          "text": "ищет каталог",
          "valid": false,
        },
        {
          "text": "смещает указатель, начиная с конца файла",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим SEEK_END(0) функции fseek() в PHP",
      "answers": [
        {
          "text": "смещает указатель, начиная с конца файла",
          "valid": true,
        },
        {
          "text": "ищет текст",
          "valid": false,
        },
        {
          "text": "ищет файл",
          "valid": false,
        },
        {
          "text": "ищет каталог",
          "valid": false,
        },
        {
          "text": "смещает указатель, начиная с текущей позиции",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим LOCK_SH(0) функции flock() в PHP",
      "answers": [
        {
          "text": "позволяет другим пользователям также читать файл",
          "valid": true,
        },
        {
          "text": "исключительная блокировка",
          "valid": false,
        },
        {
          "text": "снятие блокировки",
          "valid": false,
        },
        {
          "text": "если файл заблокирован, то дает сообщение об ошибке",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим LOCK_EX(0) функции flock() в PHP",
      "answers": [
        {
          "text": "исключительная блокировка",
          "valid": true,
        },
        {
          "text": "позволяет другим пользователям также читать файл",
          "valid": false,
        },
        {
          "text": "снятие блокировки",
          "valid": false,
        },
        {
          "text": "если файл заблокирован, то дает сообщение об ошибке",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Режим LOCK_UN(0) функции flock() в PHP",
      "answers": [
        {
          "text": "снятие блокировки",
          "valid": true,
        },
        {
          "text": "если файл заблокирован, то дает сообщение об ошибке",
          "valid": false,
        },
        {
          "text": "исключительная блокировка",
          "valid": false,
        },
        {
          "text": "позволяет другим пользователям также читать файл",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция array_shift() в PHP",
      "answers": [
        {
          "text": "удаляет первый элемент массива",
          "valid": true,
        },
        {
          "text": "удаляет последний элемент массива",
          "valid": false,
        },
        {
          "text": "удаляет средний элемент массива",
          "valid": false,
        },
        {
          "text": "удаляет элементы массива",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция strtolower($s) в PHP",
      "answers": [
        {
          "text": "переводит строку $s в нижний регистр",
          "valid": true,
        },
        {
          "text": "переводит строку $s в верхний регистр",
          "valid": false,
        },
        {
          "text": "переводит строку $s в массив",
          "valid": false,
        },
        {
          "text": "переводит строку $s в число",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция strtoupper($s) в PHP",
      "answers": [
        {
          "text": "переводит строку $s в верхний регистр",
          "valid": true,
        },
        {
          "text": "переводит строку $s в нижний регистр",
          "valid": false,
        },
        {
          "text": "переводит строку $s в массив",
          "valid": false,
        },
        {
          "text": "переводит строку $s в число",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция convert_cyr_string() в PHP",
      "answers": [
        {
          "text": "переводит строку из одной кодировки в другую",
          "valid": true,
        },
        {
          "text": "переводит строку в число",
          "valid": false,
        },
        {
          "text": "переводит строку в массив",
          "valid": false,
        },
        {
          "text": "переводит строку в нижний регистр",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция htmlspesialchars($s) в PHP",
      "answers": [
        {
          "text": "заменяет специальные символы их HTML-эквивалентами",
          "valid": true,
        },
        {
          "text": "возвращает специальные символы HTML",
          "valid": false,
        },
        {
          "text": "удаляет специальные символы HTML",
          "valid": false,
        },
        {
          "text": "подсчитывает специальные символы HTML",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция pow($a,$b) в PHP",
      "answers": [
        {
          "text": "возводит a в b степень",
          "valid": true,
        },
        {
          "text": "умножает a на b",
          "valid": false,
        },
        {
          "text": "делит a на b",
          "valid": false,
        },
        {
          "text": "извлекает корень a из b",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP устанавливает указатель на первый элемент массива?",
      "answers": [
        {
          "text": "reset()",
          "valid": true,
        },
        {
          "text": "next()",
          "valid": false,
        },
        {
          "text": "key()",
          "valid": false,
        },
        {
          "text": "end()",
          "valid": false,
        },
        {
          "text": "prev()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP перемещает указатель на один элемент массива вперед?",
      "answers": [
        {
          "text": "next()",
          "valid": true,
        },
        {
          "text": "reset()",
          "valid": false,
        },
        {
          "text": "key()",
          "valid": false,
        },
        {
          "text": "end()",
          "valid": false,
        },
        {
          "text": "prev()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP устанавливает указатель на последний элемент массива?",
      "answers": [
        {
          "text": "end()",
          "valid": true,
        },
        {
          "text": "reset()",
          "valid": false,
        },
        {
          "text": "next()",
          "valid": false,
        },
        {
          "text": "key()",
          "valid": false,
        },
        {
          "text": "prev()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP перемещает указатель на один элемент массива назад?",
      "answers": [
        {
          "text": "prev()",
          "valid": true,
        },
        {
          "text": "reset()",
          "valid": false,
        },
        {
          "text": "next()",
          "valid": false,
        },
        {
          "text": "key()",
          "valid": false,
        },
        {
          "text": "end()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP возвращает ключ текущего элемента массива?",
      "answers": [
        {
          "text": "key()",
          "valid": true,
        },
        {
          "text": "reset()",
          "valid": false,
        },
        {
          "text": "next()",
          "valid": false,
        },
        {
          "text": "end()",
          "valid": false,
        },
        {
          "text": "prev()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP добавляет элементы в начало массива?",
      "answers": [
        {
          "text": "array_unshift()",
          "valid": true,
        },
        {
          "text": "array_push()",
          "valid": false,
        },
        {
          "text": "array_shift()",
          "valid": false,
        },
        {
          "text": "array_pop()",
          "valid": false,
        },
        {
          "text": "array_unique()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP добавляет элементы в конец массива?",
      "answers": [
        {
          "text": "array_push()",
          "valid": true,
        },
        {
          "text": "array_unshift()",
          "valid": false,
        },
        {
          "text": "array_shift()",
          "valid": false,
        },
        {
          "text": "array_pop()",
          "valid": false,
        },
        {
          "text": "array_unique()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP удаляет первый элемент массива и возвращает его?",
      "answers": [
        {
          "text": "array_shift()",
          "valid": true,
        },
        {
          "text": "array_unshift()",
          "valid": false,
        },
        {
          "text": "array_push()",
          "valid": false,
        },
        {
          "text": "array_pop()",
          "valid": false,
        },
        {
          "text": "array_unique()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP удаляет последний элемент массива и возвращает его?",
      "answers": [
        {
          "text": "array_pop()",
          "valid": true,
        },
        {
          "text": "array_unshift()",
          "valid": false,
        },
        {
          "text": "array_push()",
          "valid": false,
        },
        {
          "text": "array_shift()",
          "valid": false,
        },
        {
          "text": "array_unique()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP возвращает ассоциативный массив, состоящий из уникальных значений?",
      "answers": [
        {
          "text": "array_unique()",
          "valid": true,
        },
        {
          "text": "array_unshift()",
          "valid": false,
        },
        {
          "text": "array_push()",
          "valid": false,
        },
        {
          "text": "array_shift()",
          "valid": false,
        },
        {
          "text": "array_pop()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для сортировки массива в PHP по значениям в алфавитном порядке используется:",
      "answers": [
        {
          "text": "asort()",
          "valid": true,
        },
        {
          "text": "arsort()",
          "valid": false,
        },
        {
          "text": "ksort()",
          "valid": false,
        },
        {
          "text": "krsort()",
          "valid": false,
        },
        {
          "text": "usort()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для сортировки массива в PHP по значениям в обратном порядке используется:",
      "answers": [
        {
          "text": "arsort()",
          "valid": true,
        },
        {
          "text": "asort()",
          "valid": false,
        },
        {
          "text": "ksort()",
          "valid": false,
        },
        {
          "text": "krsort()",
          "valid": false,
        },
        {
          "text": "usort()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для сортировки массива в PHP по ключам в алфавитном порядке используется:",
      "answers": [
        {
          "text": "ksort()",
          "valid": true,
        },
        {
          "text": "asort()",
          "valid": false,
        },
        {
          "text": "arsort()",
          "valid": false,
        },
        {
          "text": "krsort()",
          "valid": false,
        },
        {
          "text": "usort()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для сортировки массива в PHP по ключам в обратном порядке используется:",
      "answers": [
        {
          "text": "krsort()",
          "valid": true,
        },
        {
          "text": "asort()",
          "valid": false,
        },
        {
          "text": "arsort()",
          "valid": false,
        },
        {
          "text": "ksort()",
          "valid": false,
        },
        {
          "text": "usort()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP возвращает количество символов в строке?",
      "answers": [
        {
          "text": "strlen()",
          "valid": true,
        },
        {
          "text": "trim()",
          "valid": false,
        },
        {
          "text": "ltrim()",
          "valid": false,
        },
        {
          "text": "rtrim()",
          "valid": false,
        },
        {
          "text": "chop()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP удаляет пробельные символы в начале и конце строки?",
      "answers": [
        {
          "text": "trim()",
          "valid": true,
        },
        {
          "text": "strlen()",
          "valid": false,
        },
        {
          "text": "ltrim()",
          "valid": false,
        },
        {
          "text": "rtrim()",
          "valid": false,
        },
        {
          "text": "chop()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP удаляет пробельные символы в начале строки?",
      "answers": [
        {
          "text": "ltrim()",
          "valid": true,
        },
        {
          "text": "strlen()",
          "valid": false,
        },
        {
          "text": "trim()",
          "valid": false,
        },
        {
          "text": "rtrim()",
          "valid": false,
        },
        {
          "text": "chop()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP удаляет пробельные символы в конце строки?",
      "answers": [
        {
          "text": "rtrim()",
          "valid": true,
        },
        {
          "text": "strlen()",
          "valid": false,
        },
        {
          "text": "trim()",
          "valid": false,
        },
        {
          "text": "ltrim()",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция в PHP, позволяющая разбить длинный текст на строки указанной длины:",
      "answers": [
        {
          "text": "wordwrap()",
          "valid": true,
        },
        {
          "text": "split()",
          "valid": false,
        },
        {
          "text": "explode()",
          "valid": false,
        },
        {
          "text": "substr()",
          "valid": false,
        },
        {
          "text": "ucwords()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы сделать в PHP первый символ строки прописными, используется функция:",
      "answers": [
        {
          "text": "ucfirst()",
          "valid": true,
        },
        {
          "text": "ucwords()",
          "valid": false,
        },
        {
          "text": "strtoupper()",
          "valid": false,
        },
        {
          "text": "strtolower()",
          "valid": false,
        },
        {
          "text": "substr()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы сделать в PHP первые символы всех слов прописными, используется функция:",
      "answers": [
        {
          "text": "ucwords()",
          "valid": true,
        },
        {
          "text": "ucfirst()",
          "valid": false,
        },
        {
          "text": "strtoupper()",
          "valid": false,
        },
        {
          "text": "strtolower()",
          "valid": false,
        },
        {
          "text": "substr()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы получить в PHP список полей таблицы базы данных, используется функция:",
      "answers": [
        {
          "text": "mysqli_fetch_fields",
          "valid": true,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        },
        {
          "text": "mysqli_field_len",
          "valid": false,
        },
        {
          "text": "mysqli_field_type",
          "valid": false,
        },
        {
          "text": "mysqli_field_flags",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы получить в PHP имя поля таблицы базы данных, используется функция:",
      "answers": [
        {
          "text": "mysqli_fetch_field",
          "valid": true,
        },
        {
          "text": "mysqli_list_field",
          "valid": false,
        },
        {
          "text": "mysqli_field_len",
          "valid": false,
        },
        {
          "text": "mysqli_field_type",
          "valid": false,
        },
        {
          "text": "mysqli_field_flags",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы получить в PHP длину поля таблицы базы данных, используется функция:",
      "answers": [
        {
          "text": " mysqli_fetch_lengths",
          "valid": true,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        },
        {
          "text": "mysqli_field_name",
          "valid": false,
        },
        {
          "text": "mysqli_field_type",
          "valid": false,
        },
        {
          "text": "mysqli_field_flags",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы получить в PHP тип поля таблицы базы данных, используется функция:",
      "answers": [
        {
          "text": "Правильного ответа нет.",
          "valid": true,
        },
        {
          "text": "mysqli_field_type",
          "valid": false,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        },
        {
          "text": "mysqli_field_name",
          "valid": false,
        },
        {
          "text": "mysqli_field_len",
          "valid": false,
        }
      ],
    },
    {
      "title": "Чтобы получить в PHPсписок флагов поля таблицы базы данных, используется функция:",
      "answers": [
        {
          "text": " Правильного ответа нет.",
          "valid": true,
        },
        {
          "text": "mysqli_field_flags",
          "valid": false,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        },
        {
          "text": "mysqli_field_name",
          "valid": false,
        },
        {
          "text": "mysqli_field_len",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция используется в PHP скрипте, чтобы записать данные в базу данных?",
      "answers": [
        {
          "text": "mysqli_query()",
          "valid": true,
        },
        {
          "text": "mysqli_result()",
          "valid": false,
        },
        {
          "text": "mysqli_fetch_array()",
          "valid": false,
        },
        {
          "text": "mysqli_fetch_row()",
          "valid": false,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция используется в PHP скрипте, чтобыполучить данные, из запроса к MYSQL",
      "answers": [
        {
          "text": "mysqli_fetch_assoc()",
          "valid": true,
        },
        {
          "text": "mysqli_query()",
          "valid": false,
        },
        {
          "text": "mysqli_list_fields",
          "valid": false,
        },
        {
          "text": "mysqli_field_flags",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Инициирование сессии в PHP",
      "answers": [
        {
          "text": "session_start",
          "valid": true,
        },
        {
          "text": "sessionstart",
          "valid": false,
        },
        {
          "text": "session",
          "valid": false,
        },
        {
          "text": "session_go",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP дает код $a=substr(\"abcd\",2,2)",
      "answers": [
        {
          "text": "в $a будет \"cd\"",
          "valid": true,
        },
        {
          "text": "в $a будет \"bc\"",
          "valid": false,
        },
        {
          "text": "в $a будет \"ab\"",
          "valid": false,
        },
        {
          "text": "в $a будет \"bcd\"",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP дает код $pos=strpos(\"abcd\",\"c\")",
      "answers": [
        {
          "text": "в $pos будет 2",
          "valid": true,
        },
        {
          "text": "в $pos будет 1",
          "valid": false,
        },
        {
          "text": "в $pos будет 3",
          "valid": false,
        },
        {
          "text": "в $pos будет 0",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP делает фунция trim",
      "answers": [
        {
          "text": "убирает пробелы",
          "valid": true,
        },
        {
          "text": "убирает /",
          "valid": false,
        },
        {
          "text": "убирает вспомогательные символы",
          "valid": false,
        },
        {
          "text": "убирает скобки",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP дает код $v=strlen($x)",
      "answers": [
        {
          "text": "длину строки $x",
          "valid": true,
        },
        {
          "text": "список элементов $x",
          "valid": false,
        },
        {
          "text": "число пробелов в $x",
          "valid": false,
        },
        {
          "text": "число строк в $x",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция gettype($x) в PHP",
      "answers": [
        {
          "text": "возвращает тип переменной $x",
          "valid": true,
        },
        {
          "text": "задает тип переменной $x",
          "valid": false,
        },
        {
          "text": "меняет тип переменной $x",
          "valid": false,
        },
        {
          "text": "удаляет переменную $x",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP значит x&lt;&lt;y",
      "answers": [
        {
          "text": "поразрядный сдвиг битов влево",
          "valid": true,
        },
        {
          "text": "поразрядный сдвиг битов вправо",
          "valid": false,
        },
        {
          "text": "сравнение x и y",
          "valid": false,
        },
        {
          "text": "установка значения x намного меньше y ",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что в PHP значит x&gt;&gt;y",
      "answers": [
        {
          "text": "поразрядный сдвиг битов вправо",
          "valid": true,
        },
        {
          "text": "поразрядный сдвиг битов влево",
          "valid": false,
        },
        {
          "text": "сравнение x и y",
          "valid": false,
        },
        {
          "text": "установка значения x намного меньше y ",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция array_push($a,5) в PHP эквивалентна операции",
      "answers": [
        {
          "text": "$a[]=5;",
          "valid": true,
        },
        {
          "text": "$a=$a +5;",
          "valid": false,
        },
        {
          "text": "$a=$a -5;",
          "valid": false,
        },
        {
          "text": "$a=$a *5;",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "При передачи методом GET информация находится",
      "answers": [
        {
          "text": "в конце Интернет адреса",
          "valid": true,
        },
        {
          "text": "перед Интернет адресом",
          "valid": false,
        },
        {
          "text": "в специальной форме обозревателя",
          "valid": false,
        },
        {
          "text": "в специальной гиперссылке",
          "valid": false,
        },
        {
          "text": "в конце Web страницы",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой симол в PHP определяет \"не\"",
      "answers": [
        {
          "text": "!",
          "valid": true,
        },
        {
          "text": "!!",
          "valid": false,
        },
        {
          "text": "-",
          "valid": false,
        },
        {
          "text": "|",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Функция explode в PHP используется для",
      "answers": [
        {
          "text": "разбивания строк",
          "valid": true,
        },
        {
          "text": "объединение строк",
          "valid": false,
        },
        {
          "text": "подсчет количество элементов строк",
          "valid": false,
        },
        {
          "text": "возведение в степень строку",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает условное выражение isset($a) в PHP",
      "answers": [
        {
          "text": "переменная $а существует и имеет значение, отличное от NULL",
          "valid": true,
        },
        {
          "text": "переменная $а имеет значение NULL",
          "valid": false,
        },
        {
          "text": "переменной $а присвоено значение",
          "valid": false,
        },
        {
          "text": "переменная $a существует",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Каким символом обозначается переменная в PHP?",
      "answers": [
        {
          "text": "$",
          "valid": true,
        },
        {
          "text": "%",
          "valid": false,
        },
        {
          "text": "#",
          "valid": false,
        },
        {
          "text": "!",
          "valid": false,
        },
        {
          "text": "&amp;",
          "valid": false,
        }
      ],
    },
    {
      "title": "К какой системе управления базами данными относится СУБД MySQL?",
      "answers": [
        {
          "text": "Реляционные",
          "valid": true,
        },
        {
          "text": "Объектно-ориентированные",
          "valid": false,
        },
        {
          "text": "Объектно-реляционные",
          "valid": false,
        },
        {
          "text": "Иерархические",
          "valid": false,
        },
        {
          "text": "Структурированные",
          "valid": false,
        }
      ],
    },
    {
      "title": "Оператор в PHP, который используется длясравнения двух значений во всех отношениях.",
      "answers": [
        {
          "text": "===",
          "valid": true,
        },
        {
          "text": "!==",
          "valid": false,
        },
        {
          "text": "Instanceof",
          "valid": false,
        },
        {
          "text": "=",
          "valid": false,
        },
        {
          "text": "==",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая из следующих проверок сможет определить наличие произвольной строки в PHP?",
      "answers": [
        {
          "text": "if(strpos($mystring, \"PHP\") !== false)",
          "valid": true,
        },
        {
          "text": "if(!strpos($mystring,\"PHP\"))",
          "valid": false,
        },
        {
          "text": "if(strpos($mystring, \"PHP\") === true)",
          "valid": false,
        },
        {
          "text": "if(strloc($mystring, \"PHP\") == true) ",
          "valid": false,
        },
        {
          "text": "if(strloc($mystring, \"PHP\") === false) ",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для проверки двух переменных в PHP на предмет равеноства одному и тиму же типу и значению",
      "answers": [
        {
          "text": "if($obj1 === $obj2)",
          "valid": true,
        },
        {
          "text": "if($obj1-&gt;equals($obj2) &amp;&amp; ($obj1 instanceof $obj2))",
          "valid": false,
        },
        {
          "text": "if($obj1-&gt;equals($obj2))",
          "valid": false,
        },
        {
          "text": "if($obj1 instanceof $obj2)",
          "valid": false,
        },
        {
          "text": "if($obj1 == $obj2)",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой оператор вы можете использовать в PHP определения того, является ли текущий объект экземпляром указанного класса?",
      "answers": [
        {
          "text": "instanceof",
          "valid": true,
        },
        {
          "text": "instanceof, is_a",
          "valid": false,
        },
        {
          "text": "type, instanceof",
          "valid": false,
        },
        {
          "text": "===, type-hinting",
          "valid": false,
        },
        {
          "text": "===, is_a",
          "valid": false,
        }
      ],
    },
    {
      "title": "В чем различие между методом объявленным статически и нормальным методом?",
      "answers": [
        {
          "text": "Статический метод может быть вызван только используя синтаксис :: и никогда из экземпляра",
          "valid": true,
        },
        {
          "text": "Нормальный метод не имеет досутпа к $this",
          "valid": false,
        },
        {
          "text": "Статический метод может быть вызван из экземпляра класса",
          "valid": false,
        },
        {
          "text": "Нормальный метод может быть вызван только используя синтаксис :: и никогда из экземпляра",
          "valid": false,
        },
        {
          "text": "У них нет функциональных различий",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какое слово используется чтобы обозначить неполный класс или метод, который должен быть продлен и/или реализован в целях его использования?",
      "answers": [
        {
          "text": "Abstract",
          "valid": true,
        },
        {
          "text": "Final",
          "valid": false,
        },
        {
          "text": "Protected",
          "valid": false,
        },
        {
          "text": "Incomplete",
          "valid": false,
        },
        {
          "text": "implements",
          "valid": false,
        }
      ],
    },
    {
      "title": "Метод в JS, который вызывается автоматически, когда объект представлен в виде строки?",
      "answers": [
        {
          "text": "toString()",
          "valid": true,
        },
        {
          "text": "getString()",
          "valid": false,
        },
        {
          "text": "get()",
          "valid": false,
        },
        {
          "text": "value()",
          "valid": false,
        },
        {
          "text": "getString()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая функция в PHP используется чтобы добавить элемент в массив?",
      "answers": [
        {
          "text": "array_unshift()",
          "valid": true,
        },
        {
          "text": "array_shift()",
          "valid": false,
        },
        {
          "text": "array_push()",
          "valid": false,
        },
        {
          "text": "$array[0] = \"value\"",
          "valid": false,
        },
        {
          "text": "array_pop()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая из следующих функций в PHP отсортируют массив по значению?",
      "answers": [
        {
          "text": "asort()",
          "valid": true,
        },
        {
          "text": "usort()",
          "valid": false,
        },
        {
          "text": "krsort()",
          "valid": false,
        },
        {
          "text": "ksort()",
          "valid": false,
        },
        {
          "text": "sort()",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как указать кодировку html-документа?",
      "answers": [
        {
          "text": "&lt;meta charset=\"utf-8\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;html lang=\"ru\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;meta lang=\"utf-8\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;body charset=\"utf-8\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;meta codebase=\"utf-8\"&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой элемент внутри секции &lt;head&gt; является обязательным?",
      "answers": [
        {
          "text": "&lt;title&gt;",
          "valid": true,
        },
        {
          "text": "&lt;meta&gt;",
          "valid": false,
        },
        {
          "text": "&lt;link&gt;",
          "valid": false,
        },
        {
          "text": "&lt;style&gt;",
          "valid": false,
        },
        {
          "text": "&lt;div&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какая строка содержит ошибку?",
      "answers": [
        {
          "text": "Все ответы верные",
          "valid": true,
        },
        {
          "text": "&lt;img src=\"black.jpg\" alt=\"Люди в чёрном\"/&gt;",
          "valid": false,
        },
        {
          "text": "&lt;img src='black.jpg' alt='Люди в чёрном'/&gt;",
          "valid": false,
        },
        {
          "text": "&lt;img src=\"black.jpg\" alt=\"Пришельцы\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;img src='black.jpg' alt='Люди в чёрном'&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Укажите тег, позволяющий определить поле для ввода пароля.",
      "answers": [
        {
          "text": "&lt;input type='password'&gt; ",
          "valid": true,
        },
        {
          "text": "&lt;password&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;pass&gt;",
          "valid": false,
        },
        {
          "text": "&lt;hide&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type='pass' /&gt; ",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как называется технология позволяющая визально изменять HTML-документы.",
      "answers": [
        {
          "text": "CSS",
          "valid": true,
        },
        {
          "text": "jQuery ",
          "valid": false,
        },
        {
          "text": "PHP",
          "valid": false,
        },
        {
          "text": "XHTML",
          "valid": false,
        },
        {
          "text": "PHP",
          "valid": false,
        }
      ],
    },
    {
      "title": "Выберите верный способ создания выпадающего списка",
      "answers": [
        {
          "text": "&lt;select&gt;",
          "valid": true,
        },
        {
          "text": "&lt;list&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"dropdown\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input type=\"list\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;textarea&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Как создать e-mail ссылку?",
      "answers": [
        {
          "text": "&lt;a href=\"mailto:xxx@yyy\"&gt;",
          "valid": true,
        },
        {
          "text": "&lt;a href=\"xxx@yyy\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;mail href=\"xxx@yyy\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;mail&gt;xxx@yyy&lt;/mail&gt;",
          "valid": false,
        },
        {
          "text": "Правильного ответа нет.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Выберите правильный способ создания ссылки?",
      "answers": [
        {
          "text": "&lt;a href=\"http://www.w3schools.com\"&gt;W3Schools&lt;/a&gt;",
          "valid": true,
        },
        {
          "text": "&lt;a url=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;a name=\"http://www.w3schools.com\"&gt;W3Schools.com&lt;/a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;a&gt;http://www.w3schools.com&lt;/a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;a href=\"xxx@yyy\"&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Каким тегом определяется абзац текста?",
      "answers": [
        {
          "text": "&lt;p&gt;",
          "valid": true,
        },
        {
          "text": "&lt;div&gt;",
          "valid": false,
        },
        {
          "text": "&lt;br&gt;",
          "valid": false,
        },
        {
          "text": "&lt;textarea&gt;",
          "valid": false,
        },
        {
          "text": "&lt;span&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Для задания текста, всплывающего при наведении на графический элемент, применяется атрибут:",
      "answers": [
        {
          "text": "title",
          "valid": true,
        },
        {
          "text": "alt",
          "valid": false,
        },
        {
          "text": "src",
          "valid": false,
        },
        {
          "text": "width",
          "valid": false,
        },
        {
          "text": "option",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какие теги из перечисленных ниже определяют блочные элементы?",
      "answers": [
        {
          "text": "&lt;p&gt;",
          "valid": true,
        },
        {
          "text": "&lt;a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;em&gt;",
          "valid": false,
        },
        {
          "text": "&lt;span&gt;",
          "valid": false,
        },
        {
          "text": "&lt;input &gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Объединение несколько ячеек в одну ячейку делается с помощью",
      "answers": [
        {
          "text": "атрибута colspan",
          "valid": true,
        },
        {
          "text": "тега &lt;tr&gt;",
          "valid": false,
        },
        {
          "text": "тега &lt;td&gt;",
          "valid": false,
        },
        {
          "text": "атрибута rowspan",
          "valid": false,
        },
        {
          "text": "тега &lt;span&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тег ..... создаёт",
      "answers": [
        {
          "text": "ячейку",
          "valid": true,
        },
        {
          "text": "столбец",
          "valid": false,
        },
        {
          "text": "таблицу",
          "valid": false,
        },
        {
          "text": "список ",
          "valid": false,
        },
        {
          "text": "строку",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тег для создания выпадающего списка",
      "answers": [
        {
          "text": "&lt;select&gt;&lt;/select&gt; ",
          "valid": true,
        },
        {
          "text": "&lt;selected&gt;&lt;/selected&gt;",
          "valid": false,
        },
        {
          "text": "&lt;option&gt;&lt;/option&gt;",
          "valid": false,
        },
        {
          "text": "&lt;a&gt;&lt;/a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;td&gt;.....&lt;/td&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какое действие выполняет данный код &lt;body oncopy=\"return false\"&gt;",
      "answers": [
        {
          "text": "запрет на копирование текста",
          "valid": true,
        },
        {
          "text": "запрет на выделение текста",
          "valid": false,
        },
        {
          "text": "при выделение текста, исчезают символы",
          "valid": false,
        },
        {
          "text": "запрет скриншота",
          "valid": false,
        },
        {
          "text": "запрет на удаление текста",
          "valid": false,
        }
      ],
    },
    {
      "title": "К какому типу ссылок относится данный код: &lt;audio src=\"http://test.com/test.mp3\"&gt;?",
      "answers": [
        {
          "text": "Абсолютная",
          "valid": true,
        },
        {
          "text": "Графическая",
          "valid": false,
        },
        {
          "text": "Относительная ",
          "valid": false,
        },
        {
          "text": "Безанкорная",
          "valid": false,
        },
        {
          "text": "Смешанная ",
          "valid": false,
        }
      ],
    },
    {
      "title": "Что означает следующий код: &lt;img src=\"адрес .......\"&gt;",
      "answers": [
        {
          "text": "Вставка изображения",
          "valid": true,
        },
        {
          "text": "Вставка видеоролика",
          "valid": false,
        },
        {
          "text": "Вставка документа на страницу",
          "valid": false,
        },
        {
          "text": "Вставка второй страницы html",
          "valid": false,
        },
        {
          "text": "Вставка текста",
          "valid": false,
        }
      ],
    },
    {
      "title": "Параметр авто выбора элемента формы checkbox или radio",
      "answers": [
        {
          "text": "checked",
          "valid": true,
        },
        {
          "text": "disabled",
          "valid": false,
        },
        {
          "text": "first",
          "valid": false,
        },
        {
          "text": "next",
          "valid": false,
        },
        {
          "text": "checkbox",
          "valid": false,
        }
      ],
    },
    {
      "title": "Тело web-страницы описывается с помощью тега",
      "answers": [
        {
          "text": "&lt;body&gt;&lt;/body&gt; ",
          "valid": true,
        },
        {
          "text": "&lt;html&gt;&lt;/html&gt;",
          "valid": false,
        },
        {
          "text": "&lt;?php&gt; &lt;?php&gt;",
          "valid": false,
        },
        {
          "text": "&lt;table&gt;&lt;/table&gt; ",
          "valid": false,
        },
        {
          "text": "&lt;head&gt; &lt;/head&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой тип списка устанавливает атрибут type=\"a\" тега &lt;ol&gt;?",
      "answers": [
        {
          "text": "Нумерованный, с латинскими буквами.",
          "valid": true,
        },
        {
          "text": "Нумерованный, с римскими числами.",
          "valid": false,
        },
        {
          "text": "Нумерованный, с арабскими числами.",
          "valid": false,
        },
        {
          "text": "Маркированный, с маркерами в виде круга.",
          "valid": false,
        },
        {
          "text": "Нумерованный, с русскими буквами.",
          "valid": false,
        }
      ],
    },
    {
      "title": "Каким тегом задается ссылка на web-странице?",
      "answers": [
        {
          "text": "&lt;a href=\"...\"&gt;&lt;/a&gt;",
          "valid": true,
        },
        {
          "text": "&lt;font color=\"...\"&gt; &lt;/font&gt;",
          "valid": false,
        },
        {
          "text": "&lt;img src=\"...\"&gt;",
          "valid": false,
        },
        {
          "text": "&lt;a target=\"...\"&gt; &lt;/a&gt;",
          "valid": false,
        },
        {
          "text": "&lt;code&gt;",
          "valid": false,
        }
      ],
    },
    {
      "title": "Какой тег используется для вывода текста в том виде, в котором он представлен в коде html-документа?",
      "answers": [
        {
          "text": "&lt;pre&gt;",
          "valid": true,
        },
        {
          "text": "&lt;address&gt;",
          "valid": false,
        },
        {
          "text": "&lt;code&gt;",
          "valid": false,
        },
        {
          "text": "&lt;span&gt;",
          "valid": false,
        },
        {
          "text": "&lt;form&gt;",
          "valid": false,
        }
      ],
    }
  ]
}