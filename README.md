#events

[![Build status](https://ci.appveyor.com/api/projects/status/ax1wggyqeu7dqujl?svg=true)](https://ci.appveyor.com/project/0anastasia/events)

#### Описание
Важно: в рамках этого ДЗ нужно использовать менеджер пакетов yarn

Нужно доделать игру с гоблинами, реализовав следующую логику:
1. Гоблин появляется в рандомной точке (набор точек фиксирован) ровно на 1 секунду
1. Если пользователь успел за это время кликнуть на этой точке (попробуйте сделать custom-курсор в виде молотка), то:
    * пользователю засчитывается +1 балл
    * гоблин пропадает из ячейки
1. Если пользователь пропустил 5 появлений гоблинов, то игра завершается.

Попробуйте реализовать всё не в виде единого скрипта, а разбив приложение на классы, каждый из которых ответственен за опредённую логику.

Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через CI.
