import { Entrenador } from './entrenador';
import { Futbolista } from './futbolista';
import { Masajista } from './masajista';

let scaloneta = new Entrenador('Scaloneta', 30, 1000000, 1, 'Estudiantes', [
    new Futbolista(
        'Juan',
        23,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        1,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Pedro',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        2,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Mionel Lessi',
        23,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        3,
        500,
        'Zurdo'
    ),
    new Futbolista(
        'Meynar',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        4,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Francisco',
        24,
        1000000,
        1,
        'Estudiantes',
        'Delantero',
        5,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Máximo Virgolini',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        6,
        0,
        'Derecho'
    ),
]);

let manotas = new Masajista('Manotas', 30, 10000, 1, 'Estudiantes', [
    new Futbolista(
        'Juan',
        23,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        1,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Pedro',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        2,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Mionel Lessi',
        23,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        3,
        500,
        'Zurdo'
    ),
    new Futbolista(
        'Meynar',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        4,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Francisco',
        24,
        1000000,
        1,
        'Estudiantes',
        'Delantero',
        5,
        0,
        'Derecho'
    ),
    new Futbolista(
        'Máximo Virgolini',
        25,
        1000,
        1,
        'Estudiantes',
        'Delantero',
        6,
        0,
        'Derecho'
    ),
]);

console.log('---------Entrenador----------');
scaloneta.Entrenar();
scaloneta.Dirigir();
scaloneta.Planificar();
scaloneta.DefinirTitulares(6);
scaloneta.DefinirTitulares(4);
scaloneta.DefinirTitulares(3);
console.log('\n\n---------Masajista----------');
manotas.Masajear(6);
manotas.Rehabilitar(4);