import { FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat';
import User = firebase.User;

export interface Session {
  user: AppUser;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AppUser extends User {}

export interface Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export function createSession(params: Partial<Session>): Session {
  return {
    user: params.user as AppUser,
  } as Session;
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
