---
title: Lead Workflows
sidebar_position: 2
---

# Lead Workflows

## Overview

Lead Workflows automate Lead-related business processes.

A workflow starts when a configured trigger event occurs and the Lead satisfies configured Entry Filters.

## Creating a Lead Workflow

1. Navigate to Workflows.
2. Click Create Workflow.
3. Select Lead Workflow.

![Lead-Workflow](/img/Automation/LeadWorkflow.png)

4. Enter workflow name and description.
5. Select trigger type.
6. Configure entry filters.
7. Define actions.
8. Save and activate.

![workflow-Builder](/img/Automation/lwBuilder.png)

## Entry Filters

Entry Filters restrict which Leads enter a workflow.

### Example

| Field | Operator | Value |
|---------|---------|---------|
| Lead Source | Is | Website |
| Company Size | Is | Enterprise |
| Country | Equals | India |
| Budget | Greater Than | 200000 |

All conditions must evaluate to TRUE.

## Trigger Types

### Lead Created

Starts when a new Lead is created.

### Lead Updated

Starts when an existing Lead is updated.

### Lead Stage Changed

Starts when a Lead moves between stages.

### Time-Based Lead Scan

Runs on a schedule.

### Webhook (Lead Creation/Update)

Starts when Lead data arrives through integrations.