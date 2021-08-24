const settings = {
  "name": "ssutr",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "S.S.U.T.R",
      "description": "Sussex Stand Up To Racism"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Steyning", "/category/steyning/"],
            ["Worthing + Adur", "/category/worthing-adur/"],
            ["Brighton", "/category/brighton/"],
            ["Eastbourne", "/category/eastbourne/"],
            ["Hastings", "/category/hastings/"],
            ["About Us","/about/"]
          ],
          
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.wp.sussexstanduptoracism.org/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
