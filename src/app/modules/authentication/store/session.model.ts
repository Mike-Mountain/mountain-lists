import { FormBuilder, FormGroup } from '@angular/forms';

export interface Session {
  token: string;
  user: User;
}

export interface Credentials {
  identifier: string;
  password: string;
}

export interface RegistrationCredentials extends Credentials {
  email: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  created_at: string;
  updated_at: string;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export function createSession(params: Partial<Session>): Session {
  return {
    token: params.token,
    user: createUser(params.user as User),
  } as Session;
}

export function createUser(params: Partial<User>): User {
  return {
    id: params.id,
    username: params.username,
    blocked: params.blocked,
    created_at: params.created_at,
    confirmed: params.confirmed,
    email: params.email,
    provider: params.provider,
    role: createRole(params.role as Role),
    updated_at: params.updated_at,
  } as User;
}

export function createRole(params: Partial<Role>): Role {
  return {
    id: params.id,
    name: params.name,
    description: params.description,
    type: params.type,
  } as Role;
}

export function createInitialState(): Session {
  return {} as Session;
}

export interface AuthenticationFields {
  username: string;
  email: string;
  identifier: string;
  password: string;
}

export function createAuthenticationForm(
  fields: Partial<AuthenticationFields>,
  formBuilder: FormBuilder
): FormGroup {
  return formBuilder.group(fields);
}
