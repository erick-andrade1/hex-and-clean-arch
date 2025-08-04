import { Entity, EntityProps } from '../../shared';

export interface UserProps extends EntityProps {
  name: string;
  email: string;
  password: string;
}

export class User extends Entity<UserProps> {
  readonly name: string;
  readonly email: string;
  readonly password: string;

  constructor(props: UserProps) {
    super(props);
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }
}
