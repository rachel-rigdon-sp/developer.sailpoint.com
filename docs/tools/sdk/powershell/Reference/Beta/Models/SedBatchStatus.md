---
id: beta-sed-batch-status
title: SedBatchStatus
pagination_label: SedBatchStatus
sidebar_label: SedBatchStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchStatus', 'BetaSedBatchStatus'] 
slug: /tools/sdk/powershell/beta/models/sed-batch-status
tags: ['SDK', 'Software Development Kit', 'SedBatchStatus', 'BetaSedBatchStatus']
---


# SedBatchStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **String** | status of batch | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchStatus = Initialize-PSSailpoint.BetaSedBatchStatus  -Status OK
```

- Convert the resource to JSON
```powershell
$SedBatchStatus | ConvertTo-JSON
```


[[Back to top]](#) 

