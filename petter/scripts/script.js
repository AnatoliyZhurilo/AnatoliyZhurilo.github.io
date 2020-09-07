const languageSelectIcon = $('#language-select-icon')
const languageSelectList = $('#language-select-list')

const selectedLanguage = 'english'
languageSelectIcon.addClass(selectedLanguage)
let isListOpen = false

languageSelectIcon.on('click', () => {
  isListOpen = !isListOpen

  if (isListOpen) {
    openList()
  } else {
    closeList()
  }
});

const openList = () => {
  languageSelectList.addClass( 'opened' );
}
const closeList = () => {
  languageSelectList.removeClass( 'opened' );
}

languageSelectList.on('click', (e) => {
  languageSelectIcon.removeClass(selectedLanguage)
  languageSelectIcon.addClass(e.target.textContent)
  closeList()
})