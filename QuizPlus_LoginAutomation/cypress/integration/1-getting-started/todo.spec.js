/// <reference types="cypress" />

describe('QuizPlus Login', () => {
  beforeEach(() => {
    cy.visit('https://quizplus.com/')
  })

  it('the user entered a valid email and valid password', () => {

    cy.get('.sign-up-login-link').click();  //click on login-logout in nav bar 
    cy.contains("Login").click({force: true}) // by default will open signup popup , click on login button
    cy.get(".form").last().within(()=>{  //there is two popups opened .Last() mean the first popup showing
      cy.get("#email").type("bb.mx.fr@gmail.com")  //typing email in Email field
      cy.get("#password").type("Alqam@123")   //typing password in password field
      cy.intercept({method: "POST", url:"**/users/login"}).as("LoginRequst") //save the post result in LoginRequest
      cy.contains("Login").click()                                            //if success the value must be 200
    })

    cy.wait("@LoginRequst").then((intercept)=>{
      assert.equal(intercept.response.statusCode, 200)
    })
   })


   it('the user entered a valid email without entering password', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type("bb.mx.fr@gmail.com")
      cy.contains("Login").click()
      cy.get("#validation-password-message").should("be.visible")
    })
   })

   it('the user entered a valid password without entering email', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#password").type("Alqam@123")
      cy.contains("Login").click()
      cy.get("#validation-email-message").should("be.visible")
      
    })
   })

     it('the user click login button when both fields are blank', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{ 
      cy.contains("Login").click()
      cy.wait(2000)
      cy.get("#validation-email-message").should("be.visible")
      cy.get("#validation-password-message").should("be.visible")
    })
   })

    it('the user entered valid email and invalid password', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type("bb.mx.fr@gmail.com")
      cy.get("#password").type("Alqam@1234")
      cy.contains("Login").click()
    })
   })

      it('the user entered a valid email and different language password', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type("bb.mx.fr@gmail.com")
      cy.get("#password").type("ِمضشة@123")
      cy.contains("Login").click()
    })
   })

   it('the user entered invalid email and valid password', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type("bb.mx.fr.zu@gmail.com")
      cy.get("#password").type("Alqam@123")
      cy.contains("Login").click()
    })
   })

    it('the user entered valid email and space before email', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type(" bb.mx.fr@gmail.com")
      cy.get("#password").type("Alqam@123")
      cy.contains("Login").click()
    })
   })

      it('the user entered valid email and space after email', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.get(".form").last().within(()=>{
      cy.get("#email").type("bb.mx.fr@gmail.com ")
      cy.get("#password").type("Alqam@123")
      cy.contains("Login").click()
    })
   })

  it('the user click on Sign up button', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Sign up").click({force: true})
  })

     it('the user click on Forgot your password? button', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Forgot your password?").click({force: true})

  })
  

  it('the user entered click on Forgot your password? button then click on back to login button', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Forgot your password?").click({force: true})
    cy.contains("Back to Login").click({force: true})
  })

    it('the user entered click on Forgot your password? button then click on send Reset password link button', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Forgot your password?").click({force: true})
    cy.contains(" Send Reset Password Link").click({force: true})
  })

  it('the user click on Forgot your password? button then typing valid email then click on Reset password button', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Forgot your password?").click({force: true})
    cy.get(".form-group-with-validation").last().within(()=>{
    cy.get("#email").type("bb.mx.fr@gmail.com")
    cy.wait(2000)
  })
  cy.contains(" Send Reset Password Link").click({force: true})
})

  it('the user click on Contact Us button in Forgot your password? popup', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains("Forgot your password?").click({force: true})
    cy.contains(" Need Help? ").within(()=>{
    cy.contains("Contact Us").click({force: true})
  })
})


  it('the user click on Continue with Facebook', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains(" Continue with Facebook ").click({force: true})
  })

  
  it('the user click on Continue with Google', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains(" Continue with Google ").click({force: true})
  })

  
  it('the user click on Continue with LinkedIn', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains(" Continue with LinkedIn ").click({force: true})
    cy.wait(5000)
    
  })


  it('the user click on Continue with Twitter', () => {

    cy.get('.sign-up-login-link').click();
    cy.contains("Login").click({force: true})
    cy.contains(" Continue with Twitter ").click({force: true})
  })

   it('the user open login popup and close it using close(X) button', () => {

      cy.get('.sign-up-login-link').click();
      cy.contains("Login").click({force: true})
      cy.get(".close-wrapper").within(()=>{
      cy.get('[alt="close modal"]').last().click()
      })
    })

})
