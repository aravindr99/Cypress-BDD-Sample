import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import StorePage from './storePage'
import CouponPage from './couponPage'



Given('I navigate to store', () => {
  StorePage.visiciprice()
})

When('I land on homepage', () => {
  cy.xpath('//header/div[2]/div[1]/div[1]/a[1]/amp-img[1]/img[1]').should('be.visible')
  
})

Then('I see the Best Deals Online and trending products header', () => {
  cy.xpath('//h1[contains(text(),"Find the Best Deals Online")]').should('have.text', 'Find the Best Deals Online')
  cy.xpath('//h2[contains(text(),"Top Trending Products")]').should('have.text', 'Top Trending Products')
  
})


Then('I grab the list of stores from image carousel under best deals online', () => {
 cy.xpath('//body/div[1]/div[1]/div[2]/div[1]/div[1]/amp-carousel[1]/div[1]/div[1]/a')
 .its('length').should('eq',20)

})

Then('count list of items in top trending products', () => {
  cy.xpath('//body/div[1]/div[1]/div[3]/amp-carousel[1]/div[1]/div[1]/a')
  .its('length').should('eq',20)
 
 })



 Then('I navigate to the coupon page', () => {
  //cy.xpath('//header/div[@id="top-nav"]/div[1]/a[2]/i[1]').click({ force: true })
  CouponPage.couponiprice()  
})

Then('I see top stores header', () => {
  cy.get('header.gL >h2').should('be.visible')
})

Then('Then I grab the list of top stores and check if URLs are active', () => {
  cy.xpath('//body/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/section[1]//following::div[@class="rY"]')
  .its('length').should('eq',14)
  cy.request("https://iprice.my/coupons/dell/")
  cy.request("https://iprice.my/coupons/lazada/")
  cy.request("https://iprice.my/coupons/shopee/")
  cy.request("https://iprice.my/coupons/lenovo/")
  cy.request("https://iprice.my/coupons/zalora/")
  cy.request("https://iprice.my/coupons/foodpanda/")
  cy.request("https://iprice.my/coupons/lalamove/")
  cy.request("https://iprice.my/coupons/adidas/")
  cy.request("https://iprice.my/coupons/grabfood/")
  cy.request("https://iprice.my/coupons/klook/")
  cy.request("https://iprice.my/coupons/agoda/")
  cy.request("https://iprice.my/coupons/watsons-malaysia/")
  cy.request("https://iprice.my/coupons/airasia/")
  cy.request("https://iprice.my/coupons/grab/")
 })
 

 
        
        
        