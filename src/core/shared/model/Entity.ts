export interface EntityProps {
  id?: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
  isDeleted: boolean;
}

export class Entity implements EntityProps {
  readonly id?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date | null;
  readonly deletedAt: Date | null;
  readonly isDeleted: boolean;

  constructor(props: EntityProps) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.deletedAt = props.deletedAt;
    this.isDeleted = props.isDeleted ?? false;
  }
}
