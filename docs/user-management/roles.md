---
title: Roles
sidebar_position: 3
---
The Roles tab under the User Management module allows administrators to define and manage role-based access permissions across the CX Astra platform. 

Roles determine: 
- Which modules a user can access  
- What actions a user can perform  
- What records a user can view or manage  
- Assignment capabilities  
- AI and Pulse access permissions  
- Administrative privileges  

The platform uses a centralized permission engine to ensure secure, scalable, and consistent access management across CRM, Pulse, AI, Reports, Users, Teams, and System modules.

### Purpose 
The Roles module helps organizations: 
- Implement centralized access control  
- Restrict unauthorized operations  
- Define module-level permissions  
- Configure action-level permissions  
- Control data visibility using scope logic  
- Manage assignment restrictions  
- Prevent privilege escalation  
- Maintain audit compliance 

### Role Types 
The system supports two types of roles: 
1. **System Roles**: Default predefined roles available during organization onboarding 
2. **Custom Roles**: User-created roles configured based on business requirements 

### System Roles 
System roles are automatically available when a workspace is created. 
**Examples may include:** 
- Super Admin  
- Admin  
- Sales Manager  
- Sales Representative  
- Support User  
System roles may have certain protected permissions and restrictions 

### Custom Roles 
Administrators can create custom roles to match organization-specific workflows and operational requirements. 
Custom roles provide flexibility for: 
- Team-specific permissions  
- Department-based access  
- Specialized operational control  
- Controlled feature access 

### Creating a New Role 
To create a new role: 
1. Navigate to Settings → User Management → Roles  
2. Click the Add Role button  
3. The Create New Role form appears  
4. Enter role details  
5. Configure permissions and scopes  
6. Save the role 

![add role](/img/user-management/role.png)

#### Permissions Architecture 

The platform uses a layered permission structure consisting of: 
1. Module-Level Access  
2. Action-Level Permissions  
3. Visibility Scope Logic  
4. Assignment Scope Logic 

### 1. Module-Level Access Control 

Module access determines whether users can access a particular module. 

If module access is disabled: 
- All actions inside that module are automatically denied 

#### Supported Module Access Controls 
Administrators can enable or disable access for: 
1. CRM: Access CRM modules 
2. Pulse: Access conversations and communication features 
3. AI: Access AI-related functionality 
4. Reports: Access reporting and analytics 
5. Users: Access user management 
6. Teams: Access team management 
7. Roles: Access role management 
8. System settings: Access administrative settings 

![modules](/img/user-management/modules.png)

### 2. Action-Level Permissions 

Action permissions define what operations users can perform within a module. 

These permissions are configured individually for each module.

#### CRM Action Permissions 
The following permissions apply to CRM modules such as: 
- Leads  
- Deals  
- Contacts  
- Organizations  
- Activities  
- Notes

#### Supported CRM Actions 
- Create 
- View 
- Modify 
- Delete 
- Assign 
- Import 
- Export 
- Merge 
- Convert Lead 
These permissions function as Boolean access controls. 

#### Pulse Permissions 
Pulse module permissions include: 
- Reply 
- Modify Conversation 
- Assign Conversation 
- Close/Reopen conversation 
- Delete Conversation 
- Merge Conversation 

#### AI Permissions 
AI-related permissions include: 
- Use AI Suggestions - Access AI-generated suggestions 
- Override AI Response - Modify AI-generated responses 
- View AI Logs - Access AI activity logs 
- Configure AI - Manage AI configuration settings 

#### System Permissions 
Administrative permissions include: 
- Create User 
- Modify User 
- Deactivate User 
- Create Team 
- Modify Team 
- Manage Roles 
- Configure system settings 

### Visibility Scope Logic 
The platform uses scope-based visibility control to determine what records users can access. 

This scope logic applies independently from hierarchy-based access. 

Supported Scope Types 
1. Own - Access only owned records 
2. Team - Access records owned by team members 
3. All – Access All records 

### Scope Evaluation Logic 
The system evaluates permissions using the following hierarchy: 

ALL > TEAM > OWN 

Higher scope always overrides lower scope. 

### Multi-Role Scope Resolution 
Users may have multiple roles assigned simultaneously. 
The system applies: 
- Additive permission logic (OR logic)  
- Highest scope wins 

### Role Management Actions 
Administrators can perform the following actions: 
- Create Role 
- Edit Role  
- Delete Role  
- View Role 

### Editing Roles 
Administrators can modify: 
- Module access  
- Action permissions  
- Scope levels  
- Assignment permissions  
- Role descriptions 

### Filters in Roles Tab 
Administrators can filter roles using: 
- Status 
- Role type 
- Create Date 
- Created By 

### Security Enforcement 
The permission framework ensures: 
- Centralized permission evaluation  
- Unauthorized access prevention  
- Instant permission updates  
- Consistent action validation  
- Controlled module access  
- Secure assignment handling 


