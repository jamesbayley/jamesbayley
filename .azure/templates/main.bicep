param static_web_app_name string
param location string = resourceGroup().location

resource swa 'Microsoft.Web/staticSites@2022-03-01' = {
  name: static_web_app_name
  location: location
  properties: {}
  tags: null
  sku: {
    name: 'Standard'
    size: 'Standard'
  }
}
