export interface EntityProps {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  isDeleted?: boolean;
}

export abstract class Entity<T extends EntityProps = any> {
  readonly id?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;
  readonly isDeleted?: boolean;

  constructor(props: T) {
    this.id = props.id ?? null;
    this.createdAt = props.createdAt ?? null;
    this.updatedAt = props.updatedAt ?? null;
    this.deletedAt = props.deletedAt ?? null;
    this.isDeleted = props.isDeleted ?? false;
  }
}
