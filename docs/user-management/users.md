---
title: Users 
sidebar_position: 2
---
The Users tab under the User Management section enables Organization Administrators to invite new users, manage existing workspace users, control access permissions, and maintain organizational security within the CX Astra CRM platform. 

This module provides a centralized location for user onboarding, user status management, access control, audit tracking, and workspace-level user administration. 

---
## Purpose 

The Users module helps administrators: 
- Invite and onboard new users into the workspace  
- Assign appropriate roles and permissions  
- Monitor user activity and login history  
- Control user access to the CRM  
- Manage invited, active, deactivated, and suspended users  
- Maintain audit logs for all user-related actions 

## Access Permissions 

The User's tab is accessible only to: 

- Organization Admins  
- Managers with View Users permission  

Only users with appropriate administrative privileges can: 
- Invite users  
- Edit user details  
- Change roles  
- Deactivate users  
- Delete users  
- Resend invitations 
---
## Users Module Overview 

The Users module consists of two major functionalities: 
1. Invite Users  
2. Users List & Management 

### 1. Invite Users 

The Invite User functionality allows administrators to add new users to the organization workspace. 

#### Invite User Access

The Invite User option is available only to users with Admin-level permissions. 

When the administrator clicks the Invite User button: 

- A modal form opens  
- User invitation details can be entered  
- Role and access permissions can be assigned 

![add user] (/img/user-management/addUser.png)

The invitation form contains the following fields:
-  Email Address
- Role \ Permission level
- Custom Welcome Message
The Email Address field supports inviting multiple users simultaneously.

#### Role Assignment 

The Role / Permission Level dropdown fetches available roles from the Roll Management module. 

**Examples may include:** 

- Admin  
- Sales Representative  
- Sales Manager  
- Support Executive  
- Marketing User 

The selected role determines: 
- User access permissions  
- Module visibility  
- Workspace capabilities 
 
#### Custom Welcome Message 

Administrators can optionally include a personalized welcome message in the invitation email. 

This helps provide: 
- Onboarding instructions  
- Team introduction  
- Workspace guidelines  
- Additional notes 

Before sending the invitation, the system validates: 
- Email format  
- Duplicate email entries  
- Existing organization membership 

If the email already exists within the organization: 
The system displays the message User already exists under your organization. 
Optionally, administrators may resend the invitation if the account was never activated. 

#### Invitation Submission Flow 

After successful validation: 
1. Invitation email is generated  
2. Secure activation/signup link is created  
3. User record is added to the organization  
4. User status is set to Invited  
5. Audit log entry is recorded 

#### Audit Logging 

Every invitation event is recorded in the system audit trail. 

Audit details include: 
- Who invited the user  
- Invitation timestamp  
- Assigned role  
- Invitation status 

---
### 2. User Activation Flow 

Once invited, the user completes account activation using the email link. 

#### Activation Process
The invited user: 
1. Opens the invitation email  
2. Clicks the activation link  
3. Gets redirected to the CRM signup page 

#### Account Activation
After successful registration: 
- User status changes from Invited → Active  
- Assigned permissions become active  
- Workspace access is granted  
- Last login timestamp is recorded  

---
### 3. Users List 
The Users List provides a centralized view of all users within the organization workspace.

#### User Status Types 
The platform supports multiple user statuses. 
1. Invited - Invitation sent but activation pending 
2. Active - User successfully activated 
3. Deactivated - Access manually disabled 
4. Suspended - Deleted users shown under suspended filter 

#### Suspended Users Behavior 
Users with Suspended status are: 
- Soft-deleted users  
- Hidden from default listing view  
- Visible only when the Suspended status filter is applied 

#### Actions Menu 

Administrators can perform multiple actions from the user actions menu such as:
1. Edit 
2. Deactivate 
3. Delete 
4. Resend Invite 
5. Cancel Invite 

### Action Conditions 
#### Resend Invite 
Available only when: 
- User status = Invited  
- User has not activated the account  
A new activation email is generated and sent. 

#### Cancel Invite 

Available only when: 
- User status = Invited  
- User has not accepted the invitation  

Once canceled: 
- Invitation link becomes invalid  
- User activation is blocked 

#### Deactivate User 
When a user is deactivated: 
- Access to CRM is removed immediately  
- User information remains in records  
- Audit history is preserved 

#### Delete User 
Deleting a user performs a soft delete operation. 
Effects include: 
- User status changes to Suspended  
- Historical records are preserved  
- Audit logs remain available 

### Sorting & Filtering 
The Users tab supports advanced search and filtering capabilities. 
Available Filters: 
- Role 
- Status 
- Workspace 
- Team 
- Search  


