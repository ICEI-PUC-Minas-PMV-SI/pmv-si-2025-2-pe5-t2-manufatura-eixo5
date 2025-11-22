import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

interface IProps {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date
}

interface IInputProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  createdAt?: Date
}

@Entity({ name: "products" })
export class Product {
  @ApiProperty({ format: "uuid" })
  @PrimaryColumn("uuid", {
    primaryKeyConstraintName: "PK_product_id"
  })
  id: string;

  @ApiProperty({ example: "Computador" })
  @Column({ name: "name", type: "varchar", nullable: false, length: 255 })
  name: string;

  @ApiProperty({ example: "Lorem ipsum dolor sit ammet" })
  @Column({ name: "description", type: "varchar", nullable: false, length: 320 })
  description: string;

  @ApiProperty({ example: 1200.00 })
  @Column({ name: "price", type: "float", nullable: false })
  price: number;

  @ApiProperty({ format: "timestamp" })
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  constructor(props: IInputProps) {
    if(!props) return

    this.id = props?.id ?? randomUUID()
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.createdAt = props?.createdAt ?? new Date()
  }

  json(): IProps {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      createdAt: this.createdAt
    }
  }
}
