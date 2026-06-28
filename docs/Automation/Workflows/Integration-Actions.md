---
sidebar_position: 8
title: Integration Actions
---

# Integration Actions

## Overview

Workflow Integration Actions allow Lead workflows to communicate with external applications and services.

Organizations often use multiple business systems alongside their CRM, such as marketing automation platforms, ERP systems, analytics tools, and custom applications.

Integration Actions enable workflows to automatically send Lead information to these systems whenever predefined workflow conditions are met.

> **Note**
>
> The current version supports outbound integrations using **Webhooks**.

---

## Benefits

Workflow Integration Actions help organizations:

- Eliminate manual data transfer.
- Synchronize CRM data with external systems.
- Trigger automated processes outside the CRM.
- Support reporting and analytics.
- Integrate with custom business applications.
- Maintain a single source of truth.

---

## Supported Integration Actions

| Action | Description |
|---------|-------------|
| Call Webhook | Send Lead information to an external HTTP endpoint |

---

## Future Enhancements

Future versions may support:

- API Integrations
- Bi-directional Synchronization
- Inbound Webhooks
- External Workflow Triggers
- Authentication Providers
- Advanced Retry Policies

---

## Call Webhook

### Overview

The **Call Webhook** action sends Lead information to an external application whenever the workflow reaches the webhook node.

Webhooks provide a lightweight integration mechanism without requiring custom CRM development.

---

### Configuration

| Setting | Description |
|---------|-------------|
| Webhook Name | Friendly name for identification |
| HTTP Method | POST |
| Endpoint URL | External destination URL |
| Headers | Optional HTTP headers |
| Payload Format | JSON |
| Payload Mapping | Lead fields to include |
| Timeout | System-defined timeout |
| Failure Handling | Log only |

---

### Configuration Details

#### Webhook Name

Provide a descriptive name for the webhook.

Examples:

- Send Lead to Marketing Platform
- Sync Lead with ERP
- Push Lead to Analytics System

---

#### Endpoint URL

Specify the secure endpoint that will receive the webhook request.

Example:

```text
https://api.example.com/leads
```

> **Recommendation**
>
> Always use secure **HTTPS** endpoints whenever possible.

---

#### Headers

Optional HTTP headers may be configured.

Examples include:

- Authorization
- X-API-Key
- Content-Type
- Custom Integration Headers

---

#### Payload Format

Webhook requests are currently sent only in **JSON** format.

No other payload formats are supported.

---

## Payload Mapping

### Overview

Payload Mapping determines which Lead fields are included in the webhook request.

Administrators can choose to send:

- Standard Lead Fields
- System Fields
- Custom Fields

---

### Standard Lead Fields

Examples include:

- Lead ID
- Lead Name
- Email Address
- Phone Number
- Lead Status
- Lead Owner

---

### System Fields

Examples include:

- Lead Source
- Industry
- Company Size
- Budget

---

### Custom Fields

Any custom Lead field available within the CRM can also be included in the payload.

---

### Example Payload

```json
{
  "lead_id": "L-12345",
  "name": "John Doe",
  "status": "Qualified",
  "email": "john@company.com",
  "company_size": "Enterprise",
  "source": "Website"
}
```

---

### Payload Mapping Rules

- Only Lead fields can be mapped.
- Custom scripting is not supported.
- Data transformations are not supported.
- Calculated values cannot be included.
- Values are sent exactly as stored in the CRM.

This ensures predictable and reliable integrations.

---

## Common Use Cases

### Send Qualified Leads to Marketing Platforms

Automatically share qualified Leads with an external marketing automation platform.

#### Example

```text
Trigger:
Lead Created

Entry Filters:

Source = Website
Status = Qualified

↓

Call Webhook

Send Lead to Marketing Platform
```

---

### Send High-Value Leads to Analytics Platforms

Automatically send important Leads to business intelligence systems.

#### Example

```text
IF Budget > 100,000

↓

Call Webhook

Send Lead to Analytics Platform
```

Typical use cases include:

- Revenue Forecasting
- Executive Dashboards
- Lead Quality Analysis
- Performance Reporting

---

### Synchronize with ERP Systems

Organizations may synchronize Lead information with ERP software.

#### Example

```text
IF Industry = Manufacturing

↓

Call Webhook

Send Lead to ERP
```

The CRM remains the primary record while external systems consume the shared data.

---

## Webhook Execution Behavior

### Fire-and-Forget Processing

Webhook actions follow a **Fire-and-Forget** execution model.

When a workflow reaches a webhook:

1. The webhook request is sent.
2. Workflow execution immediately continues.
3. Responses are not evaluated.
4. Workflow logic does not branch based on the response.

This prevents external systems from delaying CRM automation.

---

### Execution Order

Webhook actions execute exactly where they are placed within the workflow.

Any previous workflow updates are included in the webhook payload.

#### Example

```text
Update Lead Status = Qualified

↓

Assign Lead Owner

↓

Call Webhook
```

The webhook receives the updated Lead information.

---

## Failure Handling

Webhook requests may fail because of:

- Network issues
- Timeout errors
- Invalid URLs
- Server failures

Examples include:

- HTTP 400
- HTTP 404
- HTTP 500
- Connection Timeout

---

### Failure Behavior

If a webhook fails:

- Failure is recorded in Workflow Logs.
- Workflow execution continues.
- No automatic retry occurs.
- Workflow is not interrupted.

This ensures external system failures do not stop CRM automation.

---

## Timeout Handling

Each webhook request has a predefined timeout period.

If the destination system does not respond before the timeout:

- The request is cancelled.
- Execution is marked as failed.
- Workflow continues normally.

This prevents workflows from becoming blocked by slow external systems.

---

## Security Considerations

### HTTPS Support

Secure HTTPS endpoints are strongly recommended.

Benefits include:

- Encrypted communication
- Better security
- Reduced risk of data interception

---

## Workflow Audit Logs

Every webhook execution is recorded for monitoring and troubleshooting.

Logged information includes:

- Workflow Name
- Lead Record
- Webhook Name
- Endpoint URL
- Execution Timestamp
- Payload Snapshot
- Execution Status
- HTTP Response Code (when available)

---

### Successful Execution

```text
Webhook:
Send Lead to Marketing Platform

Status:
Success

Timestamp:
10:15 AM
```

---

### Failed Execution

```text
Webhook:
Send Lead to Analytics Platform

Status:
Failed

Reason:
Request Timeout

Timestamp:
10:18 AM
```

---

## Best Practices

- Use meaningful webhook names.
- Send only the fields required by the external system.
- Prefer secure HTTPS endpoints.
- Validate endpoint URLs before publishing workflows.
- Monitor webhook execution logs regularly.
- Avoid transmitting unnecessary sensitive information.
- Test integrations in a non-production environment.
- Keep payload mappings simple and easy to maintain.

---

## Summary

Workflow Integration Actions allow CRM workflows to securely communicate with external applications through webhooks.

By combining webhook integrations with workflow triggers, logic, timing, and action nodes, organizations can automate data synchronization, improve system interoperability, and streamline business processes while ensuring CRM workflows continue executing even if external systems become unavailable.