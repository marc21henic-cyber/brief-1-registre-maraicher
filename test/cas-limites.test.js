// Mes propres test : cas limites non couverts par les test fournis
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {ajouterOperation, verifierOperation,} from './src/registre.js';
import { filtrerParParcelle, trierParDate } from '../src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from '../src/synthese.js';
import { modifierOperation, parcelleLaPlusCouteuse } from '../src/bonus.js';

const DONNEES = JSON.parse(readFileSync(new URL('./donnees-test.json', import.meta.url), 'utf8'));
const copie = () => DONNEES.map((operation) => ({ ...operation }));
const SAISIE = { id: 'O11', date: '2026-10-27', parcelle: 'P1', culture: 'tomate', operation: 'récolte', coutFCFA: '2500' };

test('un coût de 0 est accepté (positif ou nul)', () => {
  assert.deepEqual(verifierOperation({ ...SAISIE, coutFCFA: '0' }, DONNEES), []);
});

test('un coût avec espaces est accepté et converti', () => {
  const operations = copie();
  assert.deepEqual(ajouterOperation(operations, { ...SAISIE, coutFCFA: '3 000' }), []);
  assert.equal(operations[10].coutFCFA, 3000);
});

test('une date inexistante ou mal écrite est refusée', () => {
  assert.equal(verifierOperation({ ...SAISIE, date: '2026-02-30' }, DONNEES).length, 1);
  assert.equal(verifierOperation({ ...SAISIE, date: '27/10/2026' }, DONNEES).length, 1);
});

test('une saisie avec plusieurs règles violées renvoie une erreur par règle', () => {
  const erreurs = verifierOperation({ id: 'O01', date: 'abc', parcelle: '', culture: '', operation: 'labour', coutFCFA: '-5' }, DONNEES);
  assert.equal(erreurs.length, 6);
});

test('un coût avec une unité (« 500 FCFA ») est refusé', () => {
  assert.equal(verifierOperation({ ...SAISIE, coutFCFA: '500 FCFA' }, DONNEES).length, 1);
});
test('filtrerParParcelle renvoie un nouveau tableau, pas le registre', () => {
  const operations = copie();
  assert.notEqual(filtrerParParcelle(operations, 'P1'), operations);
});

test('trierParDate garde l’ordre d’origine pour deux dates égales', () => {
  const triee = trierParDate([DONNEES[1], DONNEES[0]]); 
  assert.deepEqual(triee.map((operation) => operation.id), ['O02', 'O01']);
});
test('registre vide : total 0, synthèse {} et min/max null', () => {
  assert.equal(totalCouts([]), 0);
  assert.deepEqual(syntheseParParcelle([]), {});
  assert.equal(coutMinMax([]), null);
});

test('coutMinMax gère un coût égal à 0', () => {
  const operations = [{ coutFCFA: 0 }, { coutFCFA: 700 }];
  assert.deepEqual(coutMinMax(operations), { min: 0, max: 700 });
});
test('bonus : modifier la date d’une opération ne la rend pas doublon d’elle-même', () => {
  const operations = copie();
  assert.deepEqual(modifierOperation(operations, 'O03', 'date', '2026-11-01'), []);
  assert.equal(operations[2].date, '2026-11-01');
});

test('bonus : en cas d’égalité, la première parcelle rencontrée gagne', () => {
  const operations = [
    { id: 'A', parcelle: 'P2', coutFCFA: 1000 },
    { id: 'B', parcelle: 'P1', coutFCFA: 1000 },
  ];
  assert.deepEqual(parcelleLaPlusCouteuse(operations), { parcelle: 'P2', total: 1000 });
});