---
id: beta-vendor-connector-mapping-updated-at
title: VendorConnectorMappingUpdatedAt
pagination_label: VendorConnectorMappingUpdatedAt
sidebar_label: VendorConnectorMappingUpdatedAt
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'VendorConnectorMappingUpdatedAt', 'BetaVendorConnectorMappingUpdatedAt'] 
slug: /tools/sdk/python/beta/models/vendor-connector-mapping-updated-at
tags: ['SDK', 'Software Development Kit', 'VendorConnectorMappingUpdatedAt', 'BetaVendorConnectorMappingUpdatedAt']
---

# VendorConnectorMappingUpdatedAt

An object representing the nullable timestamp of the last update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **datetime** | The timestamp when the mapping was last updated, represented in ISO 8601 format. | [optional] 
**valid** | **bool** | A flag indicating if the 'Time' field is set and valid. | [optional] [default to False]
}

## Example

```python
from sailpoint.beta.models.vendor_connector_mapping_updated_at import VendorConnectorMappingUpdatedAt

vendor_connector_mapping_updated_at = VendorConnectorMappingUpdatedAt(
time='2024-03-14T12:56:19.391294Z',
valid=True
)

```
[[Back to top]](#) 

