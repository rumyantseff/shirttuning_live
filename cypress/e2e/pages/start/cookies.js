export class Cookies {


    cookies_window = '#CybotCookiebotDialog'
    accept_button = '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'

    closeCookies() {
        cy.get(this.cookies_window).within(() => {
            cy.get(this.accept_button).click({force: true})
        })
    }
}