---
title: Users & Access
sidebar_position: 2
---

# Users & Access

## Overview

The **Users & Access** module allows administrators to manage channel-level access for users within Pulse. It determines which communication channels a user can access and handle conversations from.

By assigning channel permissions, organizations can ensure that users only have access to the channels relevant to their role and responsibilities.

### Examples

- Support agents may be assigned to WhatsApp and Web Chat.
- Social media teams may be assigned to Instagram and Facebook Messenger.
- Managers and administrators may be granted access to all channels.

---

## Purpose

The Users & Access module helps organizations:

- Control channel-level permissions
- Restrict access to specific communication channels
- Assign users to relevant support channels
- Improve security and access management
- Ensure conversations are routed to authorized users

---

## Channel Filters

Administrators can view user access assignments by channel using the filter tabs available at the top of the page.

### Available Filters

| Filter | Description |
|----------|-------------|
| All Channels | Displays channel access for all configured channels |
| WhatsApp | Displays users assigned to WhatsApp |
| Instagram | Displays users assigned to Instagram |
| Facebook Messenger | Displays users assigned to Messenger |
| Web Chat | Displays users assigned to the Chatbot/Web Chat channel |

These filters make it easier to review and manage channel assignments.

---

## User Access Table

The Users & Access table provides a consolidated view of user permissions across all channels.

### User

Displays the name of the user.

### Role

Displays the role assigned to the user.

#### Examples

- Super Admin
- Manager
- Member

### Channel Access

Each channel column contains a checkbox indicating whether the user has access to that channel.

#### Available Channel Columns

- WhatsApp
- Instagram
- Messenger
- Chatbot

---

## Granting Channel Access

To grant a user access to a channel:

1. Locate the user in the table.
2. Select the checkbox under the desired channel.
3. Save the changes.

The user will now be able to receive and manage conversations from the selected channel.

---

## Removing Channel Access

To remove access:

1. Locate the user.
2. Clear the checkbox for the channel.
3. Save the changes.

The user will no longer be able to access conversations from that channel.

---

## All Channels Permission

The **All** option provides access to every configured Pulse channel.

### When Enabled

- The user automatically receives access to all current channels.
- Newly added channels may also become available based on system configuration.

### Commonly Used For

- Super Administrators
- Operations Managers
- Team Leads

---

## Add User

The **Add User** option allows administrators to include eligible users in the Pulse access mapping list.

![Add-User](/img/PulseSettings/addUser.png)

### Steps

1. Click **Add User**.
2. In the **Select Users** field, search for the user by:
   - Name
   - Email Address
3. Select one or more users from the dropdown list.
4. Click **Add User**.

The selected users will be added to the Pulse Inbox user list and can then be assigned access to individual channels.

:::note
Only users that already exist in the system can be added to Pulse Inbox. If a user does not appear in the **Select Users** dropdown, create the user first through the **User Management** module and then add them to Pulse Inbox.
:::

---

## Search Users

The search bar can be used to quickly locate users by name.

This is particularly useful in organizations with a large number of Pulse users.

---

## Example User Access Configuration

| User | Role | WhatsApp | Instagram | Messenger | Chatbot |
|--------|--------|----------|-----------|-----------|---------|
| Support Agent | Member | ✓ | ✗ | ✗ | ✓ |
| Social Media Executive | Member | ✗ | ✓ | ✓ | ✗ |
| Support Manager | Member | ✓ | ✓ | ✓ | ✓ |

:::tip
This configuration ensures that each user only sees and handles conversations relevant to their role.
:::

---

## Best Practices

- Assign users only to channels they actively manage.
- Grant **All Channels** access only to administrative roles.
- Periodically review channel assignments.
- Remove channel access for inactive users.
- Align channel permissions with organizational responsibilities.