/*
 * License:
 *
 * This software is distributed under the terms of the GNU General Public License v3.
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Copyright (c) 2017, Iván Ruvalcaba <mario.i.ruvalcaba[at]gmail[dot]com>
 */

function loadOptions() {  // eslint-disable-line no-unused-vars
  if ('undefined' !== typeof localStorage) {
    document.getElementById('textareaCourseCode').value = localStorage.getItem('courseCode');
    document.getElementById('textareaClassCode').value = localStorage.getItem('classCode');

    // let showOccurrences = localStorage.getItem('showOccurrences');
    // showOccurrences = 'true' === showOccurrences || null === showOccurrences;
    // document.getElementById('checkboxShowOccurrences').checked = showOccurrences;
  }
}

function saveOptions() {  // eslint-disable-line no-unused-vars
  if ('undefined' !== typeof localStorage) {
    localStorage.setItem('courseCode', document.getElementById('textareaCourseCode').value);
    localStorage.setItem('classCode', document.getElementById('textareaClassCode').value);
    // localStorage.setItem('showOccurrences', document.getElementById('checkboxShowOccurrences').checked);
  }
}
