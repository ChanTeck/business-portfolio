import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CANDIDATE_PROFILE,
  PROJECTS,
  TECH_MATRIX,
  REFEREES,
  getProjectById,
  filterProjectsByCategory,
  getTechMappingByName,
  getNextGalleryIndex,
} from './portfolioData';

test('candidate profile contains verified resume and support letter details', () => {
  assert.equal(CANDIDATE_PROFILE.fullName, 'Chan Teck Cheng');
  assert.equal(CANDIDATE_PROFILE.studentId, 'DIT_A2309F-2409008');
  assert.equal(CANDIDATE_PROFILE.internshipPeriod, 'Jan 2027 – Mar 2027 (3 Months)');
  assert.equal(CANDIDATE_PROFILE.email, 'chanteckcheng8899@gmail.com');
  assert.equal(CANDIDATE_PROFILE.languages.length, 3);
});

test('projects include AeroDrive with 5 real mobile screenshots and 3 additional projects', () => {
  assert.equal(PROJECTS.length, 4);
  const aeroDrive = getProjectById('aerodrive');
  assert.ok(aeroDrive);
  assert.equal(aeroDrive.featured, true);
  assert.equal(aeroDrive.gallery.length, 5);
  assert.equal(filterProjectsByCategory('All').length, 4);
  assert.equal(filterProjectsByCategory('Embedded IoT').length, 1);
});

test('technology matrix resolves case-insensitively and maps to real projects', () => {
  const reactTech = getTechMappingByName('react');
  assert.ok(reactTech);
  assert.deepEqual(reactTech.projects, ['AeroDrive']);

  const supabaseTech = getTechMappingByName('Supabase');
  assert.ok(supabaseTech);
  assert.deepEqual(supabaseTech.projects, ['AeroDrive', 'Smart Study Planner']);
  assert.ok(TECH_MATRIX.length >= 15);
});

test('gallery index wraps cleanly forward and backward', () => {
  assert.equal(getNextGalleryIndex(4, 5, 'next'), 0);
  assert.equal(getNextGalleryIndex(0, 5, 'prev'), 4);
  assert.equal(getNextGalleryIndex(2, 5, 'next'), 3);
  assert.equal(getNextGalleryIndex(0, 0, 'next'), 0);
});

test('referees include both resume references and CPD support letter signatory', () => {
  assert.equal(REFEREES.length, 3);
  assert.ok(REFEREES.some((r) => r.email === 'MohdNajib@Raffles-University.edu.my'));
  assert.ok(REFEREES.some((r) => r.email === 'YEN.LEE.CHOO@Raffles-University.edu.my'));
  assert.ok(REFEREES.some((r) => r.email === 'surajmariappan@raffles-university.edu.my'));
});
