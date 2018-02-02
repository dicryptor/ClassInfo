/*
 * License:
 *
 * This software is distributed under the terms of the GNU General Public License v3.
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Copyright (c) 2017, Iván Ruvalcaba <mario.i.ruvalcaba[at]gmail[dot]com>
 */

browser.runtime.onMessage.addListener(function(request, sender) {
  // This message is recibed from 'content.js' and 'popup.js'.
  if ('getOptions' === request.message) {
    if ('undefined' !== typeof localStorage) {
      browser.tabs.query({
        'active': true,
        'currentWindow': true
      },
      function(tabs) {
        if ('undefined' !== typeof tabs[0].id && tabs[0].id) {
          // let showOccurrences = localStorage.getItem('showOccurrences');

          // showOccurrences = 'true' === showOccurrences || null === showOccurrences;

          browser.tabs.sendMessage(tabs[0].id, {
            'message': 'returnOptions',
            'remove': request.remove,
            'courseCode': localStorage.getItem('courseCode'),
            'classCode': localStorage.getItem('classCode')
            // 'showOccurrences': showOccurrences
          });
        }
      });
    }
  }
  // This message is recibed from 'content.js'.
  // if ('showOccurrences' === request.message) {
  //   let showOccurrences = localStorage.getItem('showOccurrences');

  //   showOccurrences = 'true' === showOccurrences || null === showOccurrences;

  //   browser.browserAction.setBadgeText({
  //     'text': showOccurrences && request.occurrences ? String(request.occurrences) : '',
  //     'tabId': sender.tab.id
  //   });
  // }
});
