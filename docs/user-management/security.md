---
sidebar_position: 5
title: Security
description: Learn how Tenant Administrators can configure workspace-level security controls using Allowed IPs and Allowed Domains.
---

# Security

The **Security** section allows Tenant Administrators to configure workspace-level security controls that determine **who can access the workspace and from which network locations**.

These settings help organizations restrict workspace access to trusted users and approved networks.

The Security section includes:

- **Allowed IPs**
- **Allowed Domains**

---

## 1. Allowed IPs

**Allowed IPs** allows Tenant Administrators to restrict workspace access to specific trusted IP addresses or IP ranges.

This can be used to allow access only from approved:

- Office networks
- VPN networks
- Branch locations
- Partner networks
- Other trusted network locations

![Allowed-IP](/img/user-management/AllowedIP.png)

## Managing Allowed IPs

Administrators can:

- Add an IP address or IP range
- Edit an existing entry
- Enable or disable an entry
- Remove an entry

Each Allowed IP entry contains:

- **IP Address / CIDR Range**
- **IP Type**
- **Description**
- **Status**

### IP Type

Administrators can optionally categorize an IP entry as:

- Office
- VPN
- Branch
- Partner
- Temporary
- Other

:::note
The **IP Type** is informational and does not affect access validation.
:::

### IP Status

Each entry can be:

- **Active** – The IP address or range is allowed to access the workspace.
- **Disabled** – The IP address or range is not considered during access validation.

## IP-Based Access Validation

When a user attempts to authenticate into the workspace, the system checks the user's current IP address against the workspace's **Active Allowed IPs**.

If the IP address matches an active entry, authentication continues normally.

If the IP address does not match any active entry, access is denied.

The user is shown a message such as:

> Access from your current IP address is not permitted for this workspace.

## API Access

Allowed IP restrictions also apply to authenticated API requests.

If an authenticated request originates from an IP address that is not permitted:

- The request is rejected.
- The system returns **HTTP 403 Forbidden**.
- The user cannot access protected APIs from that network.

## No Active Allowed IPs

If the workspace does not have any **Active Allowed IPs** configured:

- Users can authenticate normally.
- Authenticated API requests continue normally.
- The workspace is treated as unrestricted by IP.

This allows administrators to enable IP restrictions only when required.

## Multiple Allowed IPs

Administrators can configure multiple IP addresses and ranges for the same workspace.

A user is allowed to access the workspace when their IP matches **any Active Allowed IP**.

## Updating Allowed IPs

When an administrator disables or removes an Allowed IP:

- New authentication attempts from that IP are blocked.
- New API requests from that IP are rejected.
- Existing users are not disabled or deleted.

Access is controlled based on the user's current network location.

## Allowed IP Validation

The system validates IP entries before they are saved.

The following rules apply:

- Duplicate IP addresses are not allowed.
- Duplicate CIDR ranges are not allowed.
- Invalid IPv4 addresses are rejected.
- Invalid CIDR notation is rejected.
- Leading and trailing spaces are removed.
- Only Active entries are used for access validation.

---

## 2. Allowed Domains

**Allowed Domains** allows Tenant Administrators to control which email domains can be used to join the workspace.

This helps organizations ensure that only users belonging to approved company, subsidiary, partner, or guest domains can join the workspace.

![Allowed-Domain](/img/user-management/AllowedDomain.png)

## Managing Allowed Domains

Administrators can:

- Add a domain
- Edit a domain
- Enable or disable a domain
- Remove a domain

Each domain must be unique within the workspace.

Domains are stored in lowercase and are treated as **case-insensitive**.

## Domain Information

Each Allowed Domain can contain:

- **Domain Name**
- **Domain Type**
- **Description**
- **Status**

### Domain Type

Administrators can optionally categorize a domain as:

- Company
- Subsidiary
- Partner
- Guest
- Other

:::note
**Domain Type** is informational only and does not change the access rules.
:::

### Domain Status

A domain can be:

- **Active** – Users from the domain are allowed to register or be invited.
- **Disabled** – The domain is not accepted for new registrations or invitations.

## Invitation Validation

When an administrator invites a user, the system checks the email domain against the workspace's **Active Allowed Domains**.

If the domain is allowed, the invitation can be created.

If the domain is not allowed, the invitation is rejected.

For example:

> The email domain `gmail.com` is not allowed for this workspace.

No invitation is created for an unauthorized domain.

## Self-Registration Validation

When self-registration is enabled, the user's email domain is checked against the active Allowed Domains.

Registration is allowed only when the user's domain is configured as an active Allowed Domain.

If the domain is not allowed, registration is blocked and the user is shown a message such as:

> Your email domain is not authorized to join this workspace. Please contact your administrator.

## Invitation Acceptance

The email domain is also validated when an invited user accepts an invitation.

If an administrator disables or removes the domain after the invitation was created:

- The pending invitation can no longer be accepted.
- The user must use an authorized domain to join the workspace.

## Multiple Allowed Domains

A workspace can have multiple active Allowed Domains.

Users belonging to any active domain can register or accept invitations.

## Updating Allowed Domains

When an administrator disables or removes a domain:

- New invitations to that domain are blocked.
- New registrations from that domain are blocked.
- Pending invitations for that domain can no longer be accepted.
- Existing active users belonging to that domain continue to access the workspace normally.

Disabling or removing a domain does **not** automatically:

- Disable existing users
- Delete existing users
- Remove users from the workspace

## Domain Validation

The system validates domains before saving them.

The following rules apply:

- Domain names are case-insensitive.
- Duplicate domains are not allowed.
- Invalid domain formats are rejected.
- Leading and trailing spaces are removed.
- Wildcard domains such as `*.company.com` are not supported in Version 1.
- Personal email domains are allowed only when explicitly added by the administrator.

---

## Audit Logging

Security configuration changes are recorded in the audit trail.

### Allowed IP Audit Events

For **Allowed IPs**, audit events include:

- Allowed IP Added
- Allowed IP Updated
- Allowed IP Removed
- Allowed IP Enabled
- Allowed IP Disabled

### Allowed Domain Audit Events

For **Allowed Domains**, audit events include:

- Domain Added
- Domain Updated
- Domain Removed
- Domain Enabled
- Domain Disabled

### Audit Information

Audit information includes:

- **Administrator**
- **Timestamp**
- **Previous Value**, where applicable
- **New Value**, where applicable

The system also records access attempts denied because of IP restrictions, including:

- **Tenant**
- **User**, when available
- **Client IP**
- **Timestamp**
- **Reason for denial**