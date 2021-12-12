Feature: Navigation to iPrice Store

    As a customer
    I want to find the Best Deals Online in the store


   Scenario: Navigate to iPrice Malaysia website and perform automated test based on the following. 
        Given I navigate to store
        When I land on homepage
        Then I see the Best Deals Online and trending products header
        Then I grab the list of stores from image carousel under best deals online
        Then count list of items in top trending products
        Then I navigate to the coupon page
        Then I see top stores header
        Then Then I grab the list of top stores and check if URLs are active
