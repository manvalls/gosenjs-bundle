import { handlePopState, handleFormSubmit, handleLinkClick } from '@gosen/router'
import { defineGosenCall } from '@gosen/call'

handleLinkClick(window)
handleFormSubmit(window)
handlePopState({ window })

defineGosenCall({ window })
