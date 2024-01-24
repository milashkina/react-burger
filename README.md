
<img src="src/images/logo_stellar_burgers.svg" alt="name of burger-point with neon burger">

# Описание
**Учебное приложение для бургерной на краю галактики**

В центре приложения - конструктор бургеров для заказа в зале заведения. Помимо возможности собрать свой бургер, в приложении присутствует личный кабинет с историей заказов пользователя. Так же есть реализация real-time ленты заказов. Приложение содержит порядка 15ти запросов к API. Приложение имеет только десктопную версию для упращения тестирования user-interface. Оценить проделанную работу можно <a href="https://milashkina.github.io/react-burger/index.html">тут</a> 

# Стек технологий

<ul style="list-style: none">
    <li><img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" alt="logo react"/></li>
    <li><img src="https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white" alt="logo redux"/></li>
    <li><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="logo TypeScript"/></li>
    <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="logo HTML5"/></li>
    <li><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="logo css3"/></li>
    <li><img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="logo react router"/></li>
    <li><img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white" alt="logo jest"/></li>
    <li><img src="https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white" alt="logo cypress"/></li>
</ul> 

# Реализованный функционал
+ конструктор для создания межгалактического бургера. С помощью библиотеки Drag&Drop реализован функционал перетаскивания ингредиентов.
+ Модальные окна с информацией об ингредиенте.
+ Сортировка и удаление ингредиентов на этапе создания заказа.
+ Формы регистрации, авторизации и проработка user-flow по восстановлению пароля.
+ Динамические безопасные роуты для всего функционала. 
+ Использование cookie-файлов и локального хранилища для аутентификации пользователей.
+ Личный кабинет содержит следующий функционал: редактирование данных пользователя, просмотр истории покупок пользователя с детализацией и выходом из системы.
+ Лента заказов реализована с использованием Web-sockets. 
+ Для организации хранилища был использован Redux. Безопасность хранилища достигнута путем типизации самого хранилища, его усилителей и мидлвары. Ну и Jest юнит-тесты конечно :)
+ Написаны внешние тесты на cypress
